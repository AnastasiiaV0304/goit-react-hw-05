import MovieList from "../../components/MovieList/MovieList";
import { useTrendingMovies } from "../../components/hooks/useTrandMovies";

const HomePage = () => {
  const films = useTrendingMovies();

  return (
    <div>
      <h1>Tranding Today</h1>
      <MovieList movie={films} />
    </div>
  );
};

export default HomePage;

// realising via useEffect in ../../components/hooks/useTrandMovies
