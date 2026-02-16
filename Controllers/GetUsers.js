const { date } = require("joi");
const UserModel = require("../Models/User");

const getAllUsers = async (req, res) =>{
    try {
        const allUser = await UserModel.find({}).select('name email -_id').exec();
        console.log(allUser,"ALL USER")
        return res.status(200).json({
            success:true,
            data:allUser
        })
        
    } catch (err) {
        console.log("err",err)
        return res.status(500)
        .json({
            message:"Internal Server Error",
            success:false
        })
        console.log("Internal Server Error",err)
    }
}


module.exports = {
    getAllUsers
}