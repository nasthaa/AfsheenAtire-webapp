import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name} x {item.quantity}</span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold mt-4">
          <span>Total</span>
          <span>${totalPrice}</span>
        </div>
      </div>
      <button
        onClick={clearCart}
        className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Complete Purchase
      </button>
    </div>
  );
};

export default CheckoutPage;