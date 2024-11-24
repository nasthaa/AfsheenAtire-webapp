import React from 'react';

const SearchBar = () => {
  return (
    <div className="hidden lg:flex items-center bg-gray-100 rounded-lg p-2 w-1/2">
      <select className="bg-transparent border-none focus:ring-0">
        <option>All Categories</option>
        <option>Groceries</option>
        <option>Drinks</option>
        <option>Chocolates</option>
      </select>
      <input
        type="text"
        className="flex-grow bg-transparent border-none focus:outline-none ml-2"
        placeholder="Search for products"
      />
      <button className="text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
