import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import Lambda from './component/LambdaQuiz';
import Infero from './component/InferoQuiz';
import Leaderboard from './component/Leaderboard';
import Profile from './component/Profile';

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
        <Route path='/leaderboard' exact element={<Leaderboard />} />
        <Route path='/profile' exact element={<Profile />} />
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
