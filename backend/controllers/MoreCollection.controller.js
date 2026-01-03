   import MoreCollection  from "../models/MoreCollection.model.js"; 

export const CreateMoreCollection = async(req,res)=>{
     const data = req.body;
    
   if (req.file) {
      console.log("Uploaded file:", req.file);

     data.image = {
    public_id: req.file.filename,
    secure_url: req.file.secure_url || req.file.path || req.file.url
     };
   }

     await MoreCollection.create(data)
     console.log("Hello",data);
     
   res.json({message:'Create MoreCollection endpoint called'})
}
// export const getMoreCollection = async(req,res)=>{
  
//     const  getAllproducts = await MoreCollection.find({})
//      // const Qdata = req.query;
//    // console.log(Qdata);
   
//    res.json({message:'More Collection endpoint called', getAllproducts})
// }