import { useState } from 'react';
import { Search, SlidersHorizontal, Grid3X3, LayoutList, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimeCard from '@/components/AnimeCard';
import { animes } from '@/data/animes';

const Animes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get all unique genres
  const allGenres = Array.from(
    new Set(animes.flatMap((anime) => anime.genre))
  ).sort();

  // Filter animes
  const filteredAnimes = animes.filter((anime) => {
    const matchesSearch = anime.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesGenre =
      selectedGenre === 'all' || anime.genre.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

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
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white">
                Todos os <span className="text-gradient">Animes</span>
              </h1>
              <p className="text-white/50 mt-1">
                Explore nossa coleção de animes incríveis
              </p>
            </div>
          </div>
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
              placeholder="Buscar animes..."
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
          </div>

          {/* Genre Filter */}
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2 lg:pb-0">
            <SlidersHorizontal className="w-5 h-5 text-white/40 flex-shrink-0" />
            <button
              onClick={() => setSelectedGenre('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                selectedGenre === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              Todos
            </button>
            {allGenres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  selectedGenre === genre
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          {/* View Mode */}
          <div className="flex items-center gap-2 lg:ml-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
              }`}
              aria-label="Visualização em grade"
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-lg transition-all ${
                viewMode === 'list'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
              }`}
              aria-label="Visualização em lista"
            >
              <LayoutList className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-white/50 text-sm mb-6"
        >
          {filteredAnimes.length} {filteredAnimes.length === 1 ? 'anime encontrado' : 'animes encontrados'}
        </motion.p>

        {/* Anime Grid/List */}
        {filteredAnimes.length > 0 ? (
          <div
            className={`grid gap-4 lg:gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                : 'grid-cols-1'
            }`}
          >
            {filteredAnimes.map((anime, index) => (
              <AnimeCard key={anime.id} anime={anime} index={index} />
            ))}
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
              Nenhum anime encontrado
            </h3>
            <p className="text-white/50">
              Tente ajustar seus filtros de busca
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default Animes;
