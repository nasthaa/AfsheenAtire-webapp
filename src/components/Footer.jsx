import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation

const Footer = () => {
  const location = useLocation(); // Dapatkan rute saat ini

  // Jangan tampilkan Header jika berada di halaman login
  if (location.pathname === '/login') {
    return null;
  }

  return (
    <footer className="bg-black py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            {/* <h2 className="text-2xl mb-4 text-gray-100 font-noto tracking-widest">
              AFSHEEN ATIRE
            </h2> */}
            <div className="w-full text-center sm:text-left">
              <a href="/">
                <img
                  src="img/logo-dark.jpg"
                  alt="logo"
                  className="w-64 pb-2 object-cover"
                />
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gray-400">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-600 rounded-md">
                  <i className="bi bi-facebook place-items-center"></i>
                </div>
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-600 rounded-md">
                  <i className="bi bi-twitter place-items-center"></i>
                </div>
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-600 rounded-md">
                  <i className="bi bi-youtube place-items-center"></i>
                </div>
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-600 rounded-md">
                  <i className="bi bi-instagram place-items-center"></i>
                </div>
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-600 rounded-md">
                  <i className="bi bi-amazon place-items-center"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-gray-100 mb-2.5">Ultras</h2>
            <ul>
              <li className="mb-1.5"><a href="#" className="text-gray-200 hover:text-gray-400">About us</a></li>
              <li className="mb-1.5"><a href="#" className="text-gray-200 hover:text-gray-400">Conditions</a></li>
              <li className="mb-1.5"><a href="#" className="text-gray-200 hover:text-gray-400">Our Journals</a></li>
              <li className="mb-1.5"><a href="#" className="text-gray-200 hover:text-gray-400">Careers</a></li>
              <li className="mb-1.5"><a href="#" className="text-gray-200 hover:text-gray-400">Affiliate Programme</a></li>
              <li className="mb-1.5"><a href="#" className="text-gray-200 hover:text-gray-400">Ultras Press</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-gray-100 mb-2.5">Customer Service</h2>
            <ul>
              <li className="mb-1.5"><a href="#" className="text-gray-200 hover:text-gray-400">FAQ</a></li>
              <li className="mb-1.5"><a href="#" className="text-gray-200 hover:text-gray-400">Contact</a></li>
              <li className="mb-1.5"><a href="#" className="text-gray-200 hover:text-gray-400">Privacy Policy</a></li>
              <li className="mb-1.5"><a href="#" className="text-gray-200 hover:text-gray-400">Returns & Refunds</a></li>
              <li className="mb-1.5"><a href="#" className="text-gray-200 hover:text-gray-400">Cookie Guidelines</a></li>
              <li className="mb-1.5"><a href="#" className="text-gray-200 hover:text-gray-400">Delivery Information</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-gray-100 mb-2.5">Subscribe Us</h2>
            <p className="text-gray-200 mb-4 leading-7">Subscribe to our newsletter to get updates about our grand offers.</p>
            <form className="flex">
              <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-400" />
              <button type="submit" className="ml-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Afsheen Atire. All rights reserved.</p>
          <p>
            Follow us on 
            <a href="https://www.facebook.com" className="text-zinc-200 ml-1">Facebook</a>, 
            <a href="https://www.twitter.com" className="text-zinc-200 ml-1">Twitter</a>, and 
            <a href="https://www.instagram.com" className="text-zinc-200 ml-1">Instagram</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
