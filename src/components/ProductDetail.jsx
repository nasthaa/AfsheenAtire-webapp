import React, { useState } from "react";

const Detail = () => {
  const [selectedColor, setSelectedColor] = useState("White");
  const [selectedSize, setSelectedSize] = useState(41);

  const colors = ["White", "Gray", "Black"];
  const sizes = ["XS", "SM", "MD", "LG", "XL", "2XL"];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full grid grid-cols-2 gap-8 p-8">
        {/* Left Section - Images */}
        <div>
          <img
            src="img/pro-hijab.jpg"
            alt="Pashmina Shimmer"
            className="w-96 h-96 rounded-lg object-cover"
          />
          <div className="flex gap-2 mt-4">
            {/* Thumbnails */}
            {Array(4)
              .fill("")
              .map((_, idx) => (
                <img
                  key={idx}
                  src="img/pro-hijab.jpg"
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-20 h-20 rounded-md border border-gray-300 object-cover cursor-pointer hover:border-black"
                />
              ))}
          </div>
        </div>

        {/* Right Section - Details */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Hijab Pashmina</h2>
          <h1 className="text-3xl font-bold mb-2">
            Pashmina Shimmer
          </h1>
          <p className="text-yellow-500 mb-4">★★★★★ (42 reviews)</p>
          <p className="text-2xl font-semibold text-gray-800 mb-6">Rp 50.000,00</p>

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

          {/* Add to Cart Button */}
          <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition">
            Add to cart
          </button>

          {/* Additional Info */}
          <p className="text-gray-500 text-sm mt-4">
            Free delivery on orders over Rp 500.000,00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
