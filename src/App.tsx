import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import HeroSection from './Components/HeroSection';
import Tokenomics from './Components/Tokenomics';
import Roadmap from './Components/Roadmap';
import AboutSection from './Components/AboutSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<HeroSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </Router>
  );
}

export default App;
