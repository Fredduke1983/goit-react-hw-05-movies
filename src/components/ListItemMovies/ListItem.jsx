import { Link } from 'react-router-dom';

export default function ListItem({ responsePopular }) {
  return (
    <>
      {responsePopular.map(el => {
        return (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`}> {el.title}</Link>
          </li>
        );
      })}
    </>
  );
}
