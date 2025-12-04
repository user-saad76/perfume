import jwt from 'jsonwebtoken'
export const isAuthenticated = async(req,res,next)=>{
   const Admintoken =  req.cookies['jwt-token']
   console.log('jwt-token-admin', Admintoken);
   
   if(!Admintoken){
     return res.status(401).json({message:'You are not authenticated.'})
   }

   //token verification
   const Admindecoded =  jwt.verify(token,process.env.JWT_SECRET)
   console.log('decoded-jwt',Admindecoded);

    req.user = Admindecoded;
   next();
   

//    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
//   console.log(decoded) // bar
// });
}