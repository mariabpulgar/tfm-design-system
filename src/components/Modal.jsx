import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
import IconSelector from './IconSelector';
import Button from './Button';
import IconButton from './IconButton';

function Modal({
  open = false,
  onClose = () => {},
  onOpen = () => {},
  closeOnEsc = true,
  closeOnBackdrop = true,
  title = "¡Notification!",
  description = "You're about to delete this item. This action is permanent and cannot be reverted.",
  cancelText = "Cancel",
  acceptText = "Accept",
  iconName = "notificationIcon"
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    const onKey = (e) => {
      if (e.key === 'Escape' && closeOnEsc) {
        onClose('escapeKeyDown');
      }
    };
    
    document.addEventListener('keydown', onKey);
    
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, closeOnEsc, onClose]);

  // Cuando está cerrado, mostrar el botón "Modal"
  if (!open) {
    return (
      <Button
        onClick={() => onOpen()}
        size="medium"
        text="Modal"
        type="button"
        variant="btn-primary"
      />
    );
  }

  const backdrop = (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={closeOnBackdrop ? () => onClose('backdropClick') : undefined}
      role="presentation"
    >
      <div
        ref={containerRef}
        className="modal-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="frame-1">
          <IconButton
            iconName="closeIcon"
            onClick={() => onClose('closeButton')}
            size="medium"
            variant="default"
            autoFocus
          />
        </div>

        <div className="frame-2">
          <IconSelector 
            color="var(--ciam-dark)" 
            name={iconName} 
            size="display" 
          />
          <h4 id="modal-title">{title}</h4>
        </div>

        <div className="frame-3">
          <p id="modal-desc">{description}</p>
        </div>

        <div className="frame-4 modal-buttons">
          <Button 
            onClick={() => onClose('cancel')} 
            size="large" 
            text={cancelText} 
            type="button" 
            variant="btn-error" 
          />
          <Button 
            onClick={() => onClose('accept')} 
            size="large" 
            text={acceptText} 
            type="button" 
            variant="btn-primary" 
          />
        </div>
      </div>
    </div>
  );

  return createPortal(backdrop, document.body);
}

export default Modal;