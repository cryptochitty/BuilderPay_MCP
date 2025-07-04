import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewHome from './pages/NewHome';
import RegisterBuilder from './pages/RegisterBuilder';
import BuilderProfile from './pages/BuilderProfile';
import LoginBuilder from './pages/LoginBuilder';
import RegisterSupporter from './pages/SupporterRegister';
import LoginSupporter from './pages/LoginSupporter';
import BuilderList from './pages/BuilderList';
import BuilderDetail from './pages/BuilderDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/builder-profile/:id" element={<BuilderProfile />} />
        <Route path="/register-builder" element={<RegisterBuilder />} />
        <Route path="/login-builder" element={<LoginBuilder />} />
        <Route path="/supporter-register" element={<RegisterSupporter />} />
        <Route path="/login-supporter" element={<LoginSupporter />} />
        <Route path="/builder-list" element={<BuilderList />} />
        <Route path="/builder/:username" element={<BuilderDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
