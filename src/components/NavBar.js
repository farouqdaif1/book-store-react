import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h2 id="site-header">Bookstore CMS</h2>
    <ul>
      <Link to="/">
        <li>Books</li>
      </Link>
      <Link to="/categories">
        <li>Categories</li>
      </Link>
    </ul>
  </nav>
);
export default Navbar;
