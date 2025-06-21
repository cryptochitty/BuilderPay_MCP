import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewHome from './pages/NewHome';
import BuilderProfile from './pages/BuilderProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/builder/:id" element={<BuilderProfile />} />
      </Routes>
    </Router>
  );
}

export default App;