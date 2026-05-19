#!/usr/bin/env node
/**
 * Evolution Guard — Genesis Conductor
 * Prevents regressions in locked constants and structural invariants.
 * Run: node scripts/evolution-guard.js [--phase] [--verify]
 */

const fs = require('fs');
const path = require('path');

const EVOLUTION_CONFIG = path.join(__dirname, '..', 'conductor.evolution.json');
const LOCKED_FILES = [
  'public/assets/conductorkit.css',
  'public/assets/barcelona-extropic.css',
  'public/index.html',
];

const INVARIANTS = {
  surfaces: ['marketing', 'dashboard', 'specimen'],
  components: ['Shared', 'Marketing', 'Dashboard', 'Specimen', 'App'],
  constants: {
    signal: '#27e070',
    stem: '12px',
    contrast: '12:1',
  },
};

const ROOT = path.join(__dirname, '..');

function resolve(p) {
  return path.join(ROOT, p);
}

function checkPhase(config) {
  console.log(`\n── Phase Status ─────────────────────────────────`);
  console.log(`  Current : ${config.phases.current}`);
  console.log(`  Next    : ${config.phases.next}`);
  console.log(`  Done    : ${config.phases.completed.join(', ')}`);
}

async function verify() {
  if (!fs.existsSync(EVOLUTION_CONFIG)) {
    console.error(`✗ Evolution config missing: ${EVOLUTION_CONFIG}`);
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(EVOLUTION_CONFIG, 'utf8'));
  let passed = 0;
  let failed = 0;

  console.log(`\n── Locked Files ─────────────────────────────────`);
  for (const file of LOCKED_FILES) {
    if (fs.existsSync(resolve(file))) {
      passed++;
      console.log(`  ✓ ${file}`);
    } else {
      failed++;
      console.log(`  ✗ ${file} — MISSING`);
    }
  }

  console.log(`\n── Components ───────────────────────────────────`);
  for (const comp of INVARIANTS.components) {
    const p = resolve(`public/components/${comp}.jsx`);
    if (fs.existsSync(p)) {
      passed++;
      console.log(`  ✓ ${comp}.jsx`);
    } else {
      failed++;
      console.log(`  ✗ Component missing: ${comp}.jsx`);
    }
  }

  console.log(`\n── Constants ────────────────────────────────────`);
  const ckCSS = fs.readFileSync(resolve('public/assets/conductorkit.css'), 'utf8');
  if (ckCSS.includes(INVARIANTS.constants.signal)) {
    passed++;
    console.log(`  ✓ Signal accent locked: ${INVARIANTS.constants.signal}`);
  } else {
    failed++;
    console.log(`  ✗ Signal accent DRIFTED — expected ${INVARIANTS.constants.signal}`);
  }

  const beCSS = fs.readFileSync(resolve('public/assets/barcelona-extropic.css'), 'utf8');
  if (beCSS.includes(INVARIANTS.constants.stem)) {
    passed++;
    console.log(`  ✓ Stem width locked: ${INVARIANTS.constants.stem}`);
  } else {
    failed++;
    console.log(`  ✗ Stem width DRIFTED — expected ${INVARIANTS.constants.stem}`);
  }

  if (beCSS.includes(INVARIANTS.constants.contrast)) {
    passed++;
    console.log(`  ✓ Contrast ratio locked: ${INVARIANTS.constants.contrast}`);
  } else {
    failed++;
    console.log(`  ✗ Contrast ratio DRIFTED — expected ${INVARIANTS.constants.contrast}`);
  }

  console.log(`\n── Surfaces ─────────────────────────────────────`);
  for (const surface of INVARIANTS.surfaces) {
    const expected = config.invariants.surfaces.includes(surface);
    if (expected) {
      passed++;
      console.log(`  ✓ Surface registered: ${surface}`);
    } else {
      failed++;
      console.log(`  ✗ Surface missing from config: ${surface}`);
    }
  }

  const total = passed + failed;
  console.log(`\n${passed}/${total} invariants pass`);

  if (failed > 0) {
    console.error(`\n✗ ${failed} invariant(s) failed — evolution blocked`);
    process.exit(1);
  } else {
    console.log(`\n✓ All invariants pass — substrate stable`);
  }
}

const args = process.argv.slice(2);

if (args.includes('--phase')) {
  const config = JSON.parse(fs.readFileSync(EVOLUTION_CONFIG, 'utf8'));
  checkPhase(config);
} else if (args.includes('--verify') || args.length === 0) {
  verify();
} else {
  console.error(`Unknown arguments: ${args.join(' ')}`);
  console.error('Usage: node scripts/evolution-guard.js [--verify] [--phase]');
  process.exit(1);
}
