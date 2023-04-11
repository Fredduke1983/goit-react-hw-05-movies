import Home from 'pages/Home';
import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    // <Header>
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}>
          Home Page
        </Route>
        <Route path="/movies">Movies Page</Route>
      </Routes>
    </>
    // </Header>
  );
};

//? --- https://api.themoviedb.org/3/movie/550?api_key=07952b117bf25f1a5db75594ad56755b
//! https://api.themoviedb.org/3/trending/movie/day?api_key=07952b117bf25f1a5db75594ad56755b
//* POPULAR -> https://api.themoviedb.org/3/trending/movie/week?api_key=07952b117bf25f1a5db75594ad56755b&language=en-US&page=1&include_adult=false
//* SEARCH  -> https://api.themoviedb.org/3/search/movie?api_key=07952b117bf25f1a5db75594ad56755b&language=en-US&page=1&include_adult=false&query=avatar
