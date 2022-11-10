const User = require("../models/userModel");

exports.register = async(req,res,next) => {
    const {firstName,lastName,email,password} = req.body;

    try{
        const user = await User.create({
            firstName,lastName,email,password
        });
        console.log('Save successfully');
    }
    catch(error){
        next(error);
    }
}