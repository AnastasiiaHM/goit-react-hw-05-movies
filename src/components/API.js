import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '04e81fd645700f6c06d8143699014c8e';

export async function getTrendingMovies() {
  const url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
  try {
    const response = await axios.get(`${url}`);

    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getSearchMovies(query) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`;
  try {
    const response = await axios.get(`${url}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getDetailsMovie(id) {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
  try {
    const response = await axios.get(`${url}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getCastMovie(id) {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
  try {
    const response = await axios.get(`${url}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getReviewsMovie(id) {
  const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`;
  try {
    const response = await axios.get(`${url}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
