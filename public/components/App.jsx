// App.jsx — Genesis Conductor root application component
import React, { useState } from 'react';
import Marketing from './Marketing.jsx';
import Dashboard from './Dashboard.jsx';
import Specimen from './Specimen.jsx';

const SURFACES = ['marketing', 'dashboard', 'specimen'];

export default function App() {
  const [surface, setSurface] = useState('marketing');

  return (
    <div>
      <nav style={{
        display: 'flex',
        gap: '0.5rem',
        padding: '0.5rem 2rem',
        background: 'var(--surface-1)',
        borderBottom: '1px solid var(--surface-4)'
      }}>
        {SURFACES.map((s) => (
          <button
            key={s}
            className={`ck-btn${surface === s ? ' ck-btn--primary' : ''}`}
            onClick={() => setSurface(s)}
          >
            {s}
          </button>
        ))}
      </nav>

      {surface === 'marketing'  && <Marketing />}
      {surface === 'dashboard'  && <Dashboard />}
      {surface === 'specimen'   && <Specimen />}
    </div>
  );
}
