import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the College Quiz Portal</h1>
      <div className="club-buttons">
        <Link to="/lambda">
          <button>Lambda</button>
        </Link>
        <Link to="/infero">
          <button>Infero</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
