import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import getReview from 'utils/GetReview';

export default function Review() {
  const [movieReview, setMovieReview] = useState([]);
  const id = useParams();

  useEffect(() => {
    if (!id) return;

    getReview(id).then(movie => {
      setMovieReview(movie.results);
    });
  }, [id]);

  return <>{movieReview.length ? movieReview[0].content : 'No REVIEWS'}</>;
}
