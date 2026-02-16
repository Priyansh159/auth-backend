const {getAllUsers} = require('../Controllers/GetUsers')
const ensureAuthenticated = require('../Middlewares/Auth')
const router = require('express').Router();

router.get('/getAllUsers', ensureAuthenticated ,getAllUsers)

module.exports = router;