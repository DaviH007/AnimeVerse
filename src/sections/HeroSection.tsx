import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Info, ChevronLeft, ChevronRight, Star, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { animes } from '@/data/animes';

const featuredAnimes = animes.slice(0, 4);

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredAnimes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentAnime = featuredAnimes[currentIndex];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredAnimes.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredAnimes.length) % featuredAnimes.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentAnime.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={currentAnime.bannerImage}
            alt={currentAnime.name}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentAnime.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badges */}
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600/30 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                  <TrendingUp className="w-4 h-4" />
                  Em Destaque
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white/80 rounded-full text-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  {currentAnime.rating}
                </span>
                <span className="px-3 py-1.5 bg-white/10 text-white/80 rounded-full text-sm">
                  {currentAnime.year}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {currentAnime.name}
              </h1>

              {/* Genres */}
              <div className="flex flex-wrap gap-2 mb-4">
                {currentAnime.genre.map((g) => (
                  <span
                    key={g}
                    className="px-3 py-1 text-sm bg-white/10 text-white/70 rounded-full"
                  >
                    {g}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-white/70 text-lg mb-8 line-clamp-3">
                {currentAnime.synopsis}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to={`/anime/${currentAnime.id}`}
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/30"
                >
                  <Play className="w-5 h-5 fill-white" />
                  Assistir Clips
                </Link>
                <Link
                  to={`/anime/${currentAnime.id}`}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300"
                >
                  <Info className="w-5 h-5" />
                  Mais Informações
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all z-10"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all z-10"
        aria-label="Próximo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {featuredAnimes.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-2 bg-purple-500'
                : 'w-2 h-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Preview */}
      <div className="absolute bottom-8 right-8 hidden xl:flex items-center gap-3">
        {featuredAnimes.map((anime, index) => (
          <button
            key={anime.id}
            onClick={() => goToSlide(index)}
            className={`relative w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex
                ? 'ring-2 ring-purple-500 scale-110'
                : 'opacity-50 hover:opacity-80'
            }`}
          >
            <img
              src={anime.coverImage}
              alt={anime.name}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
