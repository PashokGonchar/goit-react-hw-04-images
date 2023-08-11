import React, { useEffect, useState } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import { getImages } from 'api/imagesApi';
import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
  const [searchText, setSearchText] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const hasImages = images.length > 0;
  const hasMoreImages = images.length % 12 === 0;

  useEffect(() => {
    if (page === 1) {
      setImages([])
    }
  
    if (searchText !== '') {
      setIsLoading(true);
      getImages(searchText, page, 12)
        .then(response => response.json())
        .then(data => {
          setImages (prevImages => prevImages.concat(data.hits));
        })
        .finally(() => {
          setIsLoading(false);
        })
    }
  },[searchText, page])

    const handleSearch = newSearchText => {
      setSearchText(newSearchText);
      setPage(1);
  };
  
    const handleLoadMore = () => {
      setPage(prevPage => prevPage + 1);
    };

    const handleClearImages = () => {
      setImages([]);
    };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        lineHeight: 0,
        flexDirection: 'column',
      }}
    >
      <Searchbar
        handleSearch={handleSearch}
        handleClearImages={handleClearImages}
      />
      <ImageGallery
        images={images}
        isLoading={isLoading}
        searchText={searchText}
      />
      {hasImages && hasMoreImages && <Button onClick={handleLoadMore} />}
    </div>
  );
};