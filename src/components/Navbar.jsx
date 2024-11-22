import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="hidden lg:flex space-x-4">
      <Link to="/" className="hover:text-blue-500">
        Home
      </Link>
      <Link to="/about" className="hover:text-blue-500">
        About
      </Link>
      <Link to="/contact" className="hover:text-blue-500">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
