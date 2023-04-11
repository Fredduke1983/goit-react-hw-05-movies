import getPopularMovies from 'utils/GetPopular';

import { useEffect, useState } from 'react';
import ListItem from 'components/ListItemMovies/ListItem';
// import { Outlet } from 'react-router-dom';

export default function Home() {
  const [responsePopular, setResponsePopular] = useState([]);

  useEffect(() => {
    if (responsePopular.length < 1)
      getPopularMovies().then(el => setResponsePopular(el.data.results));
  }, [responsePopular]);

  return (
    <div>
      Home Page Home
      <ul>
        {responsePopular && <ListItem responsePopular={responsePopular} />}
      </ul>
    </div>
  );
}
