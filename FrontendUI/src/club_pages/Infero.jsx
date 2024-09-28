import React, { useState, useEffect } from 'react';
import { Play, Clock, Users, Trophy, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Infero = ({ topic = "Infero" }) => {
  const [liveQuiz, setLiveQuiz] = useState(null);
  const [pastQuizzes, setPastQuizzes] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopicData = async () => {
      setLoading(true);
      // Replace these with actual API calls
      const mockLiveQuiz = {
        id: 'live1',
        title: '1998-B',
        participants: 45,
        timeRemaining: '30:00'
      };
      const mockPastQuizzes = [
        { id: 'past1', title: '1998-C', participants: 156, date: '2024-09-25' },
        { id: 'past2', title: '1998-D', participants: 128, date: '2024-09-24' },
        { id: 'past3', title: '1997-B', participants: 97, date: '2024-09-23' }
      ];
      const mockLeaderboard = [
        { id: 1, username: 'MathWhiz', score: 9800 },
        { id: 2, username: 'NumberNinja', score: 9650 },
        { id: 3, username: 'AlgebraPro', score: 9400 },
        { id: 4, username: 'GeometryGuru', score: 9200 },
        { id: 5, username: 'CalcKing', score: 9000 }
      ];

      setTimeout(() => {
        setLiveQuiz(mockLiveQuiz);
        setPastQuizzes(mockPastQuizzes);
        setLeaderboard(mockLeaderboard);
        setLoading(false);
      }, 1000);
    };

    fetchTopicData();
  }, [topic]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 -z-10">
      <h1 className="text-3xl font-bold mb-6">{topic} Quizzes</h1>

      {/* Live Quiz Section */}
      <section className="mb-8 ">
        <h2 className="text-2xl font-semibold mb-4">Live Quiz</h2>
        {liveQuiz ? (
          <div className="rounded-xl border border-black-500 shadow-xl bg-primary text-white">
            <div className="card-body">
              <h3 className="card-title">{liveQuiz.title}</h3>
              <div className="flex justify-between items-center">
                <p className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  {liveQuiz.participants} participants
                </p>
                <p className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {liveQuiz.timeRemaining} remaining
                </p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn">Join Now</button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No live quizzes at the moment. Check back soon!</p>
        )}
      </section>

      {/* Past Quizzes Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Quizzes</h2>
        <div className="space-y-4">
          {pastQuizzes.map((quiz) => (
            <div key={quiz.id} className="rounded-xl border border-black-500 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">{quiz.title}</h3>
                <p className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  {quiz.participants} participants
                </p>
                <p className="text-sm text-gray-500">Date: {quiz.date}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-sm">View Results</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leaderboard Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{topic} Leaderboard</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((user, index) => (
                <tr key={user.id} className="hover">
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.score.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-link">
            View Full Leaderboard
            <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

const Inferopage = () => {
    return (
      <>
       <Navbar />
        <div class="flex flex-col h-screen">
          <div class="flex-1">
                <Infero />
          </div>
          <Footer />
        </div>
      </>
    )
  }

export default Inferopage;