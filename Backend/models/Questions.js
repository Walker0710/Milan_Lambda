const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {
        type:String,
        required: true
    }, 
    option1: {
        type: String,
        required: true
    },
    option2: {
        type:String,
        required: true
    },
    option3: {
        type: String,
        required: true
    },
    option4: {
        type:String,
        required: true
    },
    correctOption: {
        type: Number,
        required: true,
        min: 1,
        max: 4
    }

});

const Question = mongoose.model('Question', questionSchema, 'Question');
module.exports = Question;