import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState("White");
  const [selectedSize, setSelectedSize] = useState(41);
  const location = useLocation();
  const { imgSrc, title, rating, price, discount } = location.state || {};

  const colors = ["White", "Gray", "Black"];
  const sizes = [40.5, 41, 42, 43.5, 44, 44.5];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full grid grid-cols-2 gap-8 p-8">
        {/* Left Section - Image */}
        <div>
          <img
            src={imgSrc || "img/default.jpg"}
            alt={title}
            className="w-96 h-96 rounded-lg object-cover"
          />
        </div>

        {/* Right Section - Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{title || "Product Title"}</h1>
          <p className="text-yellow-500 mb-4">
            ★★★★★ ({rating || "No Rating"})
          </p>
          <p className="text-2xl font-semibold text-gray-800 mb-6">
            {price || "Rp 0,00"}
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Discount: {discount || "N/A"}
          </p>

                    {/* Color Selector */}
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Color</h3>
            <div className="flex gap-4">
              {colors.map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 cursor-pointer ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{
                    backgroundColor:
                      color === "White"
                        ? "#ffffff"
                        : color === "Gray"
                        ? "#d1d1d1"
                        : "#000000",
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Size</h3>
            <div className="grid grid-cols-3 gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-4 border rounded-lg text-sm font-medium ${
                    selectedSize === size
                      ? "border-black bg-gray-200"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">EU Size</p>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
