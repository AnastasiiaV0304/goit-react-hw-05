import MovieList from "../../components/MovieList/MovieList";
import { useTrandMovies } from "../../components/hooks/useTrandMovies";

const HomePage = () => {
  const films = useTrandMovies();

  return (
    <div>
      <h1>Tranding Today</h1>
      <MovieList movie={films} />
    </div>
  );
};

export default HomePage;
