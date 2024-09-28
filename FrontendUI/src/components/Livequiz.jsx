import React, { useState, useEffect } from 'react';
import { AlertCircle, Users, Clock } from 'lucide-react';

const LiveQuizzesSection = () => {
  const [liveQuizzes, setLiveQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLiveQuizzes = async () => {
      setLoading(true);
      const mockQuizzes = [
        { id: 1, title: "1998-B", participants: 45, timeRemaining: 1800, category: "Infero" },
        { id: 2, title: "7-day photo challenge", participants: 32, timeRemaining: 2400, category: "BTL" },
        { id: 3, title: "Web-3 challenge", participants: 28, timeRemaining: 1200, category: "Blockspace" },
      ];
      
      setTimeout(() => {
        setLiveQuizzes(mockQuizzes);
        setLoading(false);
      }, 1000);
    };

    fetchLiveQuizzes();
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 mt-10">Live Quizzes</h2>
      {liveQuizzes.length === 0 ? (
        <div className="alert alert-info">
          <AlertCircle className="w-6 h-6" />
          <span>No live quizzes at the moment. Check back soon!</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {liveQuizzes.map((quiz) => (
            <div key={quiz.id} className="card bg-base-100 shadow-xl border border-black-500">
              <div className="card-body">
                <h3 className="card-title">{quiz.title}</h3>
                <p className="badge badge-accent">{quiz.category}</p>
                <div className="flex items-center mt-2">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{quiz.participants} participants</span>
                </div>
                <div className="flex items-center mt-2">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{formatTime(quiz.timeRemaining)} remaining</span>
                </div>
                <div className="card-actions justify-end mt-4">
                  <a href='/play/Infero'>
                  <button className="btn ">Join Quiz</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LiveQuizzesSection;