import { fetchMovieDetails } from "../../services/apiMovieDetails";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import css from "../MovieDetailsPage/MovieDetailsPage.module.css";
import { Link, Routes, Route } from "react-router-dom";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetchMovieDetails(movieId);

        setMovieDetails(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [movieDetails, movieId]);

  return (
    movieDetails && (
      <div>
        <Link to="/">Go Back</Link>
        <div className={css.flex}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          </div>
          <div>
            <h1>{movieDetails.title}</h1>
            <br></br>

            <h2>Overview: </h2>
            <p>{movieDetails.overview}</p>
            <br></br>
            <h2>Genres: </h2>
            <p>{movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
        <div>
          <h2>Additional information: </h2>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Routes>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Routes>
        </div>
      </div>
    )
  );
}
