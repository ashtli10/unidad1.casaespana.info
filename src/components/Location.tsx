import React from 'react';

const locationItems = [
  { icon: '🌳', name: 'Av. Chapultepec', detail: 'A pocas cuadras' },
  { icon: '🚊', name: 'Tren Ligero', detail: 'Estacion cercana' },
  { icon: '🏥', name: 'Hospital', detail: 'Cruzando la calle' },
  { icon: '🧪', name: 'Laboratorios Pisa', detail: 'En la zona' },
  { icon: '🚲', name: 'MiBici', detail: 'Estacion cercana' },
  { icon: '🍴', name: 'Restaurantes y cafes', detail: 'Corredor Chapultepec' },
  { icon: '🏢', name: 'Uso comercial permitido', detail: 'Zonificacion H3' },
];

const Location: React.FC = () => {
  const latitude = 20.663093105293353;
  const longitude = -103.36251614690686;
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=18&t=k&hl=es&output=embed`;

  return (
    <section className="location" id="ubicacion">
      <div className="location-content">
        <div className="section-tag reveal">Ubicacion privilegiada</div>
        <h2 className="section-title reveal">
          Todo lo que necesitas, <em>a pasos</em> de tu puerta
        </h2>
        <p className="section-text reveal">
          Av. Espana 1640, Colonia Moderna. Rodeada de servicios, transporte, cultura y vida urbana.
        </p>
        <div className="location-list">
          {locationItems.map((item, i) => (
            <div key={i} className={`loc-item reveal${i > 0 ? ` reveal-d${Math.min(i, 3)}` : ''}`}>
              <div className="loc-name">
                <span className="loc-name-icon">{item.icon}</span> {item.name}
              </div>
              <div className="loc-detail">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="location-map">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa satelital de Avenida Espana 1640, Moderna, Guadalajara"
        />
      </div>
    </section>
  );
};

export default Location;
