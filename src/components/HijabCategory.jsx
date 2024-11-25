import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HijabCategory = () => {
  const scrollContainerRef = useRef(null);
  const [isScrollLeftVisible, setIsScrollLeftVisible] = useState(false);
  const [isScrollRightVisible, setIsScrollRightVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State untuk search query
  const navigate = useNavigate();

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setIsScrollLeftVisible(scrollLeft > 0);
      setIsScrollRightVisible(scrollLeft < scrollWidth - clientWidth);
    };

    const carouselElement = scrollContainerRef.current;
    carouselElement.addEventListener("scroll", handleScroll);

    return () => carouselElement.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      imgSrc: "img/pro-hijab.jpg",
      title: "Pashmina Shimmer",
      rating: "4.5",
      price: "Rp 50.000,00",
      discount: "25%",
    },
    {
      imgSrc: "img/pro-hijab.jpg",
      title: "Hijab Basic",
      rating: "4.7",
      price: "Rp 45.000,00",
      discount: "20%",
    },
    {
      imgSrc: "img/pro-hijab.jpg",
      title: "Hijab Premium",
      rating: "4.8",
      price: "Rp 75.000,00",
      discount: "30%",
    },
    {
      imgSrc: "img/pro-hijab.jpg",
      title: "Pashmina Shimmer",
      rating: "4.5",
      price: "Rp 50.000,00",
      discount: "25%",
    },
    {
      imgSrc: "img/pro-hijab.jpg",
      title: "Hijab Basic",
      rating: "4.7",
      price: "Rp 45.000,00",
      discount: "20%",
    },
    {
      imgSrc: "img/pro-hijab.jpg",
      title: "Hijab Premium",
      rating: "4.8",
      price: "Rp 75.000,00",
      discount: "30%",
    },
  ];

  // Filter produk berdasarkan searchQuery
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="pt-16 pb-20 px-20 overflow-hidden m-0 bg-gray-100">
      <div className="flex flex-wrap justify-between items-center">
        <h2 className="text-2xl font-bold mb-6 text-black">Hijab</h2>
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 rounded-lg mb-3 px-3 py-3 text-sm focus:outline-none focus:ring focus:ring-gray-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
        />
        <a href="/product" className="text-black hover:underline">
          View All Products →
        </a>
      </div>

      <div className="relative">
        {isScrollLeftVisible && (
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black text-white rounded-full p-3 mx-2 hover:bg-gray-800 z-10"
          >
            &#8592;
          </button>
        )}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                className="relative w-60 flex-shrink-0 rounded-md shadow-md overflow-hidden bg-white cursor-pointer"
                onClick={() =>
                  navigate("/detail", { state: { ...product } })
                }
              >
                {/* Discount Badge */}
                <span className="absolute text-center top-5 left-5 bg-gray-100 text-black text-xs font-semibold px-2 py-2 rounded-full">
                  {product.discount}
                </span>

                {/* Product Image */}
                <figure>
                  <img
                    src={product.imgSrc}
                    className="w-56 h-56 m-2 rounded-md object-cover"
                    alt={product.title}
                  />
                </figure>

                {/* Product Info */}
                <div className="pt-1 pb-2 pl-5 pr-2 leading-6">
                  <h3 className="mt-2 text-lg font-semibold leading-7 text-gray-800">
                    {product.title}
                  </h3>
                  <div className="pt-1 flex items-center space-x-2">
                    <div className="flex text-sm items-center text-yellow-500">
                      <i
                        className="bi bi-star-fill inline-block mr-1"
                        style={{ fontSize: "10px" }}
                      ></i>
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  <span className="block text-lg mb-3 font-bold text-gray-900">
                    {product.price}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No products found.</p>
          )}
        </div>
        {isScrollRightVisible && (
          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black text-white rounded-full p-3 mx-2 hover:bg-gray-800 z-10"
          >
            &#8594;
          </button>
        )}
      </div>
    </section>
  );
};

export default HijabCategory;
