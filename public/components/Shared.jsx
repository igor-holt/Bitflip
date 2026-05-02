// Shared.jsx — ConductorKit shared UI primitives
import React from 'react';

export function Header() {
  return (
    <header className="ck-header">
      <div className="ck-header__wordmark be be-caption">
        BIT<span>FLIP</span>
      </div>
      <span className="ck-badge--active">Conductor v2.3.0</span>
    </header>
  );
}

export function StatCard({ label, value, accent = false }) {
  return (
    <div className="ck-stat">
      <div className="ck-stat__label">{label}</div>
      <div className={`ck-stat__value${accent ? ' ck-stat__value--accent' : ''}`}>
        {value}
      </div>
    </div>
  );
}

export function SignalBadge({ children }) {
  return <span className="ck-badge--active">{children}</span>;
}

export default { Header, StatCard, SignalBadge };
