import Order from "../models/order.model.js";
export const CreateOrder = async(req,res)=>{
    const data = req.body;
    console.log('Order data',data);
     await Order.create(data)
   res.json({message:'Create Order endpoint called'})
}