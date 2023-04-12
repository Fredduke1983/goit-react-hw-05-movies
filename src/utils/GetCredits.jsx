import axios from 'axios';

export default async function getCredits({ id }) {
  if (!id) return;

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=07952b117bf25f1a5db75594ad56755b`
  );
  const data = response.data;
  return data;
}
