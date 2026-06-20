const express = require('express');
const router = express.Router();
const {getAllExcercises,getExcercisesByMuscleGroup} = require('../controllers/exerciseController');

router.get('/',getAllExcercises);
router.get('/:muscle_group',getExcercisesByMuscleGroup);
module.exports = router;