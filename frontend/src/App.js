import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BuilderProfile from './pages/BuilderProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder/:id" element={<BuilderProfile />} />
      </Routes>
    </Router>
  );
}

export default App;