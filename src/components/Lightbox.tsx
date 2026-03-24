import React, { useState, useEffect, useCallback, useRef } from 'react';

const galleryImages = [
  { src: '/fotos/1.webp', label: 'Sala · Acceso principal' },
  { src: '/fotos/2.webp', label: 'Bano completo' },
  { src: '/fotos/3.webp', label: 'Recamara' },
  { src: '/fotos/4.webp', label: 'Sala · Vista amplia' },
  { src: '/fotos/5.webp', label: 'Pasillo interior' },
  { src: '/fotos/6.webp', label: 'Habitacion con puertas de vidrio' },
  { src: '/fotos/7.webp', label: 'Acceso terraza' },
  { src: '/fotos/8.webp', label: 'Cochera · 2 lugares' },
  { src: '/fotos/9.webp', label: 'Area de lavado' },
  { src: '/fotos/10.webp', label: 'Recamara · Render amueblado' },
  { src: '/fotos/11.webp', label: 'Recamara principal · Render' },
  { src: '/fotos/12.webp', label: 'Recamara · Vista lateral' },
  { src: '/fotos/13.webp', label: 'Interior · Vista al patio' },
  { src: '/fotos/14.webp', label: 'Area de lavado · Equipada' },
  { src: '/fotos/15.webp', label: 'Fachada · Render exterior' },
];

const Lightbox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState(galleryImages);
  const [singleMode, setSingleMode] = useState(false);
  const touchRef = useRef({ startX: 0, startY: 0, swiping: false });

  const open = useCallback((e: Event) => {
    const detail = (e as CustomEvent).detail;
    if (detail.singleImage) {
      setImages([{ src: detail.singleImage, label: detail.label || '' }]);
      setIndex(0);
      setSingleMode(true);
    } else {
      setImages(galleryImages);
      setIndex(detail.index || 0);
      setSingleMode(false);
    }
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const nav = useCallback((dir: number) => {
    if (singleMode) return;
    setIndex(prev => (prev + dir + images.length) % images.length);
  }, [singleMode, images.length]);

  useEffect(() => {
    window.addEventListener('openLightbox', open);
    return () => window.removeEventListener('openLightbox', open);
  }, [open]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') nav(-1);
      if (e.key === 'ArrowRight') nav(1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, close, nav]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchRef.current.startX = e.touches[0].clientX;
    touchRef.current.startY = e.touches[0].clientY;
    touchRef.current.swiping = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const dx = e.touches[0].clientX - touchRef.current.startX;
    const dy = Math.abs(e.touches[0].clientY - touchRef.current.startY);
    if (Math.abs(dx) > dy + 10) {
      touchRef.current.swiping = true;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchRef.current.swiping) return;
    const dx = e.changedTouches[0].clientX - touchRef.current.startX;
    if (Math.abs(dx) > 60) {
      nav(dx < 0 ? 1 : -1);
    }
  };

  if (!isOpen) return null;

  const current = images[index];

  return (
    <div
      className="lightbox active"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="lightbox-track">
        <img src={current.src} alt={current.label} />
      </div>

      {!singleMode && (
        <>
          <button className="lb-arrow lb-prev" onClick={() => nav(-1)}>&#8249;</button>
          <button className="lb-arrow lb-next" onClick={() => nav(1)}>&#8250;</button>
        </>
      )}

      {current.label && <div className="lb-label">{current.label}</div>}

      {!singleMode && (
        <div className="lb-counter">{index + 1} / {images.length}</div>
      )}

      <div className="lightbox-close" onClick={close}>&#10005;</div>
    </div>
  );
};

export default Lightbox;
