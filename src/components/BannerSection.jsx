import React from "react";

const BannerSection = () => {
  return (
    <section
      className="py-8 bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('images/background-pattern.jpg')" }}
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-8">
          {/* Main Carousel */}
          <div className="carousel slide rounded-lg shadow-lg overflow-hidden" id="carouselExample" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* Carousel Item 1 */}
              <div className="carousel-item active">
                <div className="flex flex-col md:flex-row items-center p-5 gap-8">
                  <div className="flex-1">
                    <div className="categories text-green-600 font-bold uppercase mb-4">
                      100% natural
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">
                      Fresh Smoothie & Summer Juice
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dignissim massa diam elementum.
                    </p>
                    <a
                      href="#"
                      className="btn bg-blue-600 hover:bg-blue-700 text-white uppercase text-sm rounded-lg px-6 py-3 transition-all"
                    >
                      Shop Now
                    </a>
                  </div>
                  <div className="flex-1">
                    <img
                      src="images/product-thumb-1.png"
                      alt="Product"
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Carousel Item 2 */}
              <div className="carousel-item">
                <div className="flex flex-col md:flex-row items-center p-5 gap-8">
                  <div className="flex-1">
                    <div className="categories text-green-600 font-bold uppercase mb-4">
                      100% natural
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">
                      Heinz Tomato Ketchup
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dignissim massa diam elementum.
                    </p>
                    <a
                      href="#"
                      className="btn bg-blue-600 hover:bg-blue-700 text-white uppercase text-sm rounded-lg px-6 py-3 transition-all"
                    >
                      Shop Collection
                    </a>
                  </div>
                  <div className="flex-1">
                    <img
                      src="images/product-thumb-2.png"
                      alt="Product"
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Secondary Banner Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Block 1 */}
            <div
              className="banner-ad bg-green-100 p-6 rounded-lg flex items-center justify-between shadow-md"
              style={{
                backgroundImage: "url('images/ad-image-1.png')",
                backgroundPosition: "right bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <div>
                <div className="categories text-red-600 font-bold uppercase mb-3">
                  20% off
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Fruits & Vegetables
                </h3>
                <a
                  href="#"
                  className="text-blue-600 flex items-center font-semibold"
                >
                  Shop Collection
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="ml-2"
                  >
                    <path d="M12 2l8 8-8 8V9.8H2V7.2h10z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Block 2 */}
            <div
              className="banner-ad bg-red-100 p-6 rounded-lg flex items-center justify-between shadow-md"
              style={{
                backgroundImage: "url('images/ad-image-2.png')",
                backgroundPosition: "right bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <div>
                <div className="categories text-red-600 font-bold uppercase mb-3">
                  15% off
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Baked Products
                </h3>
                <a
                  href="#"
                  className="text-blue-600 flex items-center font-semibold"
                >
                  Shop Collection
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="ml-2"
                  >
                    <path d="M12 2l8 8-8 8V9.8H2V7.2h10z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
