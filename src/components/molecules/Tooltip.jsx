import React, { useEffect, useRef, useState } from 'react';
import './Tooltip.css';
import IconSelector from '../atomos/IconSelector';

const Tooltip = ({
  content,
  position = 'top',          // 'top' | 'bottom' | 'left' | 'right'
  trigger = 'click',          // 'click' | 'hover'
  iconName = 'infoIcon',
  iconSize = 'medium',
  iconColor = '#FEFEFE',
  className = '',
  disabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const idRef = useRef(`tooltip-${Math.random().toString(36).slice(2, 9)}`);

  const getPositionClass = () => {
    switch (position) {
      case 'bottom': return 'position-bottom';
      case 'left':   return 'position-left';
      case 'right':  return 'position-right';
      default:       return 'position-top';
    }
  };

  const containerClasses = [
    'tooltip-container',
    getPositionClass(),
    isVisible ? 'active' : '',
    className,
  ].filter(Boolean).join(' ');

  const show = () => !disabled && setIsVisible(true);
  const hide = () => setIsVisible(false);
  const toggle = () => !disabled && setIsVisible(v => !v);

  // Cerrar al hacer clic fuera (solo en modo click)
  useEffect(() => {
    if (trigger !== 'click' || !isVisible) return;
    const onDown = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) hide();
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [isVisible, trigger]);

  // Cerrar con ESC
  useEffect(() => {
    if (!isVisible) return;
    const onKey = (e) => { if (e.key === 'Escape') hide(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isVisible]);

  // Teclado para el botón (Enter/Espacio)
  const handleKeyDown = (e) => {
    if (trigger !== 'click' || disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  };

  // Eventos hover en el ancla (para no depender del contenedor padre)
  const hoverProps = trigger === 'hover'
    ? { onMouseEnter: show, onMouseLeave: hide }
    : {};

  return (
    <div ref={containerRef} className={containerClasses}>
      {/* Wrapper de ancho fijo */}
      <div
        className="tooltip-wrapper"
        style={{
          width: '320px',
          textAlign: 'center',
          position: 'relative'
        }}
        {...hoverProps}
      >
        <div
          className="tooltip-text"
          id={idRef.current}
          role="tooltip"
          aria-hidden={!isVisible}
        >
          {typeof content === 'string' ? <p>{content}</p> : content}
        </div>

        <button
          type="button"
          className="tooltip-icon"
          aria-haspopup="dialog"
          aria-expanded={isVisible}
          aria-controls={idRef.current}
          onClick={trigger === 'click' ? toggle : undefined}
          onKeyDown={handleKeyDown}
          disabled={disabled}
        >
          <IconSelector name={iconName} size={iconSize} color={iconColor} />
        </button>
      </div>
    </div>
  );
};

export default Tooltip;
