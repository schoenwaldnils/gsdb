import React from 'react';

import './Header.css';

export default () => (
  <header className="Header">
    <h1 className="Header-title">Home</h1>
    <nav className="Header-nav">
      <a className="Header-navItem" href="index.html">Home</a>
      <a className="Header-navItem" href="db.html">Datenbank</a>
      <a className="Header-navItem" href="forum.html">Forum</a>
      <a className="Header-navItem" href="team.html">Das Team</a>
    </nav>
  </header>
)
