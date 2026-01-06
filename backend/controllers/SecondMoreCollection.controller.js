import SecondMoreCollection from "../models/SecondMoreCollection.model.js";
export const CreateSecondMoreCollection = async(req,res)=>{
     const data = req.body;
    
   if (req.file) {
      console.log("Uploaded file:", req.file);

     data.image = {
    public_id: req.file.filename,
    secure_url: req.file.secure_url || req.file.path || req.file.url
     };
   }

     await SecondMoreCollection.create(data)
     console.log("Hello",data);
     
   res.json({message:'SecondMoreCollection endpoint called'})
}
export const getAllSecondMoreCollection = async(req,res)=>{
  
    const  getAllproducts = await SecondMoreCollection.find({})
     // const Qdata = req.query;
   // console.log(Qdata);
   
   res.json({message:'SecondMoreCollection endpoint called', getAllproducts})
}