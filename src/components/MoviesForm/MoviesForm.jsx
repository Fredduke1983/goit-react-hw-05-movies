import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MoviesFormStyle, MoviesList } from './MoviesForm.styled';
import getSearch from 'utils/GetSearch';
import { useState } from 'react';
import defaultImage from '../../img/no-symbol.png';

export default function MoviesForm() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [searchList, setSearchList] = useState([]);

  function onSubmit(event) {
    event.preventDefault();
    const query = searchParams.get('query');

    query &&
      getSearch(query)
        .then(response => response)
        .then(movies => {
          setSearchList(movies.results);
        });
  }

  const location = useLocation();
  console.log(location.search);

  function onChange(event) {
    setSearchParams({ query: event.target.value });
    if (!event.target.value) setSearchParams({});
  }

  return (
    <>
      <MoviesFormStyle onSubmit={onSubmit}>
        <input placeholder="search movie" onChange={onChange} />
        <button type="submit">Search</button>
      </MoviesFormStyle>
      <MoviesList>
        {searchList.map(movie => {
          const { id, title, poster_path } = movie;
          return (
            <li key={id}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location.search }}
              >
                {poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    alt="alt"
                    width={200}
                  />
                )}
                {!poster_path && (
                  <img src={defaultImage} alt="alt" width={200} />
                )}
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </MoviesList>
    </>
  );
}
