const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const {createWorkoutPlann,getAllWorkouts} = require('../controllers/workoutController');

router.post('/',authMiddleware,createWorkoutPlann);
router.get('/', authMiddleware, getAllWorkouts);
module.exports = router;