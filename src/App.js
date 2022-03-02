import { Routes, Route } from 'react-router-dom'
import Splash from './pages/Splash';
import Welcome from './pages/Welcome';
import Login from './pages/Login'; 
import Register from './pages/Register'; 
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
