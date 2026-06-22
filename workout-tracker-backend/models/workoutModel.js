const db = require('../config/db');

const workoutModel = {
    createWorkoutPlan: async (user_id, title, scheduledFor, exercisesArray) => {
        const client = await db.getClient();
        try {
            await client.query('BEGIN');
            const workoutSql = "INSERT INTO workouts (user_id, title, scheduled_for) VALUES ($1, $2, $3) RETURNING id;";
            const workoutCreated = await client.query(workoutSql, [user_id, title, scheduledFor]);
            const workoutId = workoutCreated.rows[0].id;

            for (const exercise of exercisesArray) {
                const exerciseSql = "INSERT INTO workout_exercises (workout_id, exercise_id, sets, reps, weight) VALUES ($1, $2, $3, $4, $5);";
                await client.query(exerciseSql, [workoutId, exercise.exercise_id, exercise.sets, exercise.reps, exercise.weight]);
            }

            await client.query('COMMIT');

            return { message: "Workout created successfully" };
        }
        catch (err) {
            await client.query('ROLLBACK');
            throw err;
        }
        finally {
            client.release();
        }
    },
    getAllWorkoutPlans: async (userId) => {
        try{
            const sql = "SELECT * FROM workouts WHERE user_id = $1 ORDER BY scheduled_for ASC;";
            const { rows } = await db.query(sql, [userId]);
            return rows;
        }catch(err){
            console.error('Error fetching workout plans:', err);
            throw err;
        }
    },
    getSingleWorkoutDetails: async (workoutId, userId) => {
        try{
            const workoutSql = "SELECT w.title,w.scheduled_for,exercises.name AS exercise_name, we.sets, we.reps, we.weight FROM workout_exercises we JOIN exercises ON we.exercise_id = exercises.id JOIN workouts w ON we.workout_id = w.id WHERE w.id = $1 AND w.user_id = $2;";
            const { rows } = await db.query(workoutSql, [workoutId, userId]);
            return rows;
        }
        catch(err){
            console.error('Error fetching workout details:', err);
            throw err;
        }
    }
}

module.exports = workoutModel;