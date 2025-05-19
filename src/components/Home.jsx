import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../redux/slices/searchMovieSlice';
import { useState } from 'react';
import MovieCard from './MovieCard';
import Preloader from './Preloader';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  const { movies, loading } = useSelector((state) => state.searchMovie)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleClick = () => {
    setIsSearched(true);
    dispatch(fetchMovie(searchValue));
  }

  return (
    <div className="home-page">
      <div className="search-movie-wrapper">
        <input value={searchValue} onChange={handleChange} className="search-movie-input"/>
        <button className="search-button" onClick={handleClick}></button>
      </div>
      {loading && <Preloader />}
      {!loading && isSearched && movies.length === 0 && <p className="error">Фильмы не найдены</p>}
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.imdbID} className="movie-list-item">
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home;