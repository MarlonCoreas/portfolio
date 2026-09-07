import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { siteUrl } from '../src/config/site.ts';
import routes from '../src/config/routes.json' with { type: 'json' };

const root = new URL('../dist/hostinger/', import.meta.url);
const read = (file) => readFileSync(new URL(file, root), 'utf8');
const reference = new Map();

for (const [page, paths] of Object.entries(routes)) {
  for (const [lang, path] of Object.entries(paths)) {
    test(`${path}: shared landmarks, navigation, translations and canonical in exported HTML`, () => {
      const html = read(path === '/' ? 'index.html' : `${path.slice(1)}/index.html`);
      const other = lang === 'en' ? 'es' : 'en';
      assert.equal((html.match(/<header\b/g) || []).length, 1);
      assert.equal((html.match(/<footer\b/g) || []).length, 1);
      assert.equal((html.match(/<main\b/g) || []).length, 1);
      assert.equal((html.match(/<h1\b/g) || []).length, 1);
      const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1];
      assert.equal(new URL(canonical).href, new URL(path, siteUrl).href, 'canonical');
      assert.match(html, /<main[^>]*id="content"/);
      const header = html.match(/<header\b[\s\S]*?<\/header>/)[0];
      const footer = html.match(/<footer\b[\s\S]*?<\/footer>/)[0];
      for (const fragment of [header, footer]) {
        assert.ok(fragment.includes(`href="${paths[other]}"`), 'same-page language link is server rendered');
        for (const section of ['work','services','about']) assert.ok(fragment.includes(`href="${routes.home[lang]}#${section}"`));
      }
      assert.ok(header.includes(`href="${routes.home[lang]}#contact"`));
      assert.ok(footer.includes(`href="${routes.privacy[lang]}"`));
      const shared = [header,footer].map(part => part.replaceAll(`href="${paths[other]}"`, 'href="__alternate__"'));
      if (!reference.has(lang)) reference.set(lang, shared);
      else assert.deepEqual(shared, reference.get(lang), 'detail pages must inherit the identical shell');
      if (page === 'home') {
        const form = html.match(/<form\b[\s\S]*?<\/form>/)[0];
        assert.match(form, /action="\/api\/contact.php"/);
        for (const name of ['project_type','timeline','budget']) {
          const select = form.match(new RegExp(`<select[^>]*name="${name}"[^>]*>`))[0];
          assert.doesNotMatch(select, /required/);
        }
      }
    });
  }
}
