 import User from "../models/user.model.js";
  import bcrypt from "bcryptjs";
 export const signupUser = async(req,res)=>{
    const data = req.body;
    console.log('User data',data);
    const hashedPassword = bcrypt.hashSync(data.password, 10);
    data.password = hashedPassword;
    
     await User.create(data)
   res.json({message:'Create SignatureSeries endpoint called'})
}