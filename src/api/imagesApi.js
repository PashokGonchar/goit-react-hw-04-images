const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '37603582-92143e20137f7c1d3caa92753';

export const getImages = (searchText, page = 1) => {
  const perPage = 12;
  return fetch(
    `${BASE_URL}/?key=${API_KEY}&q=${searchText}&page=${page}&per_page=${perPage}`
  );
};
