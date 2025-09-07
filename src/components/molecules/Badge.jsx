import React from 'react';
import NotificationIcon from '../../icons/Notification.svg?react';
import './Badge.css';

const Badge = ({ 
  count, 
  max = 10, 
  showZero = false, 
  dot = false,
  showIcon = false,
  className = '',
  ...props 
}) => {
  // Don't render badge content if count is 0 and showZero is false,
  const shouldShowBadge = showZero || (count && count > 0) || dot;
  
  if (!shouldShowBadge) {
    return showIcon ? (
      <div className={`badge-container ${className}`} {...props}>
        <div className="badge-icon">
          <NotificationIcon />
        </div>
      </div>
    ) : null;
  }

  // Handle count display logic
  let displayContent = '';
  
  if (!dot) {
    if (typeof count === 'number') {
      displayContent = count > max ? `${max}+` : count;
    } else if (typeof count === 'string') {
      displayContent = count;
    }
  }

  return (
    <div className={`badge-container ${className}`} {...props}>
      <div className="badge-icon">
        {/* Badge content - always rendered when shouldShowBadge is true */}
        <div className={`badge-content ${dot ? 'dot' : ''}`}>
          {!dot && displayContent}
        </div>
        
        {/* Icon - rendered conditionally */}
        {showIcon && <NotificationIcon />}
      </div>
    </div>
  );
};

export default Badge;