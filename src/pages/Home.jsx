import getPopularMovies from 'utils/GetPopular';

import { useEffect, useState } from 'react';
import ListItem from 'components/ListItemMovies/ListItem';

export default function Home() {
  const [responsePopular, setResponsePopular] = useState([]);

  useEffect(() => {
    if (responsePopular.length < 1)
      getPopularMovies().then(movies => {
        return setResponsePopular(movies.data.results);
      });
  }, [responsePopular]);

  return (
    <ul>{responsePopular && <ListItem responsePopular={responsePopular} />}</ul>
  );
}
