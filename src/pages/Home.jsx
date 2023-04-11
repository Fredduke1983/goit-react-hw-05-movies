import axios from 'axios';
let arr = [];
export default function Home() {
  async function getPopularMovies() {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=07952b117bf25f1a5db75594ad56755b&language=en-US&page=1&include_adult=false'
    );
    console.log('response', response.data.results);
    arr = response.data.results[0];
  }
  getPopularMovies();

  return (
    <div>
      Home Page Home
      <img
        src={`https://image.tmdb.org/t/p/original/${arr.poster_path}`}
        alt="pict"
      ></img>
    </div>
  );
}
