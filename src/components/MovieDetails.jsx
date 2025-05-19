import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../redux/slices/movieDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Preloader from './Preloader';

const MovieDetails = () => {
  const { id } = useParams();
  const { movie, loading, error} = useSelector((state) => state.movieDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, [dispatch, id]);

  if (loading || !movie) {
    return <Preloader />;
  }

  if (error) {
    return <p className="error">Something went wrong</p>;
  }

  const genreList = movie.Genre.split(',').map(genre => genre.trim());
  const actorsList = movie.Actors.split(',').map(actor => actor.trim());

  return (
    <div className="movie-details-card">
      <img className="movie-details-image" src={movie.Poster} alt="poster"/>
      <div className="movie-details-card-content">
        <h2 className="movie-details-title">{movie.Title}</h2>
        <div className="movie-details-wrapper">
          <span>{movie.Year}</span>
          <span>{movie.Runtime}</span>
        </div>
        <ul className="genre-list">
          {genreList.map((genre, index) => (
            <li className="genre-list-item" key={index}>{genre}</li>
          ))}
        </ul>
        <p><span className="movie-director-span">Director </span>{movie.Director}</p>
        <ul className="actors-list">
          <span className="actors-list-span">Actors</span>
          {actorsList.map((actor, index) => (
            <li className="actors-list-item" key={index}>{actor}</li>
          ))}
        </ul>
        <p className="movie-rating">
          <span className="movie-rating-span">Rating </span>
          {movie.imdbRating}
        </p>
      </div>
    </div>
  )
}

export default MovieDetails;