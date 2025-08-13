import React, { useState, useEffect, useRef } from 'react';
import './Tooltip.css';
import IconSelector from './IconSelector'; // Ajusta la ruta según tu proyecto

const Tooltip = ({ 
  content, 
  position = 'top', 
  trigger = 'click', 
  iconName = 'infoIcon', 
  iconSize = 'medium', 
  iconColor = '#FEFEFE', 
  className = '', 
  disabled = false 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);

  const handleToggle = () => {
    if (disabled) return;
    setIsVisible(!isVisible);
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    if (trigger === 'hover') {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsVisible(false);
    }
  };

  // Cerrar tooltip al hacer clic fuera (modo click)
  useEffect(() => {
    if (trigger !== 'click' || !isVisible) return;
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isVisible, trigger]);

  const getPositionClass = () => {
    switch (position) {
      case 'bottom':
        return 'position-bottom';
      case 'left':
        return 'position-left';
      case 'right':
        return 'position-right';
      default:
        return 'position-top';
    }
  };

  const containerClasses = [
    'tooltip-container',
    getPositionClass(),
    isVisible ? 'active' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={tooltipRef}
      className={containerClasses}
      onClick={trigger === 'click' ? handleToggle : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Icono siempre presente */}
      <div className="tooltip-icon">
        <IconSelector name={iconName} size={iconSize} color={iconColor} />
      </div>

      {/* Texto del tooltip */}
      <div className="tooltip-text" role="tooltip">
        {typeof content === 'string' ? <p>{content}</p> : content}
      </div>
    </div>
  );
};

export default Tooltip;
