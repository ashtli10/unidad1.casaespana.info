import React from 'react';

const cards = [
  { icon: '🚊', title: 'Tren Ligero', desc: 'Estacion a minutos caminando. Conexion directa al centro y sur de la ciudad.' },
  { icon: '🌳', title: 'Av. Chapultepec', desc: 'A cuadras del corredor cultural, gastronomico y de entretenimiento mas vibrante de Guadalajara.' },
  { icon: '🏥', title: 'Hospital Enfrente', desc: 'Hospital cruzando la calle. Farmacias, laboratorios y servicios medicos en tu puerta.' },
  { icon: '🚲', title: 'MiBici', desc: 'Estacion cercana para movilidad sustentable por toda la zona metropolitana.' },
];

const Plusvalia: React.FC = () => {
  return (
    <section className="plusvalia section-pad">
      <div>
        <div className="section-tag reveal">Plusvalia en ascenso</div>
        <h2 className="section-title reveal">
          La Colonia Moderna: <em>epicentro</em> de la transformacion urbana
        </h2>
        <p className="section-text reveal">
          La zona vive una aceleracion inmobiliaria sin precedentes. Nuevos desarrollos, la expansion del Tren Ligero y la proximidad a Av. Chapultepec disparan la plusvalia ano tras ano.
        </p>
        <p className="section-text reveal" style={{ marginTop: '1rem' }}>
          Comprar hoy en Colonia Moderna es asegurar el precio mas bajo que esta zona volvera a tener.
        </p>
      </div>
      <div className="plusvalia-cards">
        {cards.map((card, i) => (
          <div key={i} className={`plusvalia-card reveal${i > 0 ? ` reveal-d${i}` : ''}`}>
            <span className="plusvalia-card-icon">{card.icon}</span>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plusvalia;
