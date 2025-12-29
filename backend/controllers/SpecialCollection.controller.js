import  SpecialCollection  from "../models/SpecialCollection.model.js";
export const CreateSpecialCollection = async(req,res)=>{
     const data = req.body;
    
   if (req.file) {
      console.log("Uploaded file:", req.file);

     data.image = {
    public_id: req.file.filename,
    secure_url: req.file.secure_url || req.file.path || req.file.url
     };
   }

     await SpecialCollection.create(data)
     console.log("Hello",data);
     
   res.json({message:'Create SpecialCollection endpoint called'})
}