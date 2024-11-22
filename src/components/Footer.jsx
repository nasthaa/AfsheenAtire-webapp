import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-10 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-2xl mb-4 text-gray-100 font-noto tracking-widest">AFSHEEN ATIRE</h2>
            <div className="flex space-x-4">
              {/* Facebook Icon dalam kotak kecil dengan border */}
              <a href="#" className="text-gray-300 hover:text-gray-400">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-600 rounded-md">
                  <i className="bi bi-facebook place-items-center"></i>
                </div>
              </a>
              {/* Twitter Icon dalam kotak kecil dengan border */}
              <a href="#" className="text-gray-300 hover:text-gray-400">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-600 rounded-md">
                  <i className="bi bi-twitter place-items-center"></i>
                </div>
              </a>
              {/* YouTube Icon dalam kotak kecil dengan border */}
              <a href="#" className="text-gray-300 hover:text-gray-400">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-600 rounded-md">
                  <i className="bi bi-youtube place-items-center"></i>
                </div>
              </a>
              {/* Instagram Icon dalam kotak kecil dengan border */}
              <a href="#" className="text-gray-300 hover:text-gray-400">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-600 rounded-md">
                  <i className="bi bi-instagram place-items-center"></i>
                </div>
              </a>
              {/* Amazon Icon dalam kotak kecil dengan border */}
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
              <button type="submit" className="ml-2 bg-gray-500 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-00 transition duration-300">Subscribe</button>
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
