import Feedback from "../models/Feedback.model.js";
export const CreateFeedback = async(req,res)=>{
    try{
       const data = req.body;
      console.log('FeedBack data',data);
       await Feedback.create(data)
      res.json({message:'Create FeedBack endpoint called'})
    }
    catch(error){
       console.log(error);
       res.json({
        message:error?.message ||"Could not fetch feedback"
       })
       
    }
}