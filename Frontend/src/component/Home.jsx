import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to the Quiz Platform</h2>
      <div className="club-options">
        <Link to="/lambda">
          <button>Lambda Quiz</button>
        </Link>
        <Link to="/infero">
          <button>Infero Quiz</button>
        </Link>
        <Link to="/leaderboard">
          <button>Leaderboard</button>
        </Link>
        <Link to="/profile">
          <button>My Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
