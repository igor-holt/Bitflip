// Specimen.jsx — Barcelona-Extropic type specimen surface
import React from 'react';
import { Header } from './Shared.jsx';

const SCALE = [
  { cls: 'be-display',  label: 'Display',  size: '6rem',    sample: 'Bitflip' },
  { cls: 'be-headline', label: 'Headline', size: '3.5rem',  sample: 'Genesis Conductor' },
  { cls: 'be-title',    label: 'Title',    size: '2.25rem', sample: 'Phase 4 Crystallization' },
  { cls: 'be-subtitle', label: 'Subtitle', size: '1.5rem',  sample: 'Invariant substrate locked' },
  { cls: 'be-body',     label: 'Body',     size: '1rem',    sample: 'Ed25519 audit chain verified. 28/28 invariants pass.' },
  { cls: 'be-caption',  label: 'Caption',  size: '0.75rem', sample: 'STEM WIDTH 12PX — CONTRAST RATIO 12:1' },
];

export default function Specimen() {
  return (
    <div className="ck-layout">
      <Header />
      <main className="ck-main">
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            Barcelona-Extropic — Type Specimen
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem' }}>
            Didone-class display serif · stem weight: <strong style={{ color: 'var(--signal-500)' }}>12px</strong> · serif weight: 1px · contrast: <strong style={{ color: 'var(--signal-500)' }}>12:1</strong>
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {SCALE.map(({ cls, label, size, sample }) => (
            <div key={cls} style={{ borderBottom: '1px solid var(--surface-4)', paddingBottom: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                {label} — {size}
              </div>
              <div className={`be ${cls}`} style={{ color: 'var(--text-primary)' }}>
                {sample}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Chirality
          </h3>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'baseline' }}>
            <span className="be be-headline" style={{ display: 'inline-block' }}>B</span>
            <span className="be be-headline be-chiral--left" style={{ display: 'inline-block' }}>B</span>
          </div>
        </div>
      </main>
    </div>
  );
}
