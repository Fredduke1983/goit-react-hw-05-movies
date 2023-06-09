import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import getDetailedMovie from 'utils/GetDetailed';
import { DetailStyle, ToHomeStyle } from './DetailedMovie.styled';
import AddInfo from './AddInfo/AddInfo';
import { BsBoxArrowLeft } from 'react-icons/bs';

export default function DetailedMovie() {
  const [movieDetail, setMovieDetail] = useState([]);
  const id = useParams();
  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!id) return;

    getDetailedMovie(id).then(movie => {
      setMovieDetail(movie);
    });
  }, [id]);

  const { poster_path, title, vote_average, overview, genres } = movieDetail;

  return (
    <>
      <Link to={backLocation.current}>
        <ToHomeStyle>
          <BsBoxArrowLeft />
          <p>Go back</p>
        </ToHomeStyle>
      </Link>
      <DetailStyle>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt="alt"
            width={400}
          />
        )}

        <div>
          <h1>{title}</h1>
          <p>User score: {(vote_average * 10).toFixed(1)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          {genres && (
            <p>
              {genres.map(genre => {
                return `${genre.name} `;
              })}
            </p>
          )}
        </div>
      </DetailStyle>
      <AddInfo />
    </>
  );
}
