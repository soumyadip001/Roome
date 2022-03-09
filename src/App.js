import { Routes, Route } from 'react-router-dom'
import Splash from './pages/Splash';
import Welcome from './pages/Welcome';
import Login from './pages/Login'; 
import Register from './pages/Register'; 
import Dashboard from './pages/Dashboard';
import Favourite from './pages/Favourite';

import Profile from './pages/Profile';
import ChangePassword from './pages/Profile/ChangePassword';
import ForgotPassword from './pages/Profile/ForgotPassword';
import Invite from './pages/Profile/Invite';
import Credits from './pages/Profile/Credits';
import Payment from './pages/Profile/Payment';
import Settings from './pages/Profile/Settings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/favourite" element={<Favourite />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/change-password" element={<ChangePassword />} />
      <Route path="/profile/forgot-password" element={<ForgotPassword />} />
      <Route path="/profile/invite" element={<Invite />} />
      <Route path="/profile/credits" element={<Credits />} />
      <Route path="/profile/payment" element={<Payment />} />
      <Route path="/profile/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
