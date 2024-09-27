const express = require('express');
const router = express.Router();
const verifyAdmin = require('../middlewares/verifyAdmin');
const addQuestion = require('../controllers/addQuestionController');

router.post('/addQuestion', verifyAdmin, addQuestion);

module.exports = router;