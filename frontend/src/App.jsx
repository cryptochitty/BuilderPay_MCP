import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewHome from './pages/NewHome';
import RegisterBuilder from './pages/RegisterBuilder';
import BuilderProfile from './pages/BuilderProfile';
import LoginBuilder from './pages/LoginBuilder';
import RegisterSupporter from './pages/SupporterRegister';
import LoginSupporter from './pages/LoginSupporter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/builder/:id" element={<BuilderProfile />} />
        <Route path="/register-builder" element={<RegisterBuilder />} />
        <Route path="/login-builder" element={<LoginBuilder />} />
        <Route path="/supporter-register" element={<RegisterSupporter />} />
        <Route path="/login-supporter" element={<LoginSupporter />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;