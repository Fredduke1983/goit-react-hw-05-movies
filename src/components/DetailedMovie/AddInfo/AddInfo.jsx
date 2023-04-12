import { Link, Outlet } from 'react-router-dom';
import { AddInfoStyle } from './AddInfo.styled';

export default function AddInfo() {
  return (
    <AddInfoStyle>
      <p>Additional Information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="review">Review</Link>
        </li>
      </ul>
      <Outlet />
    </AddInfoStyle>
  );
}
