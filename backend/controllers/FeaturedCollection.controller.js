 import FeaturedCollection from "../models/FeaturedCollection.model.js";
 export const CreateFeaturedCollection = async(req,res)=>{
     const data = req.body;
    
   if (req.file) {
      console.log("Uploaded file FeaturedCollection:", req.file);

     data.image = {
    public_id: req.file.filename,
    secure_url: req.file.secure_url || req.file.path || req.file.url
     };
   }

     await FeaturedCollection.create(data)
     console.log("FeaturedCollection",data);
     
   res.json({message:'Create FeaturedCollection endpoint called'})
}
export const getFeaturedCollection = async(req,res)=>{
  
    const  getFeaturedCollection = await FeaturedCollection.find({})
      const Qdata = req.query;
     console.log(Qdata);
   
   res.json({message:'FeaturedCollection endpoint called', getFeaturedCollection})
}