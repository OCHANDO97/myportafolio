import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SobreMi from '../pages/SobreMi';
import Curriculum from '../pages/Curriculum';
import Portafolio from '../pages/Portafolio';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-mi" element={<SobreMi />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/portafolio" element={<Portafolio />} />
    </Routes>
  );
}
