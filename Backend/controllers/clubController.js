const Quiz = require('../models/Quiz');
const User = require('../models/User');


exports.getTodayQuiz = async (req, res) => {
  const { club } = req.params;  
  try {
    const todayQuiz = await Quiz.findOne({ club }).sort({ createdAt: -1 });
    if (!todayQuiz) {
      return res.status(404).json({ message: 'No quiz found' });
    }
    res.status(200).json(todayQuiz);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quiz', error });
  }
};

exports.submitAnswer = async (req, res) => {
  const { userId } = req.user;
  const { questionId, selectedAnswer } = req.body;
  
  try {
    const quiz = await Quiz.findById(questionId);
    const user = await User.findById(userId);

    if (!quiz || !user) {
      return res.status(404).json({ message: 'Quiz or user not found' });
    }

    const isCorrect = quiz.correctAnswer === selectedAnswer;

    user.answers.push({ questionId, answer: selectedAnswer, isCorrect });
    
    if (isCorrect) {
      user.correctAnswers += 1;
    }

    await user.save();

    res.status(200).json({ message: 'Answer submitted', isCorrect });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting answer', error });
  }
};