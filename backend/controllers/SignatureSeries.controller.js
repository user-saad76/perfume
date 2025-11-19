 import  SignatureSeries  from "../models/SignatureSeries.model.js";

 export const CreateSignatureSeries = async(req,res)=>{
     const data = req.body;
    
   if (req.file) {
      console.log("Uploaded file:", req.file);

     data.image = {
    public_id: req.file.filename,
    secure_url: req.file.secure_url || req.file.path || req.file.url
     };
   }

     await SignatureSeries.create(data)
     console.log("Hello",data);
     
   res.json({message:'Create SignatureSeries endpoint called'})
}
 export const getAllSignatureSeries = async(req,res)=>{
  
    const  getAllproducts = await SignatureSeries.find({})
     // const Qdata = req.query;
   // console.log(Qdata);
   
   res.json({message:'SignatureSeries endpoint called', getAllproducts})
}
export const getSignatureSeriesById = async(req,res)=>{
   const {id} = req.params;
   //console.log(Pdata)
     const ONESignatureSeries = await SignatureSeries.findById(id)
   res.json({message:'Single SignatureSeries endpoint called',ONESignatureSeries})
}

export const getSignatureSeriesBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const product = await SignatureSeries.findOne({ slug });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const UpdateSignatureSeries = async(req,res)=>{
   const {id} = req.params;
   const data = req.body;
   const update =  await SignatureSeries.findByIdAndUpdate(id,data)
   res.json({message:'Update SignatureSeries endpoint called', update})
}
export const DeleteSignatureSeries = async(req,res)=>{
    const {id} = req.params;
    const DeleteSignatureSeries =  await SignatureSeries.findByIdAndDelete(id)
   res.json({message:'Delete SignatureSeries endpoint called',DeleteSignatureSeries})
}
