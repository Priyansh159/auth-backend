const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

// NO USE
// router.post('/login', (req,res)=>{
//     res.send('login success')
// });

// NO USE
// router.post('/signup', (req,res)=>{
//     res.send('signup success')
// })

//CALL FROM MIDDLEWARE & CONTROLLER
// (Third i.e signup ESPE YE TAB JAYEGA JAB VALIDATE HO CHUKA HOGA i.e signupValidation)
router.post('/login', loginValidation, login)
router.post('/signup', signupValidation, signup)

module.exports = router;