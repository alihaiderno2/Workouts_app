const express = require('express');

const router = express.Router();

const {signup,login} = require('../controllers/authControllers');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/signup',signup);
router.post('/login',login);
router.get('/protected',authMiddleware,(req,res)=>{
    res.json({message:'You have accessed a protected route',user:req.user});
});
module.exports = router;