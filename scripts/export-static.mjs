import { spawn, spawnSync } from "node:child_process";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

// Static export for classic web hosting (Hostinger public_html).
// Builds the app, boots the production server, snapshots every route,
// and assembles an upload-ready folder in dist/hostinger.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://marloncoreas.com";
const PORT = 4180;
const OUT = path.resolve("dist/hostinger");

const routes = [
  { route: "/", file: "index.html" },
  { route: "/es", file: "es/index.html" },
  { route: "/services/websites", file: "services/websites/index.html" },
  { route: "/services/custom-software", file: "services/custom-software/index.html" },
  { route: "/es/servicios/sitios-web", file: "es/servicios/sitios-web/index.html" },
  { route: "/es/servicios/software-a-la-medida", file: "es/servicios/software-a-la-medida/index.html" },
  { route: "/privacy", file: "privacy/index.html" },
  { route: "/es/privacidad", file: "es/privacidad/index.html" },
  { route: "/robots.txt", file: "robots.txt" },
  { route: "/sitemap.xml", file: "sitemap.xml" }
];

console.log(`Exporting with NEXT_PUBLIC_SITE_URL=${SITE_URL}`);

const build = spawnSync("npx", ["vinext", "build"], {
  stdio: "inherit",
  env: { ...process.env, NEXT_PUBLIC_SITE_URL: SITE_URL }
});
if (build.status !== 0) process.exit(build.status ?? 1);

const server = spawn("npx", ["vinext", "start"], {
  stdio: "ignore",
  env: { ...process.env, NEXT_PUBLIC_SITE_URL: SITE_URL, PORT: String(PORT) }
});

try {
  let ready = false;
  for (let attempt = 0; attempt < 40 && !ready; attempt++) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    ready = await fetch(`http://localhost:${PORT}/`).then((r) => r.ok, () => false);
  }
  if (!ready) throw new Error(`Production server did not start on port ${PORT}`);

  await rm(OUT, { recursive: true, force: true });
  await cp("dist/client", OUT, {
    recursive: true,
    filter: (source) => !source.includes(`${path.sep}.vite`)
  });

  for (const { route, file } of routes) {
    const response = await fetch(`http://localhost:${PORT}${route}`);
    if (!response.ok) throw new Error(`${route} responded ${response.status}`);
    const target = path.join(OUT, file);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, Buffer.from(await response.arrayBuffer()));
    console.log(`  ${route} -> ${path.relative(OUT, target)}`);
  }

  // Serve /es without a trailing-slash redirect so the canonical URL matches,
  // and collapse www/http variants onto the canonical origin.
  const host = new URL(SITE_URL).host;
  await writeFile(
    path.join(OUT, ".htaccess"),
    `Options -MultiViews -Indexes
RewriteEngine On

RewriteCond %{HTTP_HOST} ^www\\.${host.replaceAll(".", "\\.")}$ [NC]
RewriteRule ^ ${SITE_URL}%{REQUEST_URI} [R=301,L]

RewriteCond %{HTTPS} !=on
RewriteRule ^ ${SITE_URL}%{REQUEST_URI} [R=301,L]

RewriteRule ^es/?$ es/index.html [L]
RewriteRule ^services/websites/?$ services/websites/index.html [L]
RewriteRule ^services/custom-software/?$ services/custom-software/index.html [L]
RewriteRule ^es/servicios/sitios-web/?$ es/servicios/sitios-web/index.html [L]
RewriteRule ^es/servicios/software-a-la-medida/?$ es/servicios/software-a-la-medida/index.html [L]
RewriteRule ^privacy/?$ privacy/index.html [L]
RewriteRule ^es/privacidad/?$ es/privacidad/index.html [L]

# The mailer library is only ever loaded by contact.php, never requested directly.
RewriteRule ^api/vendor/ - [F,L]

ErrorDocument 404 /404.html

# Nothing here should be reachable over the web: dotfiles, the contact log and
# any mailer credentials that end up inside the site instead of above it.
# Both syntaxes are present so an older Apache does not fail the whole site.
<FilesMatch "^\\.|\\.log$|^config(\\.example)?\\.php$">
  <IfModule mod_authz_core.c>
    Require all denied
  </IfModule>
  <IfModule !mod_authz_core.c>
    Order allow,deny
    Deny from all
  </IfModule>
</FilesMatch>

<IfModule mod_headers.c>
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "DENY"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()"
  Header always set Cross-Origin-Opener-Policy "same-origin"
  # The framework emits per-build inline bootstrap scripts, so script hashes are
  # not stable; 'unsafe-inline' stays, but every other directive is locked down.
  Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://www.google-analytics.com; font-src 'self'; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; form-action 'self'; frame-ancestors 'none'; base-uri 'self'; object-src 'none'; upgrade-insecure-requests"
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 7 days"
  ExpiresByType image/png "access plus 7 days"
  ExpiresByType image/svg+xml "access plus 7 days"
</IfModule>
`
  );

  // Build assets are content-hashed, so they can be cached forever.
  await writeFile(
    path.join(OUT, "_next", ".htaccess"),
    `<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 year"
</IfModule>
<IfModule mod_headers.c>
  Header set Cache-Control "public, max-age=31536000, immutable"
</IfModule>
`
  );

  // Zip everything (dotfiles included) so nothing gets lost when uploading.
  await rm("dist/hostinger.zip", { force: true });
  const zip = spawnSync("zip", ["-qr", path.resolve("dist/hostinger.zip"), "."], { cwd: OUT });
  if (zip.status !== 0) throw new Error("zip failed");

  console.log(`\nDone. Upload dist/hostinger.zip to public_html and extract it there.`);
} finally {
  server.kill();
}
