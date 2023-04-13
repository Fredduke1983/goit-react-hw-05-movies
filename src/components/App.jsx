import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Header/Layout';
import { Container } from './Container/Container.styled';
import Movies from 'pages/Movies';

const Cast = React.lazy(() => import('./Cast/Cast'));
const Review = React.lazy(() => import('./Review/Review'));
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
          <Route path="movies" element={<Movies />}></Route>
          <Route
            path="movies/:id"
            element={
              <Suspense fallback={<div>Завантаження...</div>}>
                <DetailedMovie />
              </Suspense>
            }
          >
            <Route
              path="cast"
              element={
                <Suspense fallback={<div>Завантаження...</div>}>
                  <Cast />
                </Suspense>
              }
            ></Route>
            <Route
              path="review"
              element={
                <Suspense fallback={<div>Завантаження...</div>}>
                  <Review />
                </Suspense>
              }
            ></Route>
          </Route>
        </Route>
      </Routes>
    </Container>
  );
};
