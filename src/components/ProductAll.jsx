import React, { useState } from "react";
import ProductCard from "./ProductCart";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";

const products = [
  { id: 1, name: "Bananas", price: 18, category: "Fruits", discount: "30%", rating: 4.5, image: "57.jpg" },
  { id: 2, name: "Candy Crunch", price: 18, category: "Snacks", discount: "30%", rating: 4.5, image: "57.jpg" },
  { id: 3, name: "Cucumber", price: 18, category: "Vegetables", discount: "10%", rating: 4.5, image: "57.jpg" },
  { id: 4, name: "Milk Carton", price: 18, category: "Dairy", discount: "20%", rating: 4.5, image: "57.jpg" },
  // Tambahkan produk lainnya sesuai kebutuhan...
];

const categories = ["All", "Fruits", "Vegetables", "Juices", "Snacks", "Dairy"];

function ProductAll() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <CartPage />
      <CheckoutPage />
      {/* Navbar */}
      <header className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Trending Products</h2>
        <div className="flex space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 border rounded-full ${
                selectedCategory === category
                  ? "bg-yellow-400 text-white"
                  : "bg-white text-gray-800 border-gray-300"
              } transition duration-300`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductAll;