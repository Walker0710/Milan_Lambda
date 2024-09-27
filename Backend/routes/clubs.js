const express = require('express');
const router = express.Router();
const { getLambdaQuiz, getInferoQuiz } = require('../controllers/clubsController');

router.get('/lambda', getLambdaQuiz);  
router.get('/infero', getInferoQuiz);  

module.exports = router;
