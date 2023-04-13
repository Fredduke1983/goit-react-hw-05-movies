import getPopularMovies from 'utils/GetPopular';

import { useEffect, useState } from 'react';
import ListItem from 'components/ListItemMovies/ListItem';
import { ListStyle } from './Home.styled';

export default function Home() {
  const [responsePopular, setResponsePopular] = useState([]);

  useEffect(() => {
    if (responsePopular.length < 1)
      getPopularMovies().then(movies => {
        return setResponsePopular(movies.data.results);
      });
  }, [responsePopular]);

  return (
    <ListStyle>
      {responsePopular && <ListItem responsePopular={responsePopular} />}
    </ListStyle>
  );
}
