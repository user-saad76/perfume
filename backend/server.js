import express from 'express'
import 'dotenv/config'
import SignatureSeriesRoutes from './routes/SignatureSeries.routes.js'
import  UserRoutes from './routes/user.routes.js'
import  AdminUserRoutes from './routes/AdminUser.routes.js'
import  OrderRoutes from './routes/order.routes.js'
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";
import { connectDB } from './config/db.js'
import cors from "cors";


 const server = express()
 const port =  process.env.PORT || 4000

 connectDB().catch((e)=>console.log("Error in connection",e));

 server.use(bodyParser.json())
 server.use(cookieParser());
 server.use(
  cors({
    origin: ["http://localhost:5173","http://localhost:5174"],// Your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,                 // Allow cookies, tokens, sessions
  })
);

 server.use(SignatureSeriesRoutes)
 server.use(UserRoutes)
 server.use(OrderRoutes)
  server.use(AdminUserRoutes)
 server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
 })