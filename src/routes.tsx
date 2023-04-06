import { Routes, Route } from 'react-router-dom';
import SignupModal from './pages/Signup';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignupModal />} />
    </Routes>
  );
}
