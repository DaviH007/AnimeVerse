import HeroSection from '@/sections/HeroSection';
import FeaturedAnimes from '@/sections/FeaturedAnimes';
import TrendingClips from '@/sections/TrendingClips';
import GalleryPreview from '@/sections/GalleryPreview';

const Home = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <HeroSection />
      <FeaturedAnimes />
      <TrendingClips />
      <GalleryPreview />
    </main>
  );
};

export default Home;
