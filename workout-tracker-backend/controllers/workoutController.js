const workoutModel = require('../models/workoutModel');
const createWorkoutPlann = async (req,res)=>{
    try{
    const user_id = req.user.id;
    const workoutPlan = req.body;
    const isCreated = await workoutModel.createWorkoutPlan(user_id, workoutPlan.title, workoutPlan.scheduledFor, workoutPlan.exercises);
    if(isCreated){
        res.status(201).json({message: "Workout plan created successfully"});
    }else{
        res.status(400).json({message: "Failed to create workout plan"});
    }
    }catch(err){
        res.status(500).json({ error: "Internal server error" });
    }
}
const getAllWorkoutPlans = async (req,res)=>{
    try{
        userId = req.user.id;
        const workoutPlans = await workoutModel.getAllWorkoutPlans(userId);
        if(workoutPlans){
            res.status(200).json({workoutPlans});
        }

    }catch(err){
        res.status(500).json({ error: "Internal server error" });
    }
}
module.exports = {createWorkoutPlann,getAllWorkoutPlans};