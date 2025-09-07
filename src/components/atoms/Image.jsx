import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Image.css';

function Image({ src, alt = '', variant = '', fallbackSrc = '/placeholder.png' }) {
  const [imgSrc, setImgSrc] = useState(src);

  const wrapperClass = ['img-style-wrapper', variant].filter(Boolean).join(' ');

  return (
    <div className={wrapperClass}>
      <img
        className="img-style"
        src={imgSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => {
          if (fallbackSrc && imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
          }
        }}
      />
    </div>
  );
}

Image.propTypes = {
  /** Fuente de la imagen (URL o import local). Obligatoria. */
  src: PropTypes.string.isRequired,

  /** Texto alternativo para accesibilidad. */
  alt: PropTypes.string,

  /** Variante de estilo opcional, agrega clases adicionales al wrapper. */
  variant: PropTypes.string,

  /** Imagen de respaldo si la original falla. */
  fallbackSrc: PropTypes.string,
};

export default Image;
