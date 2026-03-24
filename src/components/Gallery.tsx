import React from 'react';

const galleryItems = [
  { src: '/fotos/1.webp', label: 'Sala · Acceso principal', classes: 'g-span-2c g-span-2r' },
  { src: '/fotos/2.webp', label: 'Bano completo', classes: '' },
  { src: '/fotos/3.webp', label: 'Recamara', classes: '' },
  { src: '/fotos/4.webp', label: 'Sala · Vista amplia', classes: '' },
  { src: '/fotos/5.webp', label: 'Pasillo interior', classes: 'g-span-2r' },
  { src: '/fotos/6.webp', label: 'Habitacion con puertas de vidrio', classes: '' },
  { src: '/fotos/7.webp', label: 'Acceso terraza', classes: '' },
  { src: '/fotos/8.webp', label: 'Cochera · 2 lugares', classes: '' },
  { src: '/fotos/9.webp', label: 'Area de lavado', classes: '' },
];

const Gallery: React.FC = () => {
  const openLightbox = (index: number) => {
    window.dispatchEvent(new CustomEvent('openLightbox', { detail: { index } }));
  };

  return (
    <section className="gallery" id="galeria">
      <div className="gallery-header">
        <div className="section-tag reveal">Galeria</div>
        <h2 className="section-title reveal">
          Espacios disenados para <em>vivir o trabajar</em>
        </h2>
        <p className="section-text reveal">
          El edificio se encuentra en remodelacion. La entrega sera como se muestra en las imagenes.
        </p>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className={`gallery-item ${item.classes}`}
            onClick={() => openLightbox(i)}
          >
            <img src={item.src} alt={item.label} loading="lazy" />
            <div className="gallery-item-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
