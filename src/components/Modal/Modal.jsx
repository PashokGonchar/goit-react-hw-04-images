import React, { useEffect } from 'react';
import { OverlayDiv, ModalDiv, ImageModal } from './Modal.styled';

const Modal = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <OverlayDiv onClick={onClose}>
      <ModalDiv>
        <ImageModal src={imageUrl} alt="Large" />
      </ModalDiv>
    </OverlayDiv>
  );
};

export default Modal;
