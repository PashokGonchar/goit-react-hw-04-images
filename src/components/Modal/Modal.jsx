import React, { useEffect } from 'react';
import { OverlayDiv, ModalDiv, ImageModal } from './Modal.styled';

const Modal = ({ imageUrl, onClose }) => {
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <OverlayDiv onClick={onClose}>
      <ModalDiv>
        <ImageModal src={imageUrl} alt="Large" />
      </ModalDiv>
    </OverlayDiv>
  );
};

export default Modal;
