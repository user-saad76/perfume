import express from 'express'
import 'dotenv/config'
import SignatureSeriesRoutes from './routes/SignatureSeries.routes.js'
import bodyParser from 'body-parser'
import { connectDB } from './config/db.js'

 const server = express()
 const port =  process.env.PORT || 5000

 connectDB().catch((e)=>console.log("Error in connection",e));

 server.use(bodyParser.json())
 server.use(SignatureSeriesRoutes)







 server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
 })