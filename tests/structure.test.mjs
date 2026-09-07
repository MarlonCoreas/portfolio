import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { alternateHref, homeSectionHref, routeAlternates, routePath, pageForPath, pageKeys, locales } from '../src/config/routes.ts';

const root = new URL('../', import.meta.url);
const read = (file) => readFileSync(new URL(file, root), 'utf8');

test('every route preserves page identity when switching language, including trailing slashes', () => {
  const unique = new Set();
  for (const page of pageKeys) {
    for (const lang of locales) {
      const path = routePath(page, lang);
      assert.equal(unique.has(path), false, `Duplicate route: ${path}`);
      unique.add(path);
      assert.equal(pageForPath(`${path}/`), page);
      const target = alternateHref(path, lang);
      assert.equal(target, routePath(page, lang === 'en' ? 'es' : 'en'));
      assert.equal(alternateHref(target, lang === 'en' ? 'es' : 'en'), path);
      assert.equal(routeAlternates(page, lang).canonical, path);
    }
  }
  assert.equal(unique.size, pageKeys.length * locales.length);
  assert.equal(alternateHref('/unknown', 'es'), '/');
});

test('navigation always points to a valid home section from a detail page', () => {
  const portfolio = read('components/PortfolioPage.tsx') + read('components/portfolio/ContactSection.tsx');
  for (const section of ['work', 'services', 'about', 'contact']) {
    assert.match(portfolio, new RegExp(`id="${section}"`));
    assert.equal(homeSectionHref('es', section), `/es#${section}`);
    assert.equal(homeSectionHref('en', section), `/#${section}`);
  }
});

test('component CSS cannot introduce a private color palette or undefined theme roles', () => {
  const files = readdirSync(new URL('src/styles/', root)).filter(f => f.endsWith('.css'));
  const sheets = files.map(file => [file, read(`src/styles/${file}`)]);
  const allCSS = sheets.map(([, css]) => css).join('\n');
  const definitions = new Set([...allCSS.matchAll(/(--[\w-]+)\s*:/g)].map(m => m[1]));
  for (const [file, css] of sheets) {
    if (file !== 'tokens.css') assert.doesNotMatch(css, /#[\da-f]{3,8}\b|\brgba?\(|\bhsla?\(/i, file);
    for (const [, role] of css.matchAll(/var\((--color-[\w-]+)/g)) assert.ok(definitions.has(role), `${file}: undefined ${role}`);
  }
});
