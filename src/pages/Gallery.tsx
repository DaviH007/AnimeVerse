import { useState } from 'react';
import { Search, Filter, Images, Grid3X3, LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';
import GalleryImageCard from '@/components/GalleryImageCard';
import { galleryImages, animes } from '@/data/animes';

type ViewMode = 'grid' | 'masonry';
type CategoryFilter = 'all' | 'official' | 'fanart' | 'screenshot';

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnime, setSelectedAnime] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<'likes' | 'newest'>('likes');

  // Filter images
  let filteredImages = galleryImages.filter((image) => {
    const matchesSearch =
      image.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAnime =
      selectedAnime === 'all' || image.animeId === selectedAnime;
    const matchesCategory =
      selectedCategory === 'all' || image.category === selectedCategory;
    return matchesSearch && matchesAnime && matchesCategory;
  });

  // Sort images
  filteredImages = [...filteredImages].sort((a, b) => {
    if (sortBy === 'likes') {
      return b.likes - a.likes;
    }
    return b.id.localeCompare(a.id);
  });

  const categoryLabels: Record<CategoryFilter, string> = {
    all: 'Todas',
    official: 'Oficial',
    fanart: 'Fanart',
    screenshot: 'Screenshots',
  };

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
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
              <Images className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white">
                Galeria <span className="text-gradient">Visual</span>
              </h1>
              <p className="text-white/50 mt-1">
                Explore imagens, screenshots e fanarts dos seus animes favoritos
              </p>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 mb-8"
        >
          {/* Search and Sort Row */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar imagens..."
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'likes' | 'newest')}
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-purple-500/50 lg:w-40"
            >
              <option value="likes">Mais curtidas</option>
              <option value="newest">Mais recentes</option>
            </select>

            {/* View Mode */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-all ${
                  viewMode === 'grid'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-3 rounded-xl transition-all ${
                  viewMode === 'masonry'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Anime Filter */}
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2">
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

          {/* Category Filter */}
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2">
            {(Object.keys(categoryLabels) as CategoryFilter[]).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-cyan-600 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-white/50 text-sm mb-6"
        >
          {filteredImages.length}{' '}
          {filteredImages.length === 1 ? 'imagem encontrada' : 'imagens encontradas'}
        </motion.p>

        {/* Image Grid */}
        {filteredImages.length > 0 ? (
          <div
            className={`grid gap-4 lg:gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            }`}
          >
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={
                  viewMode === 'masonry' && index % 5 === 0
                    ? 'md:col-span-2 md:row-span-2'
                    : ''
                }
              >
                <GalleryImageCard image={image} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
              <Images className="w-10 h-10 text-white/30" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Nenhuma imagem encontrada
            </h3>
            <p className="text-white/50">Tente ajustar seus filtros de busca</p>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default Gallery;
