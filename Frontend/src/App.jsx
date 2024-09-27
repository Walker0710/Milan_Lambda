import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home/Home';
import Lambda from './pages/Lambda/Lambda';
import Infero from './pages/Infero/Infero';

import './App.css';

function AppContent() {

  return (
    <>
      <Routes>
        <Route path='/login' exact element={<Login />} />
        <Route path='/' exact element={<Register />} />
        <Route path='/home' exact element={<Home />} />
        <Route path='/lambda' exact element={<Lambda />} />
        <Route path='/infero' exact element={<Infero />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
