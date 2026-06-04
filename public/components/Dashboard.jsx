// Dashboard.jsx — Genesis Conductor operator dashboard surface
import React from 'react';
import { Header, StatCard } from './Shared.jsx';

const INVARIANTS = [
  { id: 'signal-accent',    value: '#27e070', status: 'locked' },
  { id: 'stem-width',       value: '12px',    status: 'locked' },
  { id: 'contrast-ratio',   value: '12:1',    status: 'locked' },
  { id: 'J-coupling',       value: '0.021',   status: 'locked' },
  { id: 'flip-bias',        value: '0.14',    status: 'locked' },
  { id: 'tau-sw-ps',        value: '6.8',     status: 'locked' },
];

export default function Dashboard() {
  return (
    <div className="ck-layout">
      <Header />
      <main className="ck-main">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          <StatCard label="Phase"          value="4"      />
          <StatCard label="Invariants"     value="28/28"  accent />
          <StatCard label="Audit Chain"    value="Ed25519" />
          <StatCard label="Status"         value="LOCKED" accent />
        </div>

        <table className="ck-table">
          <thead>
            <tr>
              <th>Constant</th>
              <th>Value</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {INVARIANTS.map(({ id, value, status }) => (
              <tr key={id}>
                <td>{id}</td>
                <td className="ck-signal">{value}</td>
                <td><span className="ck-badge--active">{status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
