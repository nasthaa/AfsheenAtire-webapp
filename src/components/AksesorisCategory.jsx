import React, { useRef, useState, useEffect } from "react";

const AksesorisCategory = () => {
  const scrollContainerRef = useRef(null);
  const [isScrollLeftVisible, setIsScrollLeftVisible] = useState(false);
  const [isScrollRightVisible, setIsScrollRightVisible] = useState(true);

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

  return (
    <section className="pt-0 pb-20 px-20 overflow-hidden m-0 bg-gray-100">
      <div className="flex flex-wrap justify-between">
        <h2 className="text-2xl font-bold mb-6 text-black">Aksesoris</h2>
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
          <ProductItem
            discount="25%"
            imgSrc="img/pro-aksesoris.jpg"
            title="Padlock Necklace"
            rating="4.5"
            price="Rp 45.000,00"
          />
          <ProductItem
            discount="25%"
            imgSrc="img/pro-aksesoris.jpg"
            title="Padlock Necklace"
            rating="4.5"
            price="Rp 45.000,00"
          />
          <ProductItem
            discount="25%"
            imgSrc="img/pro-aksesoris.jpg"
            title="Padlock Necklace"
            rating="4.5"
            price="Rp 45.000,00"
          />
          <ProductItem
            discount="25%"
            imgSrc="img/pro-aksesoris.jpg"
            title="Padlock Necklace"
            rating="4.5"
            price="Rp 45.000,00"
          />
          <ProductItem
            discount="25%"
            imgSrc="img/pro-aksesoris.jpg"
            title="Padlock Necklace"
            rating="4.5"
            price="Rp 45.000,00"
          />
          <ProductItem
            discount="25%"
            imgSrc="img/pro-aksesoris.jpg"
            title="Padlock Necklace"
            rating="4.5"
            pr1ice="Rp 45.000,00"
          />
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

const ProductItem = ({ imgSrc, title, rating, price, discount }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => prev - 1);

  return (
    <div className="relative w-60 flex-shrink-0 rounded-md shadow-md overflow-hidden bg-white">
      {/* Discount Badge */}
      <span className="absolute text-center top-5 left-5 bg-gray-100 text-black text-xs font-semibold px-2 py-2 rounded-full">
        {discount}
      </span>

      {/* Heart Icon */}
      <a
        href="#"
        className="w-8 text-center absolute top-5 right-5 bg-gray-100 text-black text-xs font-semibold px-2 py-2 rounded-full"
      >
        <i className="bi bi-heart" style={{ fontSize: "10px" }}></i>
      </a>

      {/* Product Image */}
      <figure>
        <a href="/detail" title={title}>
          <img
            src={imgSrc}
            className="w-56 h-56 m-2 rounded-md object-cover"
            alt={title}
          />
        </a>
      </figure>

      {/* Product Info */}
      <div className="pt-1 pb-2 pl-5 pr-2 leading-6">
        <h3 className="mt-2 text-lg font-semibold leading-7 text-gray-800">
          {title}
        </h3>
        <div className="pt-1 flex items-center space-x-2">
          <div className="flex text-sm items-center text-yellow-500">
            <i
              className="bi bi-star-fill inline-block mr-1"
              style={{ fontSize: "10px" }}
            ></i>
            <span>{rating}</span>
          </div>
        </div>

        {/* Price */}
        <span className="block text-lg mb-3 font-bold text-gray-900">{price}</span>
      </div>

      {/* Quantity & Cart Actions */}
      {/* <div className="flex items-center justify-between px-3 pb-3">
        <div className="flex items-center">
          <button
            type="button"
            onClick={decreaseQuantity}
            className="px-1 py-1 w-5 text-red-500 hover:bg-red-100 rounded-full-sm"
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-8 text-center border-none outline-none"
          />
          <button
            type="button"
            onClick={increaseQuantity}
            className="px-1 py-1 text-green-500 hover:bg-green-100 rounded-full-sm"
          >
            +
          </button>
        </div>

        <a
          href="#"
          className="text-gray-500 hover:text-gray-700 text-sm flex items-center"
        >
          Add to Cart
          <iconify-icon icon="uil:shopping-cart" className="ml-2"></iconify-icon>
        </a>
      </div> */}
    </div>
  );
};

export default AksesorisCategory;
