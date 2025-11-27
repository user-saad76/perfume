import { createContext, useContext, useState,useReducer } from "react"

const CartContext = createContext();

const cartReducer =(state,action)=>{
  if(action.type == 'ADD_TO_CART'){
    action.payload.quantity = 1;
    console.log("checking state",state);

    let newState = [...state,action.payload]
     state = newState;
    console.log('Updated state',state);
     return newState;  
    
  }
  if(action.type == 'REMOVE_FROM_CART'){
     console.log(' remove cart dispatcher called');
     const newState = state.filter(item => item.id !== action.payload)
     return newState;
  }
  if(action.type == 'CLEAR_FROM_CART'){
      console.log('Clear cart dispatcher called');
      return [];
  }
  if(action.type == 'INCREMENT_CART'){
     console.log('increment cart dispatcher called');
     let newState =  state.map(item => item.id === action.payload ? {
            ...item,quantity:item.quantity+1
        }  :item)
        console.log("incrementing cart",newState);
        
     return newState
  }
  if(action.type == 'DECREMENT_CART'){
      console.log('decrement cart dispatcher called');
      return state.map(item => item.id === action.payload && item.quantity > 1 ? 
            { ...item,quantity:item.quantity - 1}
            : item
      )
  }
}

function CartProvider({children}) {
    const [cart,setCart] = useState([])
    const [cartstate,dispatch] = useReducer(cartReducer,cart)

    const addToCart = (product)=> dispatch({type:'ADD_TO_CART',payload:product})
    const removeFromCart = ()=> dispatch({type:'REMOVE_FROM_CART'})
     const clearFromCart = ()=> dispatch({type:'CLEAR_FROM_CART'})
      const incrementFromCart = (id)=> dispatch({type:'INCREMENT_CART',payload:id})
       const decrementFromCart = (id)=> dispatch({type:'DECREMENT_CART',payload:id})
        const CartTotal = ()=> dispatch({type:'CLEAR_FROM_CART'})




    return(
        <CartContext.Provider value = {{cartstate,setCart,addToCart,removeFromCart, clearFromCart,incrementFromCart,decrementFromCart,CartTotal}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider

 export const useCart = () => useContext(CartContext)