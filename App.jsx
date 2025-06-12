import React, { useState } from 'react';

const stations = [
  'Airport', 'Alandur', 'Arumbakkam', 'Ashok Nagar', 'CMBT', 'Egmore', 'Guindy', 'LIC',
  'MGR Central', 'Nandanam', 'Teynampet', 'Vadapalani'
];

export default function App() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const findRoute = () => {
    if (from && to && from !== to) {
      return `Route from ${from} to ${to}`;
    } else if (from === to && from) {
      return `You are already at ${from}`;
    }
    return 'Select both stations to find route';
  };

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '2rem' }}>
      <h1>🚇 MetroMate – Chennai Metro Route Finder</h1>
      <div style={{ margin: '1rem 0' }}>
        <select value={from} onChange={e => setFrom(e.target.value)}>
          <option value="">From Station</option>
          {stations.map((s, i) => <option key={i} value={s}>{s}</option>)}
        </select>
        &nbsp;&nbsp;
        <select value={to} onChange={e => setTo(e.target.value)}>
          <option value="">To Station</option>
          {stations.map((s, i) => <option key={i} value={s}>{s}</option>)}
        </select>
      </div>
      <div style={{ marginTop: '1rem', fontWeight: 'bold', color: '#333' }}>
        {findRoute()}
      </div>
    </div>
  );
}
