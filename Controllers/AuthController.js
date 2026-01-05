const bcrypt = require('bcrypt');
const UserModel = require("../Models/User");

const signup = async (req, res) =>{
    try {
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409)
            .json({ message:"User Already Exist", success:"false" })
        }
        const userModel = userModel({name , email, password});
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message : "Signup Successfully", 
                success:true
            })


    } catch (err) {

    }
}

module.exports = {
    signup
}