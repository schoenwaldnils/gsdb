import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const navItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Datenbank',
    url: '/db',
  },
  {
    title: 'Forum',
    url: '/forum',
  },
  {
    title: 'Team',
    url: '/team',
  },
  {
    title: 'Torte',
    url: '/torte',
  },
];

const Header = ({ title }) => (
  <header className="Header">
    <h1 className="Header-title">{title}</h1>
    <nav className="Header-nav">
      { navItems.map(item => (
        <a className="Header-navItem" href={item.url} key={item.url}>
          {item.title}
        </a>
      )) }
    </nav>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
