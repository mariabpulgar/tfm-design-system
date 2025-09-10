import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "../atoms/Image";
import Button from "../molecules/Button";
import "./Gallery.css";
import line3 from '../../assets/line3.jpg';

function Gallery({ images, title, description, buttonText, onClose, showCloseButton, onAction }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbClick = (idx) => {
    setCurrentIndex(idx);
  };

  return (
    <div className="gallery-container">
      {/* Columna izquierda: imágenes */}
      <div className="gallery-images">
        <Image
          key={images[currentIndex].src}
          alt={images[currentIndex].alt}
          src={images[currentIndex].src}
          variant="img-gallery-principal"
        />

        <div className="gallery-thumbnails">
          {images.map((img, index) => (
            <button
              key={img.src + index}
              type="button"
              className={`thumbnail-wrapper ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleThumbClick(index)}
              aria-label={`Ver imagen ${index + 1}`}
            >
              <Image alt={img.alt} src={img.src} variant="img-gallery-mini" />
            </button>
          ))}
        </div>
      </div>

      {/* Columna derecha */}
      <div className="gallery-info">
        <div className="gallery-header">
          <h5 className="gallery-title">{title}</h5>

          {showCloseButton && (
            <button
              type="button"
              className="gallery-close"
              aria-label="Cerrar galería"
              onClick={onClose}
            >
              ×
            </button>
          )}
        </div>

        <img
          className="gallery-divider"
          src={line3}
          alt="línea divisoria"
          aria-hidden="true"
        />

        <p>{description}</p>

        <Button
          iconColor="currentColor"
          size="large"
          text={buttonText}
          type="button"
          variant="btn-primary"
          onClick={onAction}
        />
      </div>
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onClose: PropTypes.func,
  showCloseButton: PropTypes.bool,
  onAction: PropTypes.func, // 👈 nueva prop
};

Gallery.defaultProps = {
  buttonText: "Button",
  onClose: () => {},
  showCloseButton: true,
  onAction: () => {}, // vacío por defecto
};

export default Gallery;
