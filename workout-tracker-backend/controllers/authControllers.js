const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req,res) =>{
    try{
        const {name,email,password} = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: "Name, email, and password are required" });
        }

        const existingUser = await userModel.findByEmail(email);
        if(existingUser){
            return res.status(400).json({ error: "Email is already registered" });
        }

        // Hash the password before storing it in the database
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // create new user
        const newUser = await userModel.create(name,email,hashedPassword);

        // Assign jwt token
        const token = jwt.sign({id : newUser.id},process.env.JWT_SECRET,{expiresIn : '24h'});

        res.status(201).json({user:newUser,token});

    }
    catch(err){
        console.error('Error during signup:', err);
        res.status(500).json({ error: "Internal server error" });
    }
}