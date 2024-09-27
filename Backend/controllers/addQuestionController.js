const Question = require('../models/Questions')

exports.addQuestion = async (req, res) => {
    const {question, option1, option2, option3, option4, correctOption} = req.body;
    try {
        const createQuestion = await Question.create({question, option1, option2, option3, option4, correctOption});
        res.status(201).json({message: "Question added successfully."});
    } catch (error) {
        res.status(500).json({message: "Error uploading question."});
    }   
}