const express = require('express');
const router = express.Router();
const verifyLambdaAdmin = require('../middlewares/verifyLambdaAdmin');
const verifyInferoAdmin = require('./verifyInferoAdmin');
const { addLambdaQuestion, addInferoQuestion } = require('../controllers/addQuestionController');

router.post('/addLambdaQuestion', verifyLambdaAdmin, addLambdaQuestion);
router.post('/addInferoQuestion', verifyInferoAdmin, addInferoQuestion);

module.exports = router;