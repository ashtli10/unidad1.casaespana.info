import React from 'react';

const amenities = [
  { icon: '🔥', label: 'Asador' },
  { icon: '🪑', label: 'Sala exterior' },
  { icon: '🌿', label: 'Vegetacion' },
  { icon: '🍽️', label: 'Mesas' },
  { icon: '📐', label: '100 m²' },
];

const RoofGarden: React.FC = () => {
  return (
    <section className="roof">
      <div className="section-tag reveal">Amenidad compartida</div>
      <h2 className="section-title reveal">Roof Garden de 100 m²</h2>
      <p className="section-text reveal">
        Espacio compartido entre las 5 unidades del edificio. Ideal para reuniones, asados o simplemente disfrutar del atardecer con vista a la ciudad.
      </p>
      <div className="roof-amenities">
        {amenities.map((amenity, i) => (
          <div key={i} className={`roof-amenity reveal${i > 0 ? ` reveal-d${Math.min(i, 4)}` : ''}`}>
            <div className="roof-amenity-icon">{amenity.icon}</div>
            <div className="roof-amenity-label">{amenity.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoofGarden;
