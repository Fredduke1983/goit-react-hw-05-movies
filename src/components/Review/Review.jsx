import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import getReview from 'utils/GetReview';
import { ReviewListItem } from './Review.styled';

export default function Review() {
  const [movieReview, setMovieReview] = useState([]);
  const id = useParams();

  useEffect(() => {
    if (!id) return;

    getReview(id).then(movie => {
      setMovieReview(movie.results);
    });
  }, [id]);
  return (
    <ul>
      {movieReview.length ? (
        movieReview.map(review => {
          return (
            <ReviewListItem key={review.id}>
              <h3>{review.author}</h3>
              <p> {review.content} </p>
            </ReviewListItem>
          );
        })
      ) : (
        <h2>'No REVIEWS'</h2>
      )}
    </ul>
  );
}
