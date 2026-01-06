
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
export const getallWomenCollection = async(req,res)=>{
  
     const  getAllproducts = await WomenCollection.find({})
      // const Qdata = req.query;
    // console.log(Qdata);
   
    res.json({message:'Men Collection endpoint called', getAllproducts})
 }
 export const getWomenCollectionBySlug = async (req, res) => {
    try {
      const { slug } = req.params;
  
      const product = await WomenCollection.findOne({ slug });
  
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.json({ product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    }
  };