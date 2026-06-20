const exerciseModel = require('../models/excerciseModel');
const getAllExcercises = async (req,res)=>{
    try{
       const exercises = await exerciseModel.findAll();
       res.status(200).json({exercises});
    }
    catch(err){
        console.error('Error fetching exercises:', err);
        res.status(500).json({ error: "Internal server error" });
    }
};
const getExcercisesByMuscleGroup = async (req,res)=>{
    try{
        const {muscle_group} = req.params;
        const exercises = await exerciseModel.findByMuscleGroup(muscle_group);
        res.status(200).json({exercises});
    }
    catch(err){
        console.error('Error fetching exercises by muscle group:', err);
        res.status(500).json({ error: "Internal server error" });
    }
};
module.exports = {getAllExcercises,getExcercisesByMuscleGroup};