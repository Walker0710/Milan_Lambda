import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Lambda = () => {
  const [question, setQuestion] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/clubs/lambda');
        setQuestion(res.data);
      } catch (err) {
        setError('Error fetching Lambda quiz');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, []);

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === question.answer) {
      setFeedback('Correct answer!');
    } else {
      setFeedback(`Wrong answer! The correct answer is ${question.answer}. Explanation: ${question.explanation}`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="lambda-quiz">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </button>
        ))}
      </div>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default Lambda;
