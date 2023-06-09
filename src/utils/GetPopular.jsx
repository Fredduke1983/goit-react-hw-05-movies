import axios from 'axios';

export default async function getPopularMovies() {
  return await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=07952b117bf25f1a5db75594ad56755b&language=en-US&page=1&include_adult=false'
  );
}
