import React from 'react';
import './Divider.css';

const Divider = ({ 
  variant = 'fullWidth', 
  text, 
  className = '' 
}) => {
  const renderDivider = () => {
    switch (variant) {
      case 'fullWidth':
        return <hr className={`divider-full-width ${className}`} />;
      
      case 'center':
        return (
          <div className={`divider-center ${className}`}>
            <span>{text}</span>
          </div>
        );
      
      case 'chip':
        return (
          <div className={`divider-chip ${className}`}>
            <span>{text}</span>
          </div>
        );
      
      default:
        return <hr className={`divider-full-width ${className}`} />;
    }
  };

  return renderDivider();
};

export default Divider;