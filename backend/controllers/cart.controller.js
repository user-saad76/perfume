import Cart from '../models/cart.model.js'

export const addToCart = async(req,res)=>{
  const {productId,name,price} = req.body;
  const {userId} = req.params;
  try {

     // ✅ HARD VALIDATION
    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "productId is required"
      });
    }
   const cart = await getUserCart(userId);
     console.log('cart by add to cart',cart);
     

    const item = cart.items.find(i => i.productId.toString() === productId);

    if (item) {
      item.quantity += 1;
    } else {
      cart.items.push({ productId, name, price, quantity: 1 });
    }

    await cart.save();
    res.json(cart);

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
    console.log('UserId',userId);
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


export const getUserCart = async(userId)=>{
  let cart = await Cart.findOne({userId});
  if(!cart){
    cart = await Cart.create({userId,items:[]});
  }
  return cart;
}