import { Link } from 'react-router-dom';
import { ChevronRight, Images } from 'lucide-react';
import { motion } from 'framer-motion';
import GalleryImageCard from '@/components/GalleryImageCard';
import { getPopularImages } from '@/data/animes';

const GalleryPreview = () => {
  const popularImages = getPopularImages();

  return (
    <section className="py-16 lg:py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-10"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
              <Images className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Galeria <span className="text-gradient">Visual</span>
              </h2>
              <p className="text-white/50 text-sm mt-1">
                Imagens e screenshots dos seus animes favoritos
              </p>
            </div>
          </div>
          
          <Link
            to="/gallery"
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-purple-400 hover:text-purple-300 font-medium transition-colors group"
          >
            Ver Galeria
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Image Grid - Masonry Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {popularImages.slice(0, 4).map((image, index) => (
            <div 
              key={image.id} 
              className={index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
            >
              <GalleryImageCard image={image} index={index} />
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/20 text-purple-400 rounded-xl font-medium border border-purple-500/30"
          >
            Ver Galeria Completa
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
