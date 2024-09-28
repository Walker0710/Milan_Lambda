import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BACKEND_URL = 'http://localhost:5000';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get( BACKEND_URL + '/api/auth/profile', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setUser(response.data);
    };

    fetchProfile();
  }, []);

  if (!user) return <div>Loading...</div>;

  const winPer = (user.wins / (user.completed)) * 100;

  return (
    <div className='profile-all'>
      <div className='profile-upper'>
        <h1 className='profile-heading'>Statistics</h1>
        <div className='profile-content'>
          <div className='profile-user'>
            <h1 className='profile-username'>{user.username}</h1>
            <p className='profile-email'>{user.email}</p>
          </div>
          <div className='profile-stats'>
            <p className='profile-stats-detail'>Win Percentage : {winPer.toFixed(2)}%</p>
            <p className='profile-stats-detail'>Streak : {user.streak}</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Profile;
