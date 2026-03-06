import { Sparkles, Code, Heart, Zap, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: Zap,
      title: 'Alta Performance',
      description: 'Carregamento rápido e experiência fluida em todos os dispositivos.',
    },
    {
      icon: Shield,
      title: 'Design Moderno',
      description: 'Interface elegante com dark mode e animações suaves.',
    },
    {
      icon: Users,
      title: 'Conteúdo Curado',
      description: 'Os melhores clips e imagens dos animes mais populares.',
    },
  ];

  const techStack = [
    { name: 'React', description: 'Biblioteca JavaScript para interfaces' },
    { name: 'TypeScript', description: 'Tipagem estática para JavaScript' },
    { name: 'Tailwind CSS', description: 'Framework CSS utilitário' },
    { name: 'Framer Motion', description: 'Biblioteca de animações' },
    { name: 'shadcn/ui', description: 'Componentes UI reutilizáveis' },
    { name: 'Vite', description: 'Build tool ultrarrápida' },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Sobre o <span className="text-gradient">AnimeVerse</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Sua plataforma definitiva para explorar o mundo dos animes. 
            Descubra clips, imagens e momentos icônicos dos seus animes favoritos.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-600/10 to-cyan-500/10 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Nossa Missão</h2>
            <p className="text-white/70 leading-relaxed">
              O AnimeVerse foi criado com o objetivo de proporcionar uma experiência 
              imersiva e organizada para fãs de anime. Queremos que você possa explorar 
              seus animes favoritos de forma simples, descobrir novos conteúdos e 
              reviver os momentos mais épicos da cultura anime.
            </p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            O que oferecemos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Tecnologias</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                <p className="text-white/50 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animes Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Animes em Destaque
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Demon Slayer', color: 'from-red-500 to-orange-500' },
              { name: 'Solo Leveling', color: 'from-blue-500 to-cyan-500' },
              { name: 'Lord of the Mysteries', color: 'from-purple-500 to-pink-500' },
              { name: 'A Silent Voice', color: 'from-green-500 to-teal-500' },
            ].map((anime, index) => (
              <motion.div
                key={anime.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-4 rounded-xl bg-gradient-to-br ${anime.color} flex items-center justify-center`}
              >
                <span className="font-semibold text-white text-center text-sm">
                  {anime.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            <span className="text-white/70">
              Feito com amor para fãs de anime
            </span>
          </div>
          <p className="text-white/40 text-sm mt-6">
            © {new Date().getFullYear()} AnimeVerse. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default About;
