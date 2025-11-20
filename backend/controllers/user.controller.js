 import User from "../models/user.model.js";
  import bcrypt from "bcryptjs";
 export const signupUser = async(req,res)=>{
    const data = req.body;
    console.log('User data',data);
    const hashedPassword = bcrypt.hashSync(data.password, 10);
    data.password = hashedPassword;
    
     await User.create(data)
   res.json({message:'Create User endpoint called'})
}
export const signinUser = async(req,res)=>{
      const {email,password} = req.body;
      const user = await User.find({email})
       console.log('User',user);
       if(!user||user.length === 0){
         return res.status(404).json({
            success:false,
            message:'User not found'
         })
       }
        const isMatched = await bcrypt.compare(password,user[0].password)
        if(!isMatched){
          return res.status(403).json(({
            success:false,
            message:'Invalid password'
          }))
        }
       
   res.json({message:' User login-in'})
}