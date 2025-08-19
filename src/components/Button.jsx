import React from 'react';
import './Button.css';
import IconSelector from './IconSelector';

const Button = ({ 
  variant = 'btn-primary', 
  size = 'medium', 
  text, 
  onClick,
  disabled = false,
  isGroup = false,
  className = '',
  type = 'button',
  // Control de íconos
  showLeftIcon = true,
  showRightIcon = true,
  leftIconName = 'dropLeftIcon',   // nombre por defecto (coincide con tu mapeo en IconSelector)
  rightIconName = 'dropRightIcon',
  iconSize = 'medium',
  iconColor = 'currentColor',
  ...props 
}) => {
  const buttonClasses = `btn btn-${size} ${variant} ${isGroup ? 'btn--in-group' : ''} ${className}`.trim();

  const shouldShowLeft = !isGroup && showLeftIcon && leftIconName;
  const shouldShowRight = !isGroup && showRightIcon && rightIconName;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {shouldShowLeft && (
        <IconSelector
          name={leftIconName}
          size={iconSize}
          color={iconColor}
          className="btn-icon btn-icon-left"
        />
      )}
      {text}
      {shouldShowRight && (
        <IconSelector
          name={rightIconName}
          size={iconSize}
          color={iconColor}
          className="btn-icon btn-icon-right"
        />
      )}
    </button>
  );
};

export default Button;
