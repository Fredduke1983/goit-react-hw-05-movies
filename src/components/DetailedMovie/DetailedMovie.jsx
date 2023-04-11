import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getDetailedMovie from 'utils/GetDetailed';

export default function DetailedMovie() {
  const [movieDetail, setMovieDetail] = useState([]);
  const id = useParams();

  useEffect(() => {
    getDetailedMovie(id).then(movie => {
      setMovieDetail(movie);
    });
  }, [id]);

  console.log(movieDetail);
  const { poster_path, title } = movieDetail;
  return (
    <>
      {title}
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="alt"
        width={600}
      />
    </>
  );
}
