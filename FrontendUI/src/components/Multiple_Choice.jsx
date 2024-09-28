import React, { useState } from 'react';

const Multiple_Choice = ({ question, options, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">{question}</h2>
          <div className="space-y-2">
            {options.map((option, index) => (
              <div key={index} className="form-control">
                <label className="label cursor-pointer justify-start space-x-2">
                  <input
                    type="radio"
                    name="option"
                    className="radio radio-primary"
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  <span className="label-text">{option}</span>
                </label>
              </div>
            ))}
          </div>
          <div className="card-actions justify-end mt-4">
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={!selectedOption}
            >
              Submit
            </button>
          </div>
          {showResult && (
            <div className={`alert ${selectedOption === correctAnswer ? 'alert-success' : 'alert-error'} mt-4`}>
              <span>
                {selectedOption === correctAnswer
                  ? "Correct! Well done!"
                  : `Incorrect. The correct answer is ${correctAnswer}.`}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Multiple_Choice;