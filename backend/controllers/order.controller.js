import Order from "../models/order.model.js";
export const CreateOrder = async(req,res)=>{
    try{
       const data = req.body;
      console.log('Order data',data);
       await Order.create(data)
      res.json({message:'Create Order endpoint called'})
    }
    catch(error){
       console.log(error);
       res.json({
        message:error?.message ||"Could not fetch orders"
       })
       
    }
}
export const GetallOrders = async(req,res)=>{
    try{
      const orders = await Order.find();
      res.status(200).json({
        orders
      })
    }
    catch(error){
       console.log(error);
       res.json({
        message:error?.message ||"Could not fetch orders"
       })
       
    }
}
export const getOrdersById = async(req,res)=>{
     try{
       const {id} = req.params;
       const order = await Order.findById(id)
       res.status(200).json({
        order
      })
    }
    catch(error){
       console.log(error);
       res.json({
        message:error?.message ||"Could not fetch orders"
       })
       
    }
}

export const UpdateOrderById = async(req,res)=>{
     try{
         const {id} = req.params;
         const body = req.body;
       const order = await Order.findByIdAndUpdate(id,body)
       res.status(200).json({
        order
      })
    }
    catch(error){
       console.log(error);
       res.json({
        message:error?.message ||"Could not fetch orders"
       })
       
    }
}
export const DeleteOrderById = async(req,res)=>{
     try{
        const {id} = req.params;
       const order = await Order.findByIdAndUpdate(id)
       res.status(200).json({
        order
      })
    }
    catch(error){
       console.log(error);
       res.json({
        message:error?.message ||"Could not fetch orders"
       })
       
    }
}