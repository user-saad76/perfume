import { useEffect } from "react";
import { createContext, useContext, useState,useReducer } from "react"
import { useAuth } from "./authProvider";

const CartContext = createContext();

const cartReducer =(state,action)=>{

    if(action.type == 'SET_CART'){
       return action.payload;
    }
  if(action.type == 'ADD_TO_CART'){
  console.log("checking state", state);

  // Check if item already exists
  const existingItem = state.find(item => item._id === action.payload._id);

  if (existingItem) {
    // If exists → increase quantity
    const newState = state.map(item =>
      item._id === action.payload._id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    console.log("Item already exists, incrementing", newState);
    return newState;
  }

  // If not exists → add new item with quantity = 1
  const newItem = { ...action.payload, quantity: 1 };
  const newState = [...state, newItem];
  console.log("Added new item", newState);
  return newState;
  }
  if(action.type == 'REMOVE_FROM_CART'){
     console.log(' remove cart dispatcher called');
     const newState = state.filter(item => item._id !== action.payload)
     return newState;
  }
  if(action.type == 'CLEAR_FROM_CART'){
      console.log('Clear cart dispatcher called');
      return [];
  }
  if(action.type == 'INCREMENT_CART'){
     console.log('increment cart dispatcher called');
     let newState =  state.map(item => item._id === action.payload ? {
            ...item,quantity:item.quantity+1
        }  :item)
        console.log("incrementing cart",newState);
        
     return newState
  }
  if(action.type == 'DECREMENT_CART'){
      console.log('decrement cart dispatcher called');
      return state.map(item => item._id === action.payload && item.quantity > 1 ? 
            { ...item,quantity:item.quantity - 1}
            : item
      )
  }
}

function CartProvider({children}) {
    const [cart,setCart] = useState([])
     const {user}  = useAuth()
    const [cartstate,dispatch] = useReducer(cartReducer,cart)


    const fetchCart = async (userId) =>{
        try {
            const {data}  = await fetch(`http://localhost:5000/cart/${userId}`);
            console.log("data from backend",data);
            
            dispatch({type:"SET_CART",payload:data || []});
        } catch (err) {
            console.error("Error fetching cart:",err);
             
        }
    }




    const addToCart = (product)=> dispatch({type:'ADD_TO_CART',payload:product},
        console.log("Cart State",cartstate)
        
    )
    const removeFromCart = (_id)=> dispatch({type:'REMOVE_FROM_CART',payload:_id})
     const clearFromCart = (_id)=> dispatch({type:'CLEAR_FROM_CART',payload:_id})
      const incrementFromCart = (_id)=> dispatch({type:'INCREMENT_CART',payload:_id})
       const decrementFromCart = (_id)=> dispatch({type:'DECREMENT_CART',payload:_id})
        const CartTotal = ()=> dispatch({type:'CLEAR_FROM_CART'})


        useEffect(() => {
            console.log("inside useEffect ID",user?._id);
            
            fetchCart(user?._id)
         
        }, []);




    return(
        <CartContext.Provider value = {{cartstate,setCart,addToCart,removeFromCart, clearFromCart,incrementFromCart,decrementFromCart,CartTotal}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider

 export const useCart = () => useContext(CartContext)