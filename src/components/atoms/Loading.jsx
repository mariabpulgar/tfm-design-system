import React from 'react';
import './Loading.css';

const Loading = ({ 
  text = "Cargando...", 
  hideText = false 
}) => {
  return (
    <div 
      className="loading-wrapper"
      role="status"
      aria-live="polite"
      aria-label={text}
    >
      <div className="loading-container" aria-hidden="true">
        <div className="loading-circle"></div>
        <div className="loading-circle"></div>
        <div className="loading-circle"></div>
      </div>
      {!hideText && (
        <span className="loading-text">
          {text}
        </span>
      )}
      {hideText && (
        <span className="sr-only">
          {text}
        </span>
      )}
    </div>
  );
};

export default Loading;