import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext); // Ambil data cart dari context

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-600">
          <Link to="/">FoodMart</Link>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6">
          {/* Kategori Produk */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-700 font-medium ${isActive ? 'text-orange-600 border-b-2 border-orange-600' : ''}`
            }
          >
            All
          </NavLink>
          <NavLink
            to="/category/fruits"
            className={({ isActive }) =>
              `text-gray-700 font-medium ${isActive ? 'text-orange-600 border-b-2 border-orange-600' : ''}`
            }
          >
            Fruits & Veges
          </NavLink>
          <NavLink
            to="/category/juices"
            className={({ isActive }) =>
              `text-gray-700 font-medium ${isActive ? 'text-orange-600 border-b-2 border-orange-600' : ''}`
            }
          >
            Juices
          </NavLink>
        </div>

        {/* Action Links */}
        <div className="flex items-center space-x-6">
          {/* Cart */}
          <NavLink
            to="/cart"
            className="relative flex items-center text-gray-700 hover:text-orange-600"
          >
            <i className="bi bi-cart text-lg"></i>
            <span className="ml-2 font-medium">Cart</span>
            {/* Badge untuk jumlah item di cart */}
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-xs rounded-full px-2">
                {cartItems.length}
              </span>
            )}
          </NavLink>
          {/* Checkout */}
          <NavLink
            to="/checkout"
            className="flex items-center text-gray-700 hover:text-orange-600"
          >
            <i className="bi bi-credit-card text-lg"></i>
            <span className="ml-2 font-medium">Checkout</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;