import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewHome from './pages/NewHome';
import RegisterBuilder from './pages/RegisterBuilder';
import BuilderProfile from './pages/BuilderProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/builder/:id" element={<BuilderProfile />} />
        <Route path="/register-builder" element={<RegisterBuilder />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;