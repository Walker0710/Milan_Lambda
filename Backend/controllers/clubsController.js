const Lambda = require('../models/Lambda');
const Infero = require('../models/Infero');

exports.getLambdaQuiz = async (req, res) => {
  try {
    const lambdaQuiz = await Lambda.findOne({}); 
    res.json(lambdaQuiz);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.getInferoQuiz = async (req, res) => {
  try {
    const inferoQuiz = await Infero.findOne({});
    res.json(inferoQuiz);
  } catch (error) {
    res.status(500).send('Server error');
  }
};
