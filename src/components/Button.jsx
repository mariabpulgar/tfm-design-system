import React from 'react';
import './Button.css';
import DropLeftIcon from '../icons/Drop-left.svg?react';
import DropRightIcon from '../icons/Drop-right.svg?react';

const Button = ({ 
  variant = 'btn-primary', 
  size = 'medium', 
  text, 
  onClick,
  disabled = false,
  isGroup = false, // ← valor por defecto false
  className = '',
  type = 'button',
  ...props 
}) => {
  
const buttonClasses = `btn btn-${size} ${variant} ${isGroup ? 'btn--in-group' : ''} ${className}`.trim();

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {/* Si isGroup es true, no se renderizan los iconos */}
      {!isGroup && <DropLeftIcon className="btn-icon btn-icon-left" />}
      {text}
      {!isGroup && <DropRightIcon className="btn-icon btn-icon-right" />}
    </button>
  );
};

export default Button;
