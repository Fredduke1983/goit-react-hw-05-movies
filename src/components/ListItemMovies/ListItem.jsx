import { Link } from 'react-router-dom';
import { HomeListItem } from './HomeListItem.styled';

export default function ListItem({ responsePopular }) {
  return (
    <>
      {responsePopular.map(el => {
        return (
          <HomeListItem key={el.id}>
            <Link to={`/movies/${el.id}`}> {el.title}</Link>
          </HomeListItem>
        );
      })}
    </>
  );
}
