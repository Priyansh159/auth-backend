const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/',ensureAuthenticated, (req, res)=>{
    //HERE IS "ensureAuthenticated" A MIDDLEWARE FOR AUTHENTICATION VALIDATION

    console.log('---- logged in user detail ----', req.user)
    res.status(200)
    .json([{
        name:"mobile",
        price:10000
    },
   {
        name:"Television",
        price:70000
    },]
)
});

module.exports = router;