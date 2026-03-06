import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Animes from '@/pages/Animes';
import AnimeDetail from '@/pages/AnimeDetail';
import Videos from '@/pages/Videos';
import Gallery from '@/pages/Gallery';
import About from '@/pages/About';
import Search from '@/pages/Search';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0f] text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animes" element={<Animes />} />
          <Route path="/anime/:id" element={<AnimeDetail />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
