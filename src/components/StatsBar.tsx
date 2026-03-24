import React from 'react';

const stats = [
  { icon: '🚊', label: 'Transporte', value: 'Tren Ligero' },
  { icon: '🌳', label: 'A cuadras', value: 'Av. Chapultepec' },
  { icon: '🏥', label: 'Cruzando la calle', value: 'Hospital' },
  { icon: '🧪', label: 'En la zona', value: 'Lab. Pisa' },
  { icon: '🚲', label: 'Movilidad', value: 'MiBici' },
];

const StatsBar: React.FC = () => {
  return (
    <div className="stats-bar">
      {stats.map((stat, i) => (
        <React.Fragment key={i}>
          <div className="stats-bar-item">
            <div className="stats-bar-icon">{stat.icon}</div>
            <div>
              <div className="stats-bar-label">{stat.label}</div>
              <div className="stats-bar-value">{stat.value}</div>
            </div>
          </div>
          {i < stats.length - 1 && <div className="stats-bar-divider"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StatsBar;
