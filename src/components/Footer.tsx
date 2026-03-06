import { Link } from 'react-router-dom';
import { Sparkles, Github, Twitter, Instagram, Youtube, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navegacao: [
      { label: 'Home', path: '/' },
      { label: 'Animes', path: '/animes' },
      { label: 'Vídeos', path: '/videos' },
      { label: 'Galeria', path: '/gallery' },
    ],
    animes: [
      { label: 'Demon Slayer', path: '/anime/demon-slayer' },
      { label: 'Solo Leveling', path: '/anime/solo-leveling' },
      { label: 'Lord of the Mysteries', path: '/anime/lord-of-the-mysteries' },
      { label: 'A Silent Voice', path: '/anime/a-silent-voice' },
    ],
    suporte: [
      { label: 'Sobre', path: '/about' },
      { label: 'Contato', path: '/contact' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Termos de Uso', path: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-[#050508] border-t border-white/5">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Anime<span className="text-gradient">Verse</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Sua plataforma definitiva para explorar o mundo dos animes. 
              Descubra clips, imagens e momentos icônicos dos seus animes favoritos.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2.5">
              {footerLinks.navegacao.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Animes</h3>
            <ul className="space-y-2.5">
              {footerLinks.animes.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2.5">
              {footerLinks.suporte.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center sm:text-left">
              © {currentYear} AnimeVerse. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1.5 text-white/40 text-sm">
              Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> para fãs de anime
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
