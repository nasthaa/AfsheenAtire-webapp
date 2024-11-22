import React from 'react';

const CartSection = () => {
  return (
    <section className="py-5 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between my-5">
          <h2 className="text-2xl font-bold">Best selling products</h2>
          <div className="flex items-center">
            <a href="#" className="text-blue-500 hover:underline">View All Categories →</a>
            <div className="flex space-x-2 ml-4">
              <button className="bg-blue-500 text-white px-2 py-1 rounded disabled:opacity-50" disabled>❮</button>
              <button className="bg-blue-500 text-white px-2 py-1 rounded">❯</button>
            </div>
          </div>
        </div>
        <div className="flex overflow-x-scroll space-x-4 gap-10 ">
          <ProductItem
            imgSrc="images/thumb-tomatoes.png"
            title="Sunstar Fresh Melon Juice"
            qty="1 Unit"
            rating="4.5"
            price="$18.00"
          />
          <ProductItem
            imgSrc="images/thumb-tomatoes.png"
            title="Sunstar Fresh Melon Juice"
            qty="1 Unit"
            rating="4.5"
            price="$18.00"
          />
          <ProductItem
            imgSrc="images/thumb-tomatoes.png"
            title="Sunstar Fresh Melon Juice"
            qty="1 Unit"
            rating="4.5"
            price="$18.00"
          />
          <ProductItem
            imgSrc="images/thumb-tomatoes.png"
            title="Sunstar Fresh Melon Juice"
            qty="1 Unit"
            rating="4.5"
            price="$18.00"
          />
          <ProductItem
            imgSrc="images/thumb-tomatoes.png"
            title="Sunstar Fresh Melon Juice"
            qty="1 Unit"
            rating="4.5"
            price="$18.00"
          />
          <ProductItem
            imgSrc="images/thumb-tomatoes.png"
            title="Sunstar Fresh Melon Juice"
            qty="1 Unit"
            rating="4.5"
            price="$18.00"
          />
          <ProductItem
            imgSrc="images/thumb-tomatoketchup.png"
            title="Sunstar Fresh Melon Juice"
            qty="1 Unit"
            rating="4.5"
            price="$18.00"
          />
          <ProductItem
            imgSrc="images/thumb-bananas.png"
            title="Sunstar Fresh Melon Juice"
            qty="1 Unit"
            rating="4.5"
            price="$18.00"
          />
          {/* Add more ProductItem components as needed */}
        </div>
      </div>
    </section>
  );
};

const ProductItem = ({ imgSrc, title, qty, rating, price }) => {
  return (
    <div className="relative w-60 flex-shrink-0">
      <span className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded">-15%</span>
      <a href="#" className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
        <svg width="24" height="24"><use xlinkHref="#heart"></use></svg>
      </a>
      <figure>
        <a href="index.html" title={title}>
          <img src={imgSrc} className="w-full h-40 object-cover" alt={title} />
        </a>
      </figure>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <span className="block text-gray-500">{qty}</span>
      <span className="block text-yellow-500">
        <svg width="24" height="24" className="inline-block"><use xlinkHref="#star-solid"></use></svg> {rating}
      </span>
      <span className="block text-lg font-bold">{price}</span>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center border rounded">
          <button type="button" className="px-2 py-1 text-red-500 hover:bg-red-100">
            <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
          </button>
          <input type="text" name="quantity" className="w-12 text-center border-none" defaultValue="1" />
          <button type="button" className="px-2 py-1 text-green-500 hover:bg-green-100">
            <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
          </button>
        </div>
        <a href="#" className="text-blue-500 hover:underline">Add to Cart <iconify-icon icon="uil:shopping-cart"></iconify-icon></a>
      </div>
    </div>
  );
};

export default CartSection;
