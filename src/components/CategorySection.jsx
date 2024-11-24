import React, { useRef, useState, useEffect } from "react";

const categories = [
  { name: "Hijab", image: "img/cat-hijab.jpg" },
  { name: "Pakaian", image: "img/cat-pakaian.jpg" },
  { name: "Sepatu", image: "img/cat-sepatu.jpg" },
  { name: "Tas", image: "img/cat-tas.jpg" },
  { name: "Aksesoris", image: "img/cat-aksesoris.jpg" },
];

const CategoryCard = ({ name, image }) => (
  <div className="flex-shrink-0 w-60 h-80 pt-4 px-2 bg-white shadow-md rounded-md">
    <img src={image} alt={name} className="w-56 h-56 object-cover mb-4 rounded-md" />
    <p className="text-left pl-4 text-md mb-2 font-bold">{name}</p>
  </div>
);

const CategorySection = () => {
  const carouselRef = useRef(null);

  const [isScrollLeftVisible, setIsScrollLeftVisible] = useState(false);
  const [isScrollRightVisible, setIsScrollRightVisible] = useState(true);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      setIsScrollLeftVisible(scrollLeft > 0);
      setIsScrollRightVisible(scrollLeft < scrollWidth - clientWidth);
    };

    const carouselElement = carouselRef.current;
    carouselElement.addEventListener("scroll", handleScroll);

    return () => carouselElement.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-16 pb-20 px-20" style={{ backgroundColor: "black" }}>
    <style>
      {`
        .scrollbar-hide {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* Internet Explorer 10+ */
        }
    
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
      `}
    </style>  
      <h2 className="text-2xl font-bold mb-6 text-white">Shop by Categories</h2>
      <div className="relative">
        {isScrollLeftVisible && (
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black text-white rounded-full p-3 mx-2 hover:bg-gray-800 z-10"
          >
            &#8592;
          </button>
        )}
        <div ref={carouselRef} className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {categories.map((category) => (
            <CategoryCard key={category.name} name={category.name} image={category.image} />
          ))}
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
    </div>
  );
};

export default CategorySection;
