import Cart from '../models/cart.model.js'

export const addToCart = async(req,res)=>{
  try {
      const body = req.body;
      const cartItem = await Cart.create(body)
      res.status(201).json({
        success:true,
        cartItem
      })

  } catch (error) {
    console.log(error);
    res.json({
        success: false,
        message:error?.message ||'Could not add Item to the cart,Please try again'
    })

     
  }
}
export const removeFromCart = async(req,res)=>{
  try {
    const {id} = req.params;
    const cartItem = await Cart.findById(id);
      res.status(201).json({
        success:true,
        cartItem
      })

  } catch (error) {
    console.log(error);
    res.json({
        success: false,
        message:error?.message ||'Could delete Item to the cart,Please try again'
    })
  }
} 
export const clearCart = async(req,res)=>{
   try {
        
   } catch (error) {
       console.log(error);
       res.json({
        success: false,
        message:error?.message ||'Could not add Item to the cart,Please try again'
    })
   }
}
export const updateCart = async(req,res)=>{
   try {
       const {id,type} = req.params;
        if(!id || !type) return;

       if(type === 'INCREMENT'){
          await Cart.findByIdAndUpdate(id,quantity)
       }else if(type === 'DECREMENT'){

       }else {
         return
       }
   } catch (error) {
        console.log(error);
        res.json({
        success: false,
        message:error?.message ||'Could not add Item to the cart,Please try again'
    })
   }
}
export const getAllCartItemsByUser = async(req,res)=>{
  try {
      // const {userId} = req.params;
      // console.log('UserId',userId);
    //  res.json({
    //   data:"This is fake data"
    //  })
    const { userId } = req.params;
       const cartItems = await Cart.find({userId});
        res.status(200).json({
         success:true,
          data:cartItems
       })
  } catch (error) {
       console.log(error);
        res.json({
        success: false,
        message:error?.message ||'Could not add Item to the cart,Please try again'
    })
  }
}
export const getSingleCartItem = async(req,res)=>{
    try {
        const {id} = req.params;
        const cartItem = await Cart.findById(id);
      res.status(201).json({
        success:true,
        cartItem
      })
    } catch (error) {
           console.log(error);
          res.json({
        success: false,
        message:error?.message ||'Could not add Item to the cart,Please try again'
    })
    }
}