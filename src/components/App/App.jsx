import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviePage/MoviePage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
