import { createContext, useContext, useState,useReducer } from "react"

const CartContext = createContext();

const cartReducer =(state,action)=>{
  if(action.type == 'ADD_TO_CART'){
    console.log('add to cart dispatcher called');
    
  }
  if(action.type == 'REMOVE_FROM_CART'){
     console.log(' remove cart dispatcher called');
  }
  if(action.type == 'CLEAR_FROM_CART'){
      console.log('Clear cart dispatcher called');
  }
  if(action.type == 'INCREMENT_CART'){
     console.log('increment cart dispatcher called');
  }
  if(action.type == 'DECREMENT_CART'){
      console.log('decrement cart dispatcher called');
  }
}

function CartProvider({children}) {
    const [cart,setCart] = useState([])
    const [state,dispatch] = useReducer(cartReducer,cart)

    const addToCart = ()=> dispatch({type:'ADD_TO_CART'})
    const removeFromCart = ()=> dispatch({type:'REMOVE_FROM_CART'})
     const clearFromCart = ()=> dispatch({type:'CLEAR_FROM_CART'})
      const incrementFromCart = ()=> dispatch({type:'INCREMENT_CART'})
       const decrementFromCart = ()=> dispatch({type:'DECREMENT_CART'})
        const CartTotal = ()=> dispatch({type:'CLEAR_FROM_CART'})




    return(
        <CartContext.Provider value = {{cart,setCart,addToCart,removeFromCart, clearFromCart,incrementFromCart,decrementFromCart,CartTotal}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider

 export const useCart = () => useContext(CartContext)