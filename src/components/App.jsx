import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import DetailedMovie from './DetailedMovie/DetailedMovie';
import Layout from './Header/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies"></Route>
          <Route path="movies/:id" element={<DetailedMovie />}></Route>
        </Route>
      </Routes>
    </>
  );
};

//REV https://api.themoviedb.org/3/movie/550/reviews?api_key=07952b117bf25f1a5db75594ad56755b&language=en-US&page=1
//? --- https://api.themoviedb.org/3/movie/550?api_key=07952b117bf25f1a5db75594ad56755b
//! https://api.themoviedb.org/3/trending/movie/day?api_key=07952b117bf25f1a5db75594ad56755b
//* POPULAR -> https://api.themoviedb.org/3/trending/movie/week?api_key=07952b117bf25f1a5db75594ad56755b&language=en-US&page=1&include_adult=false
//* SEARCH  -> https://api.themoviedb.org/3/search/movie?api_key=07952b117bf25f1a5db75594ad56755b&language=en-US&page=1&include_adult=false&query=avatar
