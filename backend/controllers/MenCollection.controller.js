import MenCollection  from "../models/MenCollection.model.js"; 
export const CreateMenCollection = async(req,res)=>{
     const data = req.body;
    
   if (req.file) {
      console.log("Uploaded file:", req.file);

     data.image = {
    public_id: req.file.filename,
    secure_url: req.file.secure_url || req.file.path || req.file.url
     };
   }

     await MenCollection.create(data)
     console.log("Hello",data);
     
   res.json({message:'Create MenCollection endpoint called'})
}
export const getMenCollection = async(req,res)=>{
  
     const  getAllproducts = await MenCollection.find({})
      // const Qdata = req.query;
    // console.log(Qdata);
   
    res.json({message:'Men Collection endpoint called', getAllproducts})
 }
 export const getMenCollectionBySlug = async (req, res) => {
    try {
      const { slug } = req.params;
  
      const product = await MenCollection.findOne({ slug });
  
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.json({ product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    }
  };