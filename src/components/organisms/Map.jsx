import React from 'react';
import Button from '../molecules/Button';
import './Map.css';

const Map = ({
  lat = 10.3381724,
  lng = -75.4249801,
  zoom = 10,
  width = 1236,
  height = 250,
  cardWidth = 300,
  cardHeight = 260,
  hideDirectionsCard = false,
  showCenterPin = false,
  embedSrc,
  place= "Fundación Ángeles Con Patas Legged Angels Foundation",
  title = 'Ubication',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  buttonText = 'Button',
  onButtonClick,
}) => {

  const src =
    (typeof embedSrc === 'string' && embedSrc.trim())
      ? embedSrc.trim()
      : (typeof place === 'string' && place.trim()
          ? `https://maps.google.com/maps?hl=es&q=${encodeURIComponent(place)}&z=${zoom}&ie=UTF8&iwloc=&output=embed`
          : `https://maps.google.com/maps?hl=es&q=${lat},${lng}&z=${zoom}&ie=UTF8&iwloc=&output=embed`);

  return (
    <div className="map" style={{ width, height }}>
      <iframe
        title="Google Maps embed"
        className="map-embed"
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label="Mapa"
      />
      {hideDirectionsCard && showCenterPin && <div className="map-pin" aria-hidden />}
      <aside className="map-overlay" style={{ width: cardWidth, height: cardHeight }}>
        <h3 className="map-title">{title}</h3>
        <p className="map-desc">{description}</p>
        <Button
          variant="btn-primary"
          size="medium"
          text={buttonText}
          showLeftIcon={false}
          showRightIcon={true}
          rightIconName="dropRightIcon"
          onClick={onButtonClick}
        />
      </aside>
    </div>
  );
};

export default Map;