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
    setIsModalOpen(true);
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

// class ImageGalleryItem extends Component {
//   state = {
//     isModalOpen: false,
//     selectedImageUrl: '',
//   };

//   handleImageClick = imageUrl => {
//     this.setState({
//       isModalOpen: true,
//       selectedImageUrl: imageUrl,
//     });
//   };

//   handleCloseModal = () => {
//     this.setState({
//       isModalOpen: false,
//     });
//   };

//   render() {
//     const { isLoading, images } = this.props;
//     const { isModalOpen, selectedImageUrl } = this.state;

//     return (
//       <>
//         {isLoading && <Loader />}
//         {images &&
//           images.map(el => {
//             return (
//               <li
//                 style={{
//                   listStyle: 'none',
//                 }}
//                 key={el.id}
//                 id={el.id}
//                 onClick={() => this.handleImageClick(el.largeImageURL)}
//               >
//                 <img src={el.webformatURL} alt={el.tags} />
//               </li>
//             );
//           })}

//         {isModalOpen && (
//           <Modal imageUrl={selectedImageUrl} onClose={this.handleCloseModal} />
//         )}
//       </>
//     );
//   }
// }

// export default ImageGalleryItem;
