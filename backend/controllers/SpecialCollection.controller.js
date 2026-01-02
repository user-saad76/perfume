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
export const getAllSpecialCollection = async(req,res)=>{
  
    const  getAllproducts = await SpecialCollection.find({})
     // const Qdata = req.query;
   // console.log(Qdata);
   
   res.json({message:'SpecialCollection endpoint called', getAllproducts})
}
export const getSpecialCollectionBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const product = await SpecialCollection.findOne({ slug });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};