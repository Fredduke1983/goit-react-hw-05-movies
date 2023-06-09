import axios from 'axios';

export default async function getSearch(query) {
  if (!query) return;

  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=07952b117bf25f1a5db75594ad56755b&language=en-US&page=1&include_adult=false&query=${query}`
    // https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
  );
  const data = response.data;
  return data;
}
