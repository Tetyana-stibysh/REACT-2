import { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import Text from '../components/Text/Text';
import Button from '../components/Button/Button';
import { getPhotos } from '../apiService/photos';
// const images = [
//   {
//     id: 3573351,
//     avg_color: '#374824',
//     src: {
//       original:
//         'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png',
//       large:
//         'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940',
//       medium:
//         'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350',
//       small:
//         'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130',
//     },
//     alt: 'Brown Rocks During Golden Hour',
//   },
//   {
//     id: 35733515,
//     avg_color: '#374824',
//     src: {
//       original:
//         'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png',
//       large:
//         'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940',
//       medium:
//         'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350',
//       small:
//         'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130',
//     },
//     alt: 'Brown Rocks During Golden Hour',
//   },
// ];
const Photos = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!query) return;
    const asyncWrapper = async () => {
      try {
        const data = await getPhotos(query, page);
        console.log(data.photos);
        setImages(prev => [...prev, ...data.photos]);
      } catch (error) {}
    };
    asyncWrapper();
  }, [query, page]);
  const getQuery = query => {
    setImages([]);
    setPage(1);
    setQuery(query);
    console.log(query);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <>
      <Form onSubmit={getQuery} />
      <PhotosGallery images={images} />
      {!query && <Text textAlign="center">Let`s begin search 🔎</Text>}
      {images.length > 0 && (
        <Button onClick={handleLoadMore} disabled={isLoading}>
          Load more
        </Button>
      )}
    </>
  );
};

export default Photos;
