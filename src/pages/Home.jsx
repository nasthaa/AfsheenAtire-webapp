import React, { useRef } from 'react';
import BannerSection from '../components/BannerSection';
import CategorySection from '../components/CategorySection';
import HijabCategory from '../components/HijabCategory';
import PakaianCategory from '../components/PakaianCategory';
import SepatuCategory from '../components/SepatuCategory';
import TasCategory from '../components/TasCategory';
import AksesorisCategory from '../components/AksesorisCategory';

const Home = () => {
  // Membuat ref untuk CartSection
  const cartRef = useRef(null);

  // Fungsi untuk scroll ke CartSection
  const scrollToCart = () => {
    if (cartRef.current) {
      cartRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <BannerSection />
      <CategorySection scrollToCart={scrollToCart} />
      <div ref={cartRef}>
        <HijabCategory />
        <PakaianCategory />
        <SepatuCategory />
        <TasCategory />
        <AksesorisCategory />
      </div>
      {/* Tambahkan konten lainnya di sini */}
    </div>
  );
};

export default Home;
