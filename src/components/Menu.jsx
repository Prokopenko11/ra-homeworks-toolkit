import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink 
        to="/"
        className={({ isActive }) => "menu__item" + (isActive ? " menu__item-active" : "")}
      >
        Home
      </NavLink>
      <NavLink 
        to="/favorites"
        className={({ isActive }) => "menu__item" + (isActive ? " menu__item-active" : "")}
      >
        Favorite
      </NavLink>
    </nav>
  )
}

export default Menu;