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
  ...props 
}) => {
  // Construir las clases CSS
  const buttonClasses = `btn-${size} ${variant}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <DropLeftIcon className="btn-icon btn-icon-left" />
      {text}
      <DropRightIcon className="btn-icon btn-icon-right" />
    </button>
  );
};

export default Button;