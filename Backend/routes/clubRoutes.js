const express = require('express');
const { getTodayQuiz, submitAnswer } = require('../controllers/clubController');
const { authenticateToken } = require('../middleware/authMiddleware')
const router = express.Router();

router.get('/:club', authenticateToken, getTodayQuiz);
router.post('/:club/answer', authenticateToken, submitAnswer);

module.exports = router;
