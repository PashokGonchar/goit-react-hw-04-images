
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { UlGallery } from './ImageGallery.styled';

const ImageGallery = ({ images, isLoading, searchText }) => {
  
  return (
    <>
      <UlGallery>
        <ImageGalleryItem
          images={images}
          isLoading={isLoading}
          searchText={searchText}
        />
      </UlGallery>
    </>
  );
};

export default ImageGallery;
