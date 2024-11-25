// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import BannerSection from './components/BannerSection';
import CategorySection from './components/CategorySection';
import HijabCategory from './components/HijabCategory';
import PakaianCategory from './components/PakaianCategory';
import SepatuCategory from './components/SepatuCategory';
import TasCategory from './components/TasCategory';
import AksesorisCategory from './components/AksesorisCategory';
// import ProductAll from './components/ProductAll';
// import ProductCard from "./components/ProductCart";
// import CartPage from "./components/CartPage";
// import CheckoutPage from "./components/CheckoutPage";
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-poppins">
        {/* Header */}
        <Header />

          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/hijab" element={<HijabCategory />} />
              <Route path="/pakaian" element={<PakaianCategory />} />
              <Route path="/sepatu" element={<SepatuCategory />} />
              <Route path="/tas" element={<TasCategory />} />
              <Route path="/aksesoris" element={<AksesorisCategory />} />
              {/* <Route path="/product" element={<ProductAll />} /> */}
              <Route path="/detail" element={<ProductDetail />} />
            </Routes>
          </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
