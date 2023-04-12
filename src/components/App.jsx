import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Header/Layout';
import { Container } from './Container/Container.styled';
import Cast from './Cast/Cast';
import Review from './Review/Review';
import Movies from 'pages/Movies';
// import MoviesSearchList from './MoviesSearchList/MoviesSearchList';

const Home = React.lazy(() => import('pages/Home'));
const DetailedMovie = React.lazy(() => import('./DetailedMovie/DetailedMovie'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Завантаження...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route path="movies" element={<Movies />}>
            {/* <Route path="?" element={<MoviesSearchList />}></Route> */}
          </Route>
          <Route
            path="movies/:id"
            element={
              <Suspense fallback={<div>Завантаження...</div>}>
                <DetailedMovie />
              </Suspense>
            }
          >
            <Route path="cast" element={<Cast />}></Route>
            <Route path="review" element={<Review />}></Route>
          </Route>
        </Route>
      </Routes>
    </Container>
  );
};

//REV https://api.themoviedb.org/3/movie/550/reviews?api_key=07952b117bf25f1a5db75594ad56755b&language=en-US&page=1
//? --- https://api.themoviedb.org/3/movie/550?api_key=07952b117bf25f1a5db75594ad56755b
//! https://api.themoviedb.org/3/trending/movie/day?api_key=07952b117bf25f1a5db75594ad56755b
//* POPULAR -> https://api.themoviedb.org/3/trending/movie/week?api_key=07952b117bf25f1a5db75594ad56755b&language=en-US&page=1&include_adult=false
//* SEARCH  -> https://api.themoviedb.org/3/search/movie?api_key=07952b117bf25f1a5db75594ad56755b&language=en-US&page=1&include_adult=false&query=avatar
