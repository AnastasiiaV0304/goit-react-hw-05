import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/apiHomePage";

export const useTrendingMovies = () => {
  const [films, setfilms] = useState([]);
  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const response = await fetchMovies();
        setfilms(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendingMovies();
  }, []);
  return films;
};
