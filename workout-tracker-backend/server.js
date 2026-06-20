const express = require('express');
const authRoutes = require('./routes/authRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');

require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api/exercises',exerciseRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});