// Marketing.jsx — Genesis Conductor marketing surface
import React from 'react';
import { Header, SignalBadge } from './Shared.jsx';

export default function Marketing() {
  return (
    <div className="ck-layout">
      <Header />
      <main className="ck-main">
        <section style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <h1 className="be be-display" style={{ marginBottom: '1.5rem' }}>
            Bitflip
          </h1>
          <p className="be be-subtitle" style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Genesis Conductor — CI Identity &amp; Evolutionary Framework
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <SignalBadge>Phase 4 Crystallized</SignalBadge>
            <SignalBadge>28/28 Invariants</SignalBadge>
            <SignalBadge>Ed25519 Audited</SignalBadge>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            <div className="ck-stat">
              <div className="ck-stat__label">Signal Accent</div>
              <div className="ck-stat__value ck-stat__value--accent">#27e070</div>
            </div>
            <div className="ck-stat">
              <div className="ck-stat__label">Stem Width</div>
              <div className="ck-stat__value">12px</div>
            </div>
            <div className="ck-stat">
              <div className="ck-stat__label">Contrast Ratio</div>
              <div className="ck-stat__value">12:1</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
