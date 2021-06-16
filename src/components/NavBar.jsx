import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="header">
      <div className="header-item">
        <Link to="/">
          <strong>Awesome Blog</strong>
        </Link>
      </div>
      <div className="header-item">
        <a href="/login">Login</a>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Theme:dark' : 'Theme: light'}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
