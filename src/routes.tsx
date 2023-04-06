import { Routes, Route } from 'react-router-dom';

import SignupModal from './pages/Signup';
import Home from './pages/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignupModal />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
