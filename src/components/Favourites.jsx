import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.list);

  return (
    <div>
      <ul className="movie-list movie-list__favorite">
        {favorites.length === 0 ? <p className="favorite-error">You don't have any favorite movies</p> : (
          favorites.map(movie => (
            <li key={movie.imdbID} className="movie-list-item">
              <MovieCard movie={movie} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Favorites;