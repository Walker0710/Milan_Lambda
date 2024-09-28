import React, { useState, useEffect } from 'react';
import { User, Award, Brain, Clock, Trophy, BarChart2 } from 'lucide-react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call to fetch user data
    const fetchUserData = async () => {
      setLoading(true);
      // Replace this with your actual API call
      const mockUser = {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        joinDate: "2024-01-15",
        quizzesTaken: 42,
        averageScore: 78,
        highestScore: 95,
        totalPoints: 3280,
        rank: "Quiz Master",
        recentActivity: [
          { id: 1, type: "quiz", name: "Infero", score: 85, date: "2024-09-24" },
          { id: 2, type: "achievement", name: "5 Day Streak", date: "2024-09-23" },
          { id: 3, type: "quiz", name: "NLP with Epoch", score: 92, date: "2024-09-22" },
        ]
      };
      
      setTimeout(() => {
        setUser(mockUser);
        setLoading(false);
      }, 1000);
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 -z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* User Info Card */}
        <div className="card bg-base-100 shadow-xl border border-black-500">
          <div className="card-body">
            <div className="flex items-center mb-4">
              <div className="avatar placeholder mr-4">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                  <span className="text-3xl">{user.name.charAt(0)}</span>
                </div>
              </div>
              <div>
                <h2 className="card-title">{user.name}</h2>
                <p className="text-sm opacity-70">{user.email}</p>
                <p className="text-sm opacity-70">Joined: {user.joinDate}</p>
              </div>
            </div>
            <div className="badge badge-primary">{user.rank}</div>
          </div>
        </div>

        {/* Quiz Stats Card */}
        <div className="card bg-base-100 shadow-xl md:col-span-2 border border-black-500 -z-10">
          <div className="card-body">
            <h3 className="card-title">Quiz Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <Brain className="w-8 h-8 hidden sm:flex" />
                </div>
                <div className="stat-title ">Quizzes Taken</div>
                <div className="stat-value">{user.quizzesTaken}</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <BarChart2 className="w-8 h-8 hidden sm:flex" />
                </div>
                <div className="stat-title">Average Score</div>
                <div className="stat-value">{user.averageScore}%</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <Trophy className="w-8 h-8 hidden sm:flex" />
                </div>
                <div className="stat-title">Highest Score</div>
                <div className="stat-value">{user.highestScore}%</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <Award className="w-8 h-8 hidden sm:flex" />
                </div>
                <div className="stat-title">Total Points</div>
                <div className="stat-value">{user.totalPoints}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Card */}
        <div className="card bg-base-100 shadow-xl md:col-span-3 border border-black-500 -z-10">
          <div className="card-body">
            <h3 className="card-title">Recent Activity</h3>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {user.recentActivity.map((activity) => (
                    <tr key={activity.id}>
                      <td>{activity.type === 'quiz' ? '📝' : '🏆'} {activity.type}</td>
                      <td>{activity.name}</td>
                      <td>{activity.score || '-'}</td>
                      <td>{activity.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;