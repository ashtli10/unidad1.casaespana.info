import React from 'react';

const featureList = [
  { text: '<strong>98 m² de construccion</strong> con techos altos de 2.5 metros' },
  { text: '<strong>2 recamaras amplias</strong> con abundante iluminacion natural' },
  { text: '<strong>1 bano completo</strong> con tina, regadera tipo lluvia y azulejo subway' },
  { text: '<strong>Instalaciones listas para cocina</strong> — tu eliges el diseno' },
  { text: '<strong>Terraza con cochera abierta:</strong> 36.11 m² con 2 lugares de estacionamiento' },
  { text: '<strong>Patio privado</strong> de 6 m² incluido en la construccion' },
  { text: '<strong>Bodega adicional</strong> de 1.2 m x 3 m de altura para almacenaje' },
  { text: '<strong>Uso comercial o habitacional</strong> — zonificacion H3 Vertical Plurifamiliar' },
];

const statCards = [
  { tag: 'Superficie', value: '98 m', sup: '2', desc: 'Mas 36.11 m² de terraza con cochera abierta' },
  { tag: 'Desarrollo exclusivo', value: '5 ', sup: 'unidades', desc: 'Maxima privacidad. Amplios espacios comunes.' },
  { tag: 'Precio por m²', value: '$52,041', sup: '', desc: 'Competitivo frente a desarrollos nuevos en la zona' },
];

const Features: React.FC = () => {
  return (
    <section className="features" id="caracteristicas">
      <div className="features-left">
        <div className="section-tag reveal">Caracteristicas</div>
        <h2 className="section-title reveal">
          Construccion solida de los 60s, <em>renovada</em> para hoy
        </h2>
        <p className="section-text reveal">
          Muros gruesos hechos para durar. Techos altos. Iluminacion natural. Todo renovado con acabados modernos.
        </p>
        <div className="features-list">
          {featureList.map((feature, i) => (
            <div key={i} className={`feature-row reveal${i > 0 ? ` reveal-d${Math.min(i, 4)}` : ''}`}>
              <div className="feature-marker"></div>
              <div className="feature-text" dangerouslySetInnerHTML={{ __html: feature.text }} />
            </div>
          ))}
        </div>
      </div>
      <div className="features-right">
        {statCards.map((card, i) => (
          <div key={i} className={`feat-card reveal${i > 0 ? ` reveal-d${i}` : ''}`}>
            <div className="feat-card-tag">{card.tag}</div>
            <div className="feat-card-value">
              {card.value}{card.sup && <small>{card.sup}</small>}
            </div>
            <div className="feat-card-desc">{card.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
