import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Award, ChevronUp, ChevronDown, Minus } from 'lucide-react';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeFrame, setTimeFrame] = useState('weekly');

  useEffect(() => {
    // Simulating an API call to fetch leaderboard data
    const fetchLeaderboardData = async () => {
      setLoading(true);
      // Replace this with your actual API call
      const mockData = [
        { id: 1, username: "QuizMaster", score: 9800, rank: 1, change: 0 },
        { id: 2, username: "Brainiac", score: 9650, rank: 2, change: 2 },
        { id: 3, username: "Quizzer123", score: 9400, rank: 3, change: -1 },
        { id: 4, username: "TriviaKing", score: 9200, rank: 4, change: 1 },
        { id: 5, username: "KnowledgeQueen", score: 9000, rank: 5, change: -2 },
        { id: 6, username: "QuizWhiz", score: 8800, rank: 6, change: 0 },
        { id: 7, username: "BrainTeaser", score: 8600, rank: 7, change: 3 },
        { id: 8, username: "TriviaChamp", score: 8400, rank: 8, change: -1 },
        { id: 9, username: "QuizNinja", score: 8200, rank: 9, change: 1 },
        { id: 10, username: "MindBender", score: 8000, rank: 10, change: -1 },
      ];
      
      setTimeout(() => {
        setLeaderboardData(mockData);
        setLoading(false);
      }, 1000);
    };

    fetchLeaderboardData();
  }, [timeFrame]); // Refetch when timeFrame changes

  const getRankIcon = (rank) => {
    switch(rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return rank;
    }
  };

  const getChangeIcon = (change) => {
    if (change > 0) return <ChevronUp className="w-4 h-4 text-green-500" />;
    if (change < 0) return <ChevronDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-500" />;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Leaderboard</h1>
      
      <div className="flex justify-center mb-6">
        <div className="btn-group">
          <button 
            className={`btn ${timeFrame === 'daily' ? 'btn-active' : ''} w-20 mr-5`}
            onClick={() => setTimeFrame('daily')}
          >
            Daily
          </button>
          <button 
            className={`btn ${timeFrame === 'weekly' ? 'btn-active' : ''} w-20 mr-5`}
            onClick={() => setTimeFrame('weekly')}
          >
            Weekly
          </button>
          <button 
            className={`btn ${timeFrame === 'allTime' ? 'btn-active' : ''} w-24`}
            onClick={() => setTimeFrame('allTime')}
          >
            All Time
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Score</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((user) => (
              <tr key={user.id} className="hover">
                <td className="flex items-center">
                  {getRankIcon(user.rank)}
                </td>
                <td>{user.username}</td>
                <td>{user.score.toLocaleString()}</td>
                <td className="flex items-center">
                  {getChangeIcon(user.change)}
                  <span className={user.change > 0 ? 'text-green-500' : user.change < 0 ? 'text-red-500' : 'text-gray-500'}>
                    {Math.abs(user.change)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;