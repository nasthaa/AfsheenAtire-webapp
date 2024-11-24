import React, { useState, useEffect } from "react";

const BannerSection = () => {
  const slides = [
    {
      sub: "Koleksi Hijab & Fashion Sederhana",
      title: "Elegan & Modest",
      description:
        "Temukan tren terbaru dalam fashion hijab dan pakaian sederhana. Tingkatkan gaya Anda dengan koleksi kami yang terkurasi.",
      image: "img/ban-outfit.jpg",
    },
    {
      sub: "Koleksi Hijab Modern",
      title: "Koleksi Hijab Modern",
      description:
        "Jelajahi koleksi hijab terbaru kami yang dirancang dengan gaya modern dan bahan berkualitas tinggi. Temukan kenyamanan dan elegansi dalam setiap pilihan.",
      image: "img/ban-hijab.jpg",
    },
    {
      sub: "Lengkapi Gaya Anda dengan Aksesoris Cantik",
      title: "Aksesoris Hijab Eksklusif",
      description:
        "Jelajahi koleksi aksesoris hijab kami yang elegan dan praktis. Temukan tas, bros, dan aksesori lainnya yang sempurna untuk melengkapi penampilan Anda.",
      image: "img/ban-aksesoris.jpg",
    },
  ];

  const totalSlides = slides.length;
  const extendedSlides = [
    slides[totalSlides - 1], // clone slide terakhir ke awal
    ...slides,
    slides[0], // clone slide pertama ke akhir
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // mulai dari slide pertama (indeks 1 pada `extendedSlides`)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);

  const handleNextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
  
      // reset otomatis scroll saat user melakukan klik manual
      setAutoScroll(false); 
      setTimeout(() => setAutoScroll(true), 1000); // ubah ke 5 detik
    }
  };
  
  const handlePrevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
  
      // reset otomatis scroll saat user melakukan klik manual
      setAutoScroll(false); 
      setTimeout(() => setAutoScroll(true), 1000); // Ubah ke 5 detik
    }
  };
  

  useEffect(() => {
    if (isTransitioning) {
      const transitionEndHandler = setTimeout(() => {
        setIsTransitioning(false);

        // atur ulang posisi slide jika mencapai ujung
        if (currentIndex === 0) {
          setCurrentIndex(totalSlides); // ulangi dari slide terakhir
        } else if (currentIndex === totalSlides + 1) {
          setCurrentIndex(1); // ulangi dari slide pertama
        }
      }, 700); // durasi transisi harus sesuai dengan CSS (700ms)

      return () => clearTimeout(transitionEndHandler);
    }
  }, [currentIndex, isTransitioning, totalSlides]);

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        handleNextSlide(); // panggil fungsi untuk slide berikutnya
      }, 5000); // ubah ke 5 detik
      return () => clearInterval(interval); // bersihkan interval pada unmount
    }
  }, [autoScroll, currentIndex]); // jalankan ulang jika `autoScroll` atau `currentIndex` berubah
  
  return (
    <section className="relative py-8">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('img/pattern.jpg')" }}
      />
      <div className="relative container mx-auto px-5 z-10">
        <div className="flex flex-col gap-8">
          {/* main carousel */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <div
              className={`flex ${
                isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
              }`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {extendedSlides.map((slide, index) => (
                <div
                  className="min-w-full flex flex-col md:flex-row items-center p-5 gap-8"
                  key={index}
                >
                  <div className="flex-1 px-10">
                    <div className="categories text-gray-600 font-bold uppercase mb-4">
                      {slide.sub}
                    </div>
                    <h3 className="text-4xl font-bold text-gray-800 mb-4 leading-7">
                      {slide.title}
                    </h3>
                    <p className="text-gray-600 mb-5 leading-7">
                      {slide.description}
                    </p>
                    <a
                      href="#"
                      className="btn bg-black hover:bg-gray-800 text-white uppercase text-sm rounded-lg px-6 py-3 transition-all"
                    >
                      Shop Now
                    </a>
                  </div>
                  <div className="flex-1 px-10">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-auto rounded-lg shadow-md object-cover aspect-square"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* navigation buttons */}
            <button
              onClick={handlePrevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black text-white rounded-full p-3 mx-2 hover:bg-gray-800"
            >
              &#8592;
            </button>
            <button
              onClick={handleNextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black text-white rounded-full p-3 mx-2 hover:bg-gray-800"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
