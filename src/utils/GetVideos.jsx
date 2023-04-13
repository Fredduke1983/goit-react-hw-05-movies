import axios from 'axios';

export default async function getVideos({ id }) {
  if (!id) return;

  const response = await axios.get(
    // `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=07952b117bf25f1a5db75594ad56755b&language=en-US`
    //   https://www.youtube.com/watch?v=key
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=07952b117bf25f1a5db75594ad56755b&language=en-US`
  );
  const data = response.data;
  return data;
}
