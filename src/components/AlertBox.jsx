import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AlertBox.css';
import IconSelector from './IconSelector';
import IconButton from './IconButton';

//configuracion de las variantes de acuerdo a las clases: error, alert, success, information

const VARIANT_CONFIG = {
    error: {
        containerClass: 'alert-error-box',
        iconName: 'infoIcon',
        role: 'alert',
        ariaLive: 'assertive',
        iconColor: 'var(--error-dark-hover)',
    },
    warning: {
        containerClass: 'alert-warning-box',
        iconName: 'warningIcon',
        role: 'alert',
        ariaLive: 'assertive',
        iconColor: 'var(--yellow-dark)',
    },
    success: {
        containerClass: 'alert-success-box',
        iconName: 'checkIcon',
        role: 'status',
        ariaLive: 'polite',
        iconColor: 'var(--success-dark)',
    },
    info: {
        containerClass: 'alert-information-box',
        iconName: 'notificationIcon',
        role: 'status',
        ariaLive: 'polite',
        iconColor: 'var(--ciam-dark)',
    },
};

function AlertBox({
    variant = 'info',
    title,
    message,
    dismissible = true,
    onClose,
    className = '',
    iconName: iconNameOverride,
    iconColor: iconColorOverride,
    ...props
}) {
    const [open, setOpen] = useState(true);
    
    if (!open) return null;

    const cfg = VARIANT_CONFIG[variant] || VARIANT_CONFIG.info;

    const handleClose = (e) => {
        setOpen(false);
        if (onClose) onClose(e);
    };

    return (
        <div 
            className={`alert-box ${cfg.containerClass} ${className}`.trim()}
            role={cfg.role}
            aria-live={cfg.ariaLive}
            {...props}
        >
            <div className="icon-and-text">
                <IconSelector
                    color={iconColorOverride || cfg.iconColor}
                    name={iconNameOverride || cfg.iconName}
                    size="display"
                />
                <div className="alert-text">
                    {title && <h6>{title}</h6>}
                    {message && <p>{message}</p>}
                </div>
            </div>
            
            {dismissible && (
                <IconButton
                    iconName="closeIcon"
                    size="medium"
                    variant="default"
                    ariaLabel="Close alert"
                    onClick={handleClose}
                />
            )}
        </div>
    );
}

AlertBox.propTypes = {
    variant: PropTypes.oneOf(['error', 'warning', 'success', 'info']),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    dismissible: PropTypes.bool,
    onClose: PropTypes.func,
    className: PropTypes.string,
    iconName: PropTypes.string,   // override opcional
    iconColor: PropTypes.string,  // override opcional
};

export default AlertBox;