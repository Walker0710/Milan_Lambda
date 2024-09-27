const mongoose = require('mongoose');

const inferoSchema = new mongoose.Schema({
  question: { type: String, required: true, unique: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
  explanation: { type: String },
  createdAt: { type: Date, default: Date.now },
  comments: [
    {
      username: { type: String, required: true },
      text: { type: String, required: true },
    }
  ]
});

const Infero = mongoose.model('Infero', inferoSchema, 'Infero');
module.exports = Infero;
