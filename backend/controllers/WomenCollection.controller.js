
import WomenCollection  from "../models/WomenCollection.model.js"; 
export const CreateWomenCollection = async(req,res)=>{
     const data = req.body;
    
   if (req.file) {
      console.log("Uploaded file:", req.file);

     data.image = {
    public_id: req.file.filename,
    secure_url: req.file.secure_url || req.file.path || req.file.url
     };
   }

     await WomenCollection.create(data)
     console.log("Hello",data);
     
   res.json({message:'Create MoreCollection endpoint called'})
}