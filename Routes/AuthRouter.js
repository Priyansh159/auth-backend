const { signup } = require('../Controllers/AuthController');
const { signupValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login', (req,res)=>{
    res.send('login success')
})

// NO USE
// router.post('/signup', (req,res)=>{
//     res.send('signup success')
// })

//CALL FROM MIDDLEWARE & CONTROLLER
// (Third i.e signup ESPE YE TAB JAYEGA JAB VALIDATE HO CHUKA HOGA i.e signupValidation)
router.post('/signup', signupValidation, signup)

module.exports = router;