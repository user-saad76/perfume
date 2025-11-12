import express from 'express'

 const server = express()

 server.get('/products',(req,res)=>{
   res.json(
     [
        {
            'id':1,
            'title': "Saad"
        }
     ]
   )
    
 })







 server.listen(5000,()=>{
    console.log('Server is running on port 5000');
    
 })