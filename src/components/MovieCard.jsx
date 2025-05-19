import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/slices/favoritesSlice';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const favorites = useSelector((state) => state.favorites.list);
  const dispatch = useDispatch();

  const isFavorite = favorites.some((item) => item.imdbID === movie.imdbID);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div className="movie-card">
      <img src={movie.Poster} className="movie-card-image" alt="poster" />
      <div className="movie-card-wrapper">
        <h3 className="movie-card-title">{movie.Title}</h3>
        <div
          className={`heart ${isFavorite ? 'active' : ''}`}
          onClick={toggleFavorite}
          title="Toggle favorite"
        ></div>
      </div>
      <Link to={`/movie/${movie.imdbID}`}>
        <button className="show-details-button">Learn more about movie</button>
      </Link>
    </div>
  );
};

export default MovieCard;
