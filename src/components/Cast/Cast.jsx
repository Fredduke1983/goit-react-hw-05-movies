import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import getCredits from 'utils/GetCredits';
import { CastList, CastListItem } from './Cast.styled';
import defaultImage from '../../img/no-symbol.png';

export default function Cast() {
  const [movieCredits, setMovieCredits] = useState([]);
  const id = useParams();

  useEffect(() => {
    if (!id) return;

    getCredits(id).then(movie => {
      setMovieCredits(movie);
    });
  }, [id]);
  return (
    <CastList>
      {movieCredits.cast &&
        movieCredits.cast.map(cast => {
          const { profile_path, id, original_name, character } = cast;
          return (
            <CastListItem key={id}>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                  alt="alt"
                  width={100}
                />
              )}
              {!profile_path && (
                <img src={defaultImage} alt="alt" width={100} />
              )}
              <h4>{original_name}</h4>
              <p>Character: {character}</p>
            </CastListItem>
          );
        })}
    </CastList>
  );
}
