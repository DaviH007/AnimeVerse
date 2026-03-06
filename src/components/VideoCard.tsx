import { useState } from 'react';
import { Play, Eye, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Video } from '@/data/animes';
import { getAnimeById } from '@/data/animes';

interface VideoCardProps {
  video: Video;
  index?: number;
  showAnimeName?: boolean;
}

const VideoCard = ({ video, index = 0, showAnimeName = true }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const anime = getAnimeById(video.animeId);

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    }
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0f0f14] cursor-pointer">
        {/* Thumbnail */}
        <img
          src={video.thumbnail}
          alt={video.title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'scale-110 brightness-75' : 'scale-100'
          }`}
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-sm rounded-md text-xs font-medium text-white">
          {video.duration}
        </div>

        {/* Views Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md">
          <Eye className="w-3.5 h-3.5 text-white/70" />
          <span className="text-xs font-medium text-white">{formatViews(video.views)}</span>
        </div>

        {/* Play Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            scale: isHovered ? 1 : 0.8 
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-600/40">
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          </div>
        </motion.div>
      </div>

      {/* Info */}
      <div className="mt-3">
        <h3 className="text-white font-semibold text-sm line-clamp-2 group-hover:text-purple-300 transition-colors">
          {video.title}
        </h3>
        
        {showAnimeName && anime && (
          <p className="mt-1 text-white/50 text-xs">
            {anime.name}
          </p>
        )}
        
        <div className="flex items-center gap-3 mt-2 text-white/40 text-xs">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {new Date(video.uploadDate).toLocaleDateString('pt-BR')}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
