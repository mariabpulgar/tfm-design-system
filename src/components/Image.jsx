import React from 'react';
import './Image.css';

function Image({ src, alt = '', variant = '' }) {
  const wrapperClass = ['img-style-wrapper', variant].filter(Boolean).join(' ');

  return (
    <div className={wrapperClass}>
      <img
        className="img-style"
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default Image;
