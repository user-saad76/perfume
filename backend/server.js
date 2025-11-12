import express from 'express'
import 'dotenv/config'
import SignatureSeriesRoutes from './routes/SignatureSeries.routes.js'

 const server = express()
 const port =  process.env.PORT || 5000

 server.use(SignatureSeriesRoutes)







 server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
 })