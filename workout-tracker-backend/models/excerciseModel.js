const db = require('../config/db');

const exerciseModel = {
    findAll : async () => {
        const sql = "SELECT * FROM exercises;";
        const {rows} = await db.query(sql);
        return rows;
    },
    findByMuscleGroup : async (muscle_group) => {
        const sql = "SELECT * FROM exercises WHERE muscle_group = $1;";
        const {rows} = await db.query(sql,[muscle_group]);
        return rows;
    }
}
modules.exports = exerciseModel;