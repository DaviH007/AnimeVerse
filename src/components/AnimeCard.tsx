import { Link } from 'react-router-dom';
import { Play, Star, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Anime } from '@/data/animes';

interface AnimeCardProps {
  anime: Anime;
  index?: number;
}

const AnimeCard = ({ anime, index = 0 }: AnimeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/anime/${anime.id}`} className="group block">
        <div className="anime-card relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#0f0f14]">
          {/* Image */}
          <img
            src={anime.coverImage}
            alt={anime.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          
          {/* Content */}
          <div className="absolute inset-0 p-4 flex flex-col justify-end">
            {/* Rating Badge */}
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg border border-white/10">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-semibold text-white">{anime.rating}</span>
            </div>

            {/* Play Button - Appears on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <motion.div
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-purple-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-purple-600/30"
              >
                <Play className="w-7 h-7 text-white fill-white ml-1" />
              </motion.div>
            </div>

            {/* Info */}
            <div className="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-bold text-white mb-1 line-clamp-1 group-hover:text-purple-300 transition-colors">
                {anime.name}
              </h3>
              
              <div className="flex items-center gap-3 text-white/60 text-xs mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {anime.year}
                </span>
                <span className="px-2 py-0.5 bg-white/10 rounded-full">
                  {anime.episodes} eps
                </span>
              </div>

              <p className="text-white/50 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {anime.description}
              </p>

              {/* Genres */}
              <div className="flex flex-wrap gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {anime.genre.slice(0, 2).map((g) => (
                  <span
                    key={g}
                    className="px-2 py-0.5 text-xs bg-purple-600/30 text-purple-300 rounded-full border border-purple-500/20"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default AnimeCard;
