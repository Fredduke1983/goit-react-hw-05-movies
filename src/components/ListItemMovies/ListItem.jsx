import { Link } from 'react-router-dom';

export default function ListItem({ responsePopular }) {
  console.log(responsePopular);
  return (
    <>
      {responsePopular.map((el, index) => {
        return (
          <li key={index}>
            <Link to={`/movies/${el.id}`}> {el.title}</Link>
          </li>
        );
      })}
    </>
  );
}
