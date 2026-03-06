import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Film, Image as ImageIcon, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { animes, videos, galleryImages, getAnimeById } from '@/data/animes';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [activeTab, setActiveTab] = useState<'all' | 'animes' | 'videos' | 'images'>('all');

  // Search results
  const animeResults = animes.filter(
    (anime) =>
      anime.name.toLowerCase().includes(query.toLowerCase()) ||
      anime.description.toLowerCase().includes(query.toLowerCase()) ||
      anime.genre.some((g) => g.toLowerCase().includes(query.toLowerCase()))
  );

  const videoResults = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(query.toLowerCase()) ||
      video.description.toLowerCase().includes(query.toLowerCase())
  );

  const imageResults = galleryImages.filter((image) =>
    image.description.toLowerCase().includes(query.toLowerCase())
  );

  const totalResults = animeResults.length + videoResults.length + imageResults.length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [query]);

  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  if (!query) {
    return (
      <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
            <Search className="w-10 h-10 text-white/30" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Busque algo</h1>
          <p className="text-white/50">Digite um termo para encontrar animes, vídeos e imagens</p>
        </div>
      </main>
    );
  }

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
            Resultados para <span className="text-gradient">"{query}"</span>
          </h1>
          <p className="text-white/50">
            {totalResults} {totalResults === 1 ? 'resultado encontrado' : 'resultados encontrados'}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 overflow-x-auto scrollbar-hide mb-8"
        >
          {[
            { id: 'all', label: 'Todos', count: totalResults },
            { id: 'animes', label: 'Animes', count: animeResults.length },
            { id: 'videos', label: 'Vídeos', count: videoResults.length },
            { id: 'images', label: 'Imagens', count: imageResults.length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.label}
              <span
                className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-white/10'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Results */}
        <div className="space-y-12">
          {/* Animes */}
          {(activeTab === 'all' || activeTab === 'animes') && animeResults.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <h2 className="text-xl font-bold text-white">Animes</h2>
                </div>
                {activeTab === 'all' && animeResults.length > 4 && (
                  <button
                    onClick={() => setActiveTab('animes')}
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                  >
                    Ver todos
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {animeResults
                  .slice(0, activeTab === 'all' ? 4 : undefined)
                  .map((anime, index) => (
                    <Link
                      key={anime.id}
                      to={`/anime/${anime.id}`}
                      className="group"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#0f0f14]"
                      >
                        <img
                          src={anime.coverImage}
                          alt={anime.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                            {anime.name}
                          </h3>
                          <p className="text-white/50 text-sm">{anime.year}</p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
              </div>
            </motion.section>
          )}

          {/* Videos */}
          {(activeTab === 'all' || activeTab === 'videos') && videoResults.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Film className="w-5 h-5 text-orange-400" />
                  <h2 className="text-xl font-bold text-white">Vídeos</h2>
                </div>
                {activeTab === 'all' && videoResults.length > 4 && (
                  <button
                    onClick={() => setActiveTab('videos')}
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                  >
                    Ver todos
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {videoResults
                  .slice(0, activeTab === 'all' ? 4 : undefined)
                  .map((video, index) => {
                    const anime = getAnimeById(video.animeId);
                    return (
                      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group cursor-pointer"
                      >
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0f0f14]">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded-md text-xs text-white">
                            {video.duration}
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                              <Film className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <h3 className="text-white font-semibold text-sm line-clamp-2 group-hover:text-purple-300 transition-colors">
                            {video.title}
                          </h3>
                          {anime && (
                            <p className="text-white/50 text-xs mt-1">{anime.name}</p>
                          )}
                          <p className="text-white/40 text-xs mt-1">
                            {formatViews(video.views)} visualizações
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            </motion.section>
          )}

          {/* Images */}
          {(activeTab === 'all' || activeTab === 'images') && imageResults.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <ImageIcon className="w-5 h-5 text-cyan-400" />
                  <h2 className="text-xl font-bold text-white">Imagens</h2>
                </div>
                {activeTab === 'all' && imageResults.length > 4 && (
                  <button
                    onClick={() => setActiveTab('images')}
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                  >
                    Ver todas
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {imageResults
                  .slice(0, activeTab === 'all' ? 4 : undefined)
                  .map((image, index) => {
                    const anime = getAnimeById(image.animeId);
                    return (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group cursor-pointer"
                      >
                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#0f0f14]">
                          <img
                            src={image.imageUrl}
                            alt={image.description}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="mt-2">
                          <p className="text-white/80 text-sm line-clamp-1">
                            {image.description}
                          </p>
                          {anime && (
                            <p className="text-white/40 text-xs mt-0.5">{anime.name}</p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            </motion.section>
          )}
        </div>

        {/* No Results */}
        {totalResults === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
              <Search className="w-10 h-10 text-white/30" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Nenhum resultado encontrado
            </h3>
            <p className="text-white/50 mb-6">
              Tente buscar por outro termo
            </p>
            <Link
              to="/animes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors"
            >
              Explorar Animes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default SearchResults;
