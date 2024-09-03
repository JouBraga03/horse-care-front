import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Cavalo from './pages/Cavalo';
import Cliente from './pages/Cliente';
import Materiais from './pages/Materiais';

import { CavaloProvider } from './common/context/Cavalo';

const defaultRoutes = () => {
  return (
    <CavaloProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cavalo" element={<Cavalo />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/materiais" element={<Materiais />} />
      </Routes>
    </CavaloProvider>
  );
};

export default defaultRoutes;
