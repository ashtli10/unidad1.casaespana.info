import React from 'react';

const FloorPlan: React.FC = () => {
  const openInLightbox = () => {
    window.dispatchEvent(new CustomEvent('openLightbox', {
      detail: { index: -1, singleImage: '/planos-avenida-espana.webp', label: 'Plano arquitectonico — Planta baja' }
    }));
  };

  return (
    <section className="plan" id="plano">
      <div className="section-tag reveal">Plano arquitectonico</div>
      <h2 className="section-title reveal">Distribucion en planta baja</h2>
      <p className="section-text reveal">
        Unidad resaltada en azul. Incluye sala, 2 recamaras, bano, patio, terraza-cochera y acceso a roof garden.
      </p>
      <div className="plan-frame reveal" onClick={openInLightbox}>
        <img
          src="/planos-avenida-espana.webp"
          alt="Plano arquitectonico del departamento — distribucion en planta baja"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default FloorPlan;
