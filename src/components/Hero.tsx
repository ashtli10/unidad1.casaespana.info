import React from 'react';

const WA_URL = "https://wa.me/523336670647?text=Hola%2C%20me%20interesa%20la%20unidad%20en%20Av.%20Espa%C3%B1a%201640";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="/hero.webp"
          alt="Fachada Av. Espana 1640"
          loading="eager"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-vignette"></div>

      <div className="hero-status">
        <div className="hero-status-inner">
          <div className="hero-status-dot"></div>
          <div className="hero-status-text">En remodelacion &middot; Entrega proxima</div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-tag">Colonia Moderna &middot; Guadalajara</div>
          <div className="hero-price-block">
            <div className="hero-price">
              $5<span className="hero-price-accent">,</span>100<span className="hero-price-accent">,</span>000
            </div>
            <div className="hero-currency">PESOS MEXICANOS</div>
          </div>
          <div className="hero-headline">
            Departamento de <em>98 m²</em> con roof garden compartido en desarrollo exclusivo de 5 unidades. Colonia Moderna, Guadalajara.
          </div>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hero-cta">
            <span>
              <svg className="wa-icon" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.347 0-4.522-.802-6.244-2.148l-.436-.36-3.2 1.073 1.073-3.2-.36-.436A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              AGENDAR VISITA
            </span>
          </a>
        </div>

        <div className="hero-right">
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">98<small>m²</small></div>
              <div className="hero-stat-label">Construccion</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">2</div>
              <div className="hero-stat-label">Recamaras</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">100<small>m²</small></div>
              <div className="hero-stat-label">Roof Garden</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
