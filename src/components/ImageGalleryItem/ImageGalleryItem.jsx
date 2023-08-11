import { Loader } from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';

export const ImageGalleryItem = ({ isLoading, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  const handleImageClick = imageUrl => {
    setIsModalOpen(true);
    setSelectedImageUrl(imageUrl);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isLoading && <Loader />}
      {images &&
        images.map(el => {
          return (
            <li
              style={{
                listStyle: 'none',
              }}
              key={el.id}
              id={el.id}
              onClick={() => handleImageClick(el.largeImageURL)}
            >
              <img src={el.webformatURL} alt={el.tags} />
            </li>
          );
        })}

      {isModalOpen && (
        <Modal imageUrl={selectedImageUrl} onClose={handleCloseModal} />
      )}
    </>
  );
};
