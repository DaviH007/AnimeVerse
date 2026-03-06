import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoCard from '@/components/VideoCard';
import { getTrendingVideos } from '@/data/animes';

const TrendingClips = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trendingVideos = getTrendingVideos();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-10"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Clips <span className="text-gradient-gold">Populares</span>
              </h2>
              <p className="text-white/50 text-sm mt-1">
                Os momentos mais assistidos da semana
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Scroll Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Rolar esquerda"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Rolar direita"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <Link
              to="/videos"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-purple-400 hover:text-purple-300 font-medium transition-colors group"
            >
              Ver Todos
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Videos Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 lg:gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
        >
          {trendingVideos.map((video, index) => (
            <div key={video.id} className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px]">
              <VideoCard video={video} index={index} />
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            to="/videos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/20 text-purple-400 rounded-xl font-medium border border-purple-500/30"
          >
            Ver Todos os Vídeos
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingClips;
