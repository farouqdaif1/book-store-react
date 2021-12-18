import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

const Navbar = () => (
  <nav>
    <h2 id="site-header">Bookstore CMS</h2>
    <ul className="nav-items">
      <Link to="/">
        <li>Books</li>
      </Link>
      <Link to="/categories">
        <li>Categories</li>
      </Link>
    </ul>
    <div className="person"><BsFillPersonFill /></div>
  </nav>
);
export default Navbar;
