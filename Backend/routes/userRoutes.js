const express = require('express');
const { updateStats, checkCanPlay } = require('../controllers/userController');
const { authenticateToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/update-stats', authenticateToken, updateStats);
router.get('/check-can-play', authenticateToken, checkCanPlay);

module.exports = router;



// const handleSubmit = async () => {
//     try {
//       const res = await axios.post(
//         `http://localhost:5000/api/clubs/lambda/answer`,
//         { questionId: question._id, selectedAnswer },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       const { isCorrect } = res.data;
//       setMessage(isCorrect ? 'Correct answer! Stats updated.' : 'Incorrect answer.');
      
//       updateStats(isCorrect);
//     } catch (err) {
//       setMessage('Error submitting answer');
//     }
//   };