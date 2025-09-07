import React, { useState } from "react";
import Image from "../atomos/Image";
import Button from "../moleculas/Button";
import "./Gallery.css";
import line3 from '../../assets/line3.jpg'

function Gallery({ images, title, description }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery-container">
      {/* Columna izquierda: imágenes */}
      <div className="gallery-images">
        {/* Imagen principal */}
        <Image
          alt={images[currentIndex].alt}
          src={images[currentIndex].src}
          variant="img-gallery-principal"
        />

        {/* Thumbnails */}
        <div className="gallery-thumbnails">
          {images.map((img, index) => (
            <div
              key={index}
              className={`thumbnail-wrapper ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image alt={img.alt} src={img.src} variant="img-gallery-mini" />
            </div>
          ))}
        </div>
      </div>

      {/* Columna derecha: información (fija para todas las imágenes) */}
      <div className="gallery-info">
        <div className="gallery-info-text">
            <h5>{title}</h5>
            <img className="gallery-divider" src={line3} alt="linea divisoria" aria-hidden="true"/>
            <p>{description}</p>
        </div>


        <Button
          iconColor="currentColor"
          iconPosition="left"
          iconSize="medium"
          leftIconName="dropLeftIcon"
          onClick={handlePrev}
          rightIconName="dropRightIcon"
          showLeftIcon
          showRightIcon
          size="large"
          text="Button"
          type="button"
          variant="btn-primary"
        />
      </div>
    </div>
  );
}

export default Gallery;
