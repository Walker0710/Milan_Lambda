import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  
  useEffect(() => {
    const fetchLeaderboard = async () => {
      const res = await axios.get('http://localhost:5000/api/leaderboard');
      setLeaderboard(res.data);
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((user, index) => (
          <li key={user._id}>
            {index + 1}. {user.username} - {user.answers} Correct Answers
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
