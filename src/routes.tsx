import { Routes, Route } from 'react-router-dom';

import SignupModal from './pages/Signup';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignupModal />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
