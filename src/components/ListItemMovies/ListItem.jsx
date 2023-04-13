import { Link, useLocation } from 'react-router-dom';
import { HomeListItem } from './HomeListItem.styled';

export default function ListItem({ responsePopular }) {
  const location = useLocation();

  return (
    <>
      {responsePopular.map(el => {
        return (
          <HomeListItem key={el.id}>
            <Link to={`/movies/${el.id}`} state={{ from: location }}>
              {' '}
              {el.title}
            </Link>
          </HomeListItem>
        );
      })}
    </>
  );
}
