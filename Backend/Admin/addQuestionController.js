const Question = require('../Backend/models/Question');

const addQuestion = async (req, res) => {
    const { question, option1, option2, option3, option4, correctOption } = req.body;

    try {
        const createQuestion = await Question.create({
            question,
            option1,
            option2,
            option3,
            option4,
            correctOption,
        });
        res.status(201).json({ message: "Question added successfully." });
    } catch (error) {
        console.error('Error uploading question:', error);
        res.status(500).json({ message: "Error uploading question." });
    }
};


module.exports = { addQuestion };
