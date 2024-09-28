const Lambda = require('../models/Lambda')
const Infero = require('../models/Infero')

exports.addLambdaQuestion = async (req, res) => {
    const {question, options, answer, explanation} = req.body;

    const newQuestion = new Lambda({question, options, answer, explanation});
    try{
        const addQuestion = await Lambda.create(newQuestion);
        res.status(201).json({message: "Question added successfully."})
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
}

exports.addInferoQuestion = async (req, res) => {
    const {question, options, answer, explanation} = req.body;

    const newQuestion = new Infero({question, options, answer, explanation});
    try{
        const addQuestion = await Infero.create(newQuestion);
        res.status(201).json({message: "Question added successfully."})
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
}