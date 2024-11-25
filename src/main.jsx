import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import file CSS (termasuk konfigurasi Tailwind)
import { CartProvider } from './context/CartContext'; // Import context

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Bungkus aplikasi dengan CartProvider untuk menyediakan akses ke state global */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);