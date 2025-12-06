import jwt from 'jsonwebtoken'
export const isAuthenticated = async(req,res,next)=>{
   const token =  req.cookies['jwt-token']
   console.log('jwt-token',token);
   
   if(!token){
     return res.status(401).json({message:'You are not authenticated.'})
   }

   //token verification
   const decoded =  jwt.verify(token,process.env.JWT_SECRET)
   console.log('decoded-jwt-admin',decoded);

    req.user = decoded;
   next();
   

//    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
//   console.log(decoded) // bar
// });
}