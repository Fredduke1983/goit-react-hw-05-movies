import { Link, useLocation } from 'react-router-dom';
import { HomeListItem, MainTitle } from './HomeListItem.styled';

export default function ListItem({ responsePopular }) {
  const location = useLocation();
  console.log(responsePopular);
  return (
    <>
      <MainTitle>Trending today</MainTitle>
      {responsePopular.map(movie => {
        const { backdrop_path, id, title } = movie;
        return (
          <HomeListItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                alt="alt"
                width={80}
              />{' '}
              {title}
            </Link>
          </HomeListItem>
        );
      })}
    </>
  );
}
