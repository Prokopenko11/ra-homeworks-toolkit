import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favourites';
import MovieDetails from './components/MovieDetails';
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
