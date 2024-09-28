import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InferoQuiz = () => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchQuestion = async () => {
      const res = await axios.get('http://localhost:5000/api/clubs/infero', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQuestion(res.data);
    };

    fetchQuestion();
  }, [token]);

  const handleSubmit = async () => {
    try {
      await axios.post(
        `http://localhost:5000/api/clubs/infero/answer`,
        { questionId: question._id, selectedAnswer },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Answer submitted. You’ll get the result after 24 hours!');
    } catch (err) {
      setMessage('Error submitting answer');
    }
  };

  if (!question) return <p>Loading...</p>;

  return (
    <div className="infero-quiz">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <label key={index}>
            <input type="radio" value={option} onChange={() => setSelectedAnswer(option)} />
            {option}
          </label>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit Answer</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default InferoQuiz;
