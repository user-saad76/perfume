
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from './components/Navbar'
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import DetailPage from './Pages/DetailPage';
import SignUp from './Pages/SignUp';



function App() {
  
 

  return (
    <>
    <BrowserRouter>
       <Navbar/>
     <Routes>
         <Route  path='/' element={ <Home/>} />
           <Route  path='/home' element={ <Home/>} />
          <Route  path='/shop' element={ <Shop/>} />
          <Route  path='/signature-series/:slug' element={ <DetailPage/>} />
           <Route  path='/sign-up' element={ <SignUp/>} />
           
     </Routes>
   
    
  </BrowserRouter>, 
    </>
  )
}

export default App
