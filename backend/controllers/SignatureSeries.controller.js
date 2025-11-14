 import  SignatureSeries  from "../models/SignatureSeries.model.js";

 export const CreateSignatureSeries = async(req,res)=>{
     const data = req.body;
    
      if (req.file) {
      console.log("Uploaded file:", req.file); // Log the full file object
      data.image = req.file.path || req.file.filename; // save path or filename depending on storage
    }
     await SignatureSeries.create(data)
     console.log("Hello",data);
     
   res.json({message:'Create SignatureSeries endpoint called',data})
}
 export const getAllSignatureSeries = async(req,res)=>{
  
    const  AllSignatureSeries = await SignatureSeries.find({})
     // const Qdata = req.query;
   // console.log(Qdata);
   
   res.json({message:'SignatureSeries endpoint called', AllSignatureSeries})
}
export const getSignatureSeriesById = async(req,res)=>{
   const {id} = req.params;
   //console.log(Pdata)
     const ONESignatureSeries = await SignatureSeries.findById(id)
   res.json({message:'Single SignatureSeries endpoint called',ONESignatureSeries})
}
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
