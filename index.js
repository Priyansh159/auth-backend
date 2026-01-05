const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter')

require('dotenv').config();
require('./Models/db')

const PORT = process.env.PORT || 8080;

app.get('/ping', (req,res)=>{
    res.send('PONG');
})

app.use(bodyParser.json());
app.use(cors()); // if restrict then [] can be used in the configuration object for more secure //but as of now take a req from anywhere

// Here is the Router call
app.use('/auth', AuthRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})