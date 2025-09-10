// src/components/organisms/ModalControlado.jsx
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './ModalControlado.css';

function ModalControlado({
  open = false,
  onClose = () => {},
  closeOnEsc = true,
  closeOnBackdrop = true,
  children,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape' && closeOnEsc) onClose('escapeKeyDown');
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, closeOnEsc, onClose]);

  if (!open) return null;

  const backdrop = (
    <div
      className="modal-backdrop"
      onClick={closeOnBackdrop ? () => onClose('backdropClick') : undefined}
      role="presentation"
    >
      <div
        ref={containerRef}
        className="modal-container"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );

  return createPortal(backdrop, document.body);
}

ModalControlado.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,        // recibe motivo opcional: 'escapeKeyDown' | 'backdropClick' | custom
  closeOnEsc: PropTypes.bool,
  closeOnBackdrop: PropTypes.bool,
  children: PropTypes.node,
};

export default ModalControlado;
