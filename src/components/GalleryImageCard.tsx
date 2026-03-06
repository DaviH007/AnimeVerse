import { useState } from 'react';
import { Heart, Expand } from 'lucide-react';
import { motion } from 'framer-motion';
import type { GalleryImage } from '@/data/animes';
import { getAnimeById } from '@/data/animes';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

interface GalleryImageCardProps {
  image: GalleryImage;
  index?: number;
}

const GalleryImageCard = ({ image, index = 0 }: GalleryImageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [likes, setLikes] = useState(image.likes);
  const [isLiked, setIsLiked] = useState(false);
  const anime = getAnimeById(image.animeId);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const formatLikes = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <Dialog>
        <DialogTrigger asChild>
          <div 
            className="relative overflow-hidden rounded-xl cursor-pointer bg-[#0f0f14]"
            style={{ aspectRatio: '16/10' }}
          >
            <img
              src={image.imageUrl}
              alt={image.description}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                isHovered ? 'scale-110 brightness-75' : 'scale-100'
              }`}
              loading="lazy"
            />
            
            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            />

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-3 left-3 right-3 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg backdrop-blur-sm transition-all ${
                    isLiked 
                      ? 'bg-red-500/20 text-red-400' 
                      : 'bg-black/50 text-white/70 hover:bg-black/70'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-400' : ''}`} />
                  <span className="text-xs font-medium">{formatLikes(likes)}</span>
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white/70 hover:text-white hover:bg-black/70 transition-all">
                  <Expand className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <span className={`px-2 py-1 text-xs font-medium rounded-lg backdrop-blur-sm ${
                image.category === 'official' 
                  ? 'bg-purple-500/30 text-purple-300 border border-purple-500/30'
                  : image.category === 'fanart'
                  ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-500/30'
                  : 'bg-white/10 text-white/70 border border-white/10'
              }`}>
                {image.category === 'official' ? 'Oficial' : image.category === 'fanart' ? 'Fanart' : 'Screenshot'}
              </span>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="max-w-5xl w-full bg-[#0a0a0f] border-white/10 p-0 overflow-hidden">
          <div className="relative">
            <img
              src={image.imageUrl}
              alt={image.description}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-white font-medium">{image.description}</p>
              {anime && (
                <p className="text-white/60 text-sm mt-1">{anime.name}</p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Info below image */}
      <div className="mt-2">
        <p className="text-white/80 text-sm line-clamp-1">{image.description}</p>
        {anime && (
          <p className="text-white/40 text-xs mt-0.5">{anime.name}</p>
        )}
      </div>
    </motion.div>
  );
};

export default GalleryImageCard;
