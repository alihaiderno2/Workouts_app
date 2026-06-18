const db = require('../config/db');

const userModel = {
    findByEmail : async (email) => {
        const sql = "SELECT * FROM users WHERE email = $1;";
        const {rows} = await db.query(sql,[email]);
        return rows[0];
    },
    create : async (name,email,password) => {
        const sql = "INSERT INTO users (name,email,password_hash) VALUES ($1,$2,$3) RETURNING id, name, email, created_at;";
        const result = await db.query(sql,[name,email,password]);
        return result.rows[0];
    }
}

module.exports = userModel;