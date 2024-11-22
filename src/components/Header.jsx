import React from 'react';

function Header () {
  return (
    <header className="border-b">
      {/* Top Section */}
      <div className="container mx-auto py-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="w-full sm:w-auto text-center sm:text-left">
            <a href="index.html">
              <img src="images/logo.png" alt="logo" className="mx-auto sm:mx-0 max-h-12" />
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-grow max-w-3xl items-center bg-gray-100 p-3 rounded-lg">
            <form className="flex-grow px-2">
              <input
                type="text"
                className="w-full bg-transparent border-0 outline-none text-gray-800"
                placeholder="Search products"
              />
            </form>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="text-gray-600">
                <path
                  fill="currentColor"
                  d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                />
              </svg>
            </button>
          </div>

          {/* Support & Icons */}
          <div className="flex items-center gap-6 mt-4 lg:mt-0 justify-center sm:justify-end">
            {/* Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="bg-gray-100 p-2 rounded-full">
                <svg width="24" height="24" className="text-gray-600">
                  <use xlinkHref="#user"></use>
                </svg>
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full">
                <svg width="24" height="24" className="text-gray-600">
                  <use xlinkHref="#heart"></use>
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-100 p-2 rounded-full lg:hidden"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasCart"
              >
                <svg width="24" height="24" className="text-gray-600">
                  <use xlinkHref="#cart"></use>
                </svg>
              </a>
            </div>

            {/* Cart */}
            <div className="hidden lg:block text-right">
              <button className="bg-transparent">
                <span className="text-sm text-gray-500">Your Cart</span>
                <h5 className="font-bold text-lg">Rp 129.000,00</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
