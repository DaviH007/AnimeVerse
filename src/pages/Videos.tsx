import { useState } from 'react';
import { Search, Filter, Play, Eye, Clock, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { videos, animes, getAnimeById } from '@/data/animes';

const Videos = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnime, setSelectedAnime] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'views' | 'newest'>('views');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  // Filter videos
  let filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAnime =
      selectedAnime === 'all' || video.animeId === selectedAnime;
    return matchesSearch && matchesAnime;
  });

  // Sort videos
  filteredVideos = [...filteredVideos].sort((a, b) => {
    if (sortBy === 'views') {
      return b.views - a.views;
    }
    return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
  });

  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  const currentVideo = playingVideo
    ? videos.find((v) => v.id === playingVideo)
    : null;
  const currentAnime = currentVideo
    ? getAnimeById(currentVideo.animeId)
    : null;

  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            Todos os <span className="text-gradient">Vídeos</span>
          </h1>
          <p className="text-white/50">
            Assista aos melhores clips e momentos dos seus animes favoritos
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col lg:flex-row gap-4 mb-8"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar vídeos..."
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
          </div>

          {/* Anime Filter */}
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2 lg:pb-0">
            <Filter className="w-5 h-5 text-white/40 flex-shrink-0" />
            <button
              onClick={() => setSelectedAnime('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                selectedAnime === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              Todos
            </button>
            {animes.map((anime) => (
              <button
                key={anime.id}
                onClick={() => setSelectedAnime(anime.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  selectedAnime === anime.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {anime.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'views' | 'newest')}
            className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-purple-500/50 lg:w-40"
          >
            <option value="views">Mais vistos</option>
            <option value="newest">Mais recentes</option>
          </select>
        </motion.div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-white/50 text-sm mb-6"
        >
          {filteredVideos.length}{' '}
          {filteredVideos.length === 1 ? 'vídeo encontrado' : 'vídeos encontrados'}
        </motion.p>

        {/* Video Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {filteredVideos.map((video, index) => {
              const anime = getAnimeById(video.animeId);
              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setPlayingVideo(video.id)}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0f0f14]">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Duration */}
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded-md text-xs font-medium text-white">
                      {video.duration}
                    </div>

                    {/* Views */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-black/60 rounded-md">
                      <Eye className="w-3.5 h-3.5 text-white/70" />
                      <span className="text-xs font-medium text-white">
                        {formatViews(video.views)}
                      </span>
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-600/40">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <h3 className="text-white font-semibold text-sm line-clamp-2 group-hover:text-purple-300 transition-colors">
                      {video.title}
                    </h3>
                    {anime && (
                      <p className="mt-1 text-white/50 text-xs">{anime.name}</p>
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
            })}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
              <Search className="w-10 h-10 text-white/30" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Nenhum vídeo encontrado
            </h3>
            <p className="text-white/50">Tente ajustar seus filtros de busca</p>
          </motion.div>
        )}
      </div>

      {/* Video Player Modal */}
      <AnimatePresence>
        {playingVideo && currentVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setPlayingVideo(null)}
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setPlayingVideo(null)}
                className="absolute -top-12 right-0 p-2 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Player */}
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
                <video
                  src={currentVideo.videoUrl}
                  poster={currentVideo.thumbnail}
                  controls
                  autoPlay
                  className="w-full h-full"
                />
              </div>

              {/* Video Info */}
              <div className="mt-4">
                <h2 className="text-xl font-bold text-white">{currentVideo.title}</h2>
                {currentAnime && (
                  <p className="text-purple-400 mt-1">{currentAnime.name}</p>
                )}
                <p className="text-white/60 text-sm mt-2">
                  {currentVideo.description}
                </p>
                <div className="flex items-center gap-4 mt-3 text-white/40 text-sm">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {formatViews(currentVideo.views)} visualizações
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {currentVideo.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Videos;
