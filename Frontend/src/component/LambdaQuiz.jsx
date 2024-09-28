import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LambdaQuiz = () => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/clubs/lambda', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setQuestion(res.data);
      } catch (err) {
        setMessage('Error fetching quiz');
      }
    };

    fetchQuestion();
  }, [token]);

  const updateStats = (isCorrect) => {
    if (token) {
      axios.post(
        'http://localhost:5000/api/user/update-stats',
        { win: isCorrect },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(response => {
        console.log('Stats updated:', response.data);
      })
      .catch(error => {
        console.error('Error updating user stats:', error);
      });
    }
  };

  const handleSubmit = () => {
    if (!selectedAnswer) {
      setMessage('Please select an answer');
      return;
    }

    if (selectedAnswer === question.answer) {
      setMessage('Great! Correct answer!');
      updateStats(true);  
    } else {
      setMessage(`Incorrect. The correct answer is: ${question.answer}`);
      updateStats(false);  
    }
  };

  if (!question) return <p>Loading...</p>;

  return (
    <div className="lambda-quiz">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => setSelectedAnswer(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit Answer</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LambdaQuiz;
