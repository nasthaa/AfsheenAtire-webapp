// Import komponen Swiper dan gaya CSS Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Import gaya CSS Swiper

const MySwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50} // Jarak antar slide
      slidesPerView={1} // Jumlah slide yang ditampilkan per halaman
      loop={true} // Menambahkan loop pada slider
      pagination={{ clickable: true }} // Menambahkan pagination
      navigation={true} // Menambahkan tombol navigasi
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      {/* Tambahkan lebih banyak slide sesuai kebutuhan */}
    </Swiper>
  );
};

export default MySwiperComponent;
