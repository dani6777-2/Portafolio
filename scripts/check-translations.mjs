#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const i18nPath = join(root, 'src/i18n/translations.ts');
const source = readFileSync(i18nPath, 'utf8');

const esBlock = source.split(/^const es: Record/m)[1].split(/^const en: Record/m)[0];
const enBlock = source.split(/^const en: Record/m)[1].split(/^export const translations/m)[0];

const esKeys = new Set([...esBlock.matchAll(/^\s*'([^']+)':/gm)].map((m) => m[1]));
const enKeys = new Set([...enBlock.matchAll(/^\s*'([^']+)':/gm)].map((m) => m[1]));

function collectFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry === 'i18n' || entry === 'assets') continue;
      out.push(...collectFiles(full));
    } else if (/\.(tsx|ts|astro)$/.test(entry)) {
      out.push(full);
    }
  }
  return out;
}

const used = new Set();
for (const file of collectFiles(join(root, 'src'))) {
  const content = readFileSync(file, 'utf8');
  for (const m of content.matchAll(/\bt\(['"]([^'" ]+)['"]/g)) used.add(m[1]);
}

const missingEs = [...used].filter((k) => !esKeys.has(k));
const missingEn = [...used].filter((k) => !enKeys.has(k));

let exitCode = 0;
if (missingEs.length) {
  console.error(`❌ Claves usadas sin definir en ES: ${missingEs.join(', ')}`);
  exitCode = 1;
}
if (missingEn.length) {
  console.error(`❌ Claves usadas sin definir en EN: ${missingEn.join(', ')}`);
  exitCode = 1;
}
if (esKeys.size !== enKeys.size) {
  console.error(
    `⚠️  Desbalance de claves (es=${esKeys.size}, en=${enKeys.size}). Sin traducir en EN: ${[...esKeys].filter((k) => !enKeys.has(k)).join(', ')}. Sin traducir en ES: ${[...enKeys].filter((k) => !esKeys.has(k)).join(', ')}`,
  );
  exitCode = 1;
}
if (!exitCode) {
  console.log(`✔️  Traducciones OK · ${esKeys.size} claves usadas, sin faltantes`);
}
process.exit(exitCode);