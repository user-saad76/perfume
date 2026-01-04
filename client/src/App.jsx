
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from './components/Navbar'
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import DetailPage from './Pages/DetailPage';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
//import { useFetch } from './hooks/useFetch';
import AuthProvider from './contexts/authProvider';
import Dashboard from './Pages/Dashboard';
import Protected from './Pages/Protected';
import CartProvider from './contexts/CartProvider';
import ShoppingCart from './Pages/ShoppingCart';
import Checkout from './Pages/Checkout';
import OrderDetail from './Pages/OrderDetail';
import FeaturedDetails from './Pages/FeaturedDetails';
//import SpecialCollections from './components/SpecialCollections';
import SpecialCollection from './Pages/SpecialCollection';
import SpecialCollectionDetails from './Pages/SpecialCollectionDetails';
import MenCollection from './Pages/MenCollection';





function App() {
  
  // const {Data:user,error,loading} = useFetch('http://localhost:5000/users/me')
  // console.log("User-data",user);
  
 
 

  return (
    <>
    
    <AuthProvider>
       <CartProvider>
      <BrowserRouter>
       <Navbar />
     <Routes>
         <Route  path='/' element={ <Home/>} />
           <Route  path='/home' element={ <Home/>} />
          <Route  path='/shop' element={ <Shop/>} />
          <Route  path='/signature-series/:slug' element={ <DetailPage/>} />
           <Route  path='/special-collection/:slug' element={ <SpecialCollectionDetails/>} />
           <Route  path='/featured-collection/:slug' element={ <FeaturedDetails/>} />
           <Route  path='/sign-up' element={ <SignUp/>} />
           <Route  path='/sign-in' element={ <SignIn/>} />
            <Route  path='/dashboard' element={<Protected><Dashboard/></Protected> } />
              <Route  path='/shopping-cart' element={<Protected><ShoppingCart/></Protected> } />
               <Route  path='/checkout' element={ <Checkout/>} />
                <Route  path='/order-details' element={ <OrderDetail/>} />
                <Route  path='/special-collection' element={ <SpecialCollection/>} />
                 <Route  path='/men-collection' element={ <MenCollection/>} />
     </Routes>
  </BrowserRouter>
   </CartProvider>
  </AuthProvider>
 
    
    
    </>
  )
}

export default App
