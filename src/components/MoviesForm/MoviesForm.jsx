import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MoviesFormStyle, MoviesList } from './MoviesForm.styled';
import getSearch from 'utils/GetSearch';
import { useEffect, useState } from 'react';
import defaultImage from '../../img/no-symbol.png';

export default function MoviesForm() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [searchList, setSearchList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const query = searchParams.get('query');

  const location = useLocation();

  function getMovies(q) {
    q &&
      getSearch(q)
        .then(response => response)
        .then(movies => {
          setSearchList(movies.results);
        });
  }

  function onSubmit(event) {
    event.preventDefault();
    setSearchParams({ query: event.target[0].value });
    if (query === event.target[0].value) return;

    getMovies(query);
  }

  useEffect(() => {
    query !== '' && getMovies(query);
    query !== null && setInputValue(query);
  }, [query]);

  function onChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <>
      <MoviesFormStyle onSubmit={onSubmit}>
        <input
          placeholder="search movie"
          value={inputValue}
          onChange={onChange}
        />
        <button type="submit">Search</button>
      </MoviesFormStyle>

      <MoviesList>
        {searchList.map(movie => {
          const { id, title, poster_path } = movie;
          return (
            <li key={id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
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
