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
    }
}

module.exports = workoutModel;