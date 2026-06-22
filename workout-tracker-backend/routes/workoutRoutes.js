const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const {createWorkoutPlann,getAllWorkoutPlans,getSingleWorkoutDetails} = require('../controllers/workoutController');

router.post('/',authMiddleware,createWorkoutPlann);
router.get('/', authMiddleware, getAllWorkoutPlans);
router.get('/:id',authMiddleware,getSingleWorkoutDetails);
module.exports = router;