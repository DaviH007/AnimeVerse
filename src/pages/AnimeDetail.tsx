import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Star, Calendar, Film, Quote, Sparkles, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { getAnimeById, getVideosByAnimeId, getImagesByAnimeId } from '@/data/animes';
import VideoCard from '@/components/VideoCard';
import GalleryImageCard from '@/components/GalleryImageCard';

const AnimeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const anime = getAnimeById(id || '');
  const videos = getVideosByAnimeId(id || '');
  const images = getImagesByAnimeId(id || '');

  if (!anime) {
    return (
      <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Anime não encontrado</h1>
          <Link to="/animes" className="text-purple-400 hover:text-purple-300">
            Voltar para lista de animes
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Banner */}
      <section className="relative h-[50vh] lg:h-[60vh] min-h-[400px]">
        <img
          src={anime.bannerImage}
          alt={anime.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/80 to-transparent" />
        
        {/* Back Button */}
        <Link
          to="/animes"
          className="absolute top-24 left-4 lg:left-8 z-10 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg text-white/70 hover:text-white hover:bg-black/70 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm border border-purple-500/30">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {anime.rating}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                  <Calendar className="w-4 h-4" />
                  {anime.year}
                </span>
                <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                  {anime.episodes} episódios
                </span>
                <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                  {anime.status}
                </span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                {anime.name}
              </h1>

              {/* Genres */}
              <div className="flex flex-wrap gap-2 mb-6">
                {anime.genre.map((g) => (
                  <span
                    key={g}
                    className="px-3 py-1 text-sm bg-white/10 text-white/70 rounded-full"
                  >
                    {g}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to={`/videos?anime=${anime.id}`}
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all"
                >
                  <Play className="w-5 h-5 fill-white" />
                  Assistir Clips
                </Link>
                <span className="text-white/50 text-sm">
                  Studio: <span className="text-white">{anime.studio}</span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Synopsis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Sinopse</h2>
            </div>
            <div className="p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-white/70 text-lg leading-relaxed">
                {anime.synopsis}
              </p>
            </div>
          </motion.div>

          {/* Videos Section */}
          {videos.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <Film className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Clips</h2>
                </div>
                <Link
                  to={`/videos?anime=${anime.id}`}
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  Ver todos
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {videos.map((video, index) => (
                  <VideoCard key={video.id} video={video} index={index} showAnimeName={false} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Gallery Section */}
          {images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Galeria</h2>
                </div>
                <Link
                  to={`/gallery?anime=${anime.id}`}
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  Ver todas
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {images.map((image, index) => (
                  <GalleryImageCard key={image.id} image={image} index={index} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Quotes Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <Quote className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Quotes Icônicos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {anime.quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-purple-600/10 to-cyan-500/10 border border-white/10"
                >
                  <Quote className="w-6 h-6 text-purple-400 mb-3" />
                  <p className="text-white/80 italic">"{quote}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Iconic Moments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Momentos Icônicos</h2>
            </div>
            <div className="space-y-3">
              {anime.iconicMoments.map((moment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-600/30 text-purple-300 text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-white/80">{moment}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AnimeDetail;
