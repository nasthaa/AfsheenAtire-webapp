import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation(); // Dapatkan rute saat ini

  // Jangan tampilkan Header jika berada di halaman login
  if (location.pathname === '/login') {
    return null;
  }

  // Fungsi untuk toggle cart
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <header className="border-b">
      {/* Top section */}
      <div className="container py-2">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="w-full sm:w-auto text-center sm:text-left">
            <a href="/">
              <img
                src="img/logo-light.jpg"
                alt="logo"
                className="mx-auto lg:pl-10 lg:w-48 sm:px-1 sm:w-36 object-cover max-h-20"
              />
            </a>
          </div>

          {/* Search bar */}
          <div className="hidden sm:flex flex-grow max-w-lg items-center bg-gray-100 p-3 rounded-lg">
            <form className="flex-grow">
              <input
                type="text"
                className="w-full bg-transparent border-0 outline-none text-gray-800"
                placeholder="Search products"
              />
            </form>
            <button>
              <i className="bi bi-search text-gray-600" style={{ fontSize: '16px' }}></i>
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center pl-2 lg:gap-3 sm:gap-1">
            <a href="/login" className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full">
              <i className="bi bi-person-fill text-gray-300" style={{ fontSize: '16px' }}></i>
            </a>
            <a href="#" className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full">
              <i className="bi bi-heart-fill text-red-300" style={{ fontSize: '16px' }}></i>
            </a>
            <a
              href="#"
              className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full lg:hidden"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"
            >
              <i className="bi bi-cart text-gray-300" style={{ fontSize: '16px' }}></i>
            </a>
          </div>

          {/* Cart */}
          <div className="hidden lg:block text-right">
            <button onClick={toggleCart} className="bg-transparent flex flex-col items-end">
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <span>Your Cart</span>
                <i className={`bi bi-chevron-${isCartOpen ? 'up' : 'down'}`}></i> {/* Ikon dropdown */}
              </div>
              <h5 className="font-bold text-lg text-gray-800">Rp 145.000,00</h5>
            </button>

            {/* Dropdown cart */}
            {isCartOpen && (
              <div
                className="absolute right-0 mt-2 w-72 bg-white border shadow-lg rounded-lg"
                style={{ zIndex: '100' }}
              >
                <div className="p-4">
                  <h4 className="text-lg font-bold">Your Cart</h4>
                  <ul className="divide-y divide-gray-200">
                    <li className="py-2 flex justify-between">
                      <span>Growers cider</span>
                      <span>$12</span>
                    </li>
                    <li className="py-2 flex justify-between">
                      <span>Fresh grapes</span>
                      <span>$8</span>
                    </li>
                    <li className="py-2 flex justify-between">
                      <span>Heinz tomato ketchup</span>
                      <span>$5</span>
                    </li>
                  </ul>
                  <div className="flex justify-between mt-4 font-bold">
                    <span>Total</span>
                    <span>$25</span>
                  </div>
                  <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
