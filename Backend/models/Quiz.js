const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  question: { 
    type: String, 
    required: true 
  },
  options: { 
    type: [String], 
    required: true 
  },
  answer: { 
    type: String, 
    required: true 
  },
  explanation: { 
    type: String 
  },
  club: { 
    type: String, 
    required: true 
  },
});

module.exports = mongoose.model('Quiz', quizSchema, 'Quiz');
