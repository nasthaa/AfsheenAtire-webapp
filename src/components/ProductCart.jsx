import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />
      <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <p className="mt-2 text-lg font-semibold">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;