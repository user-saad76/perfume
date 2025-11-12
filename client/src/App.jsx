
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from './components/Navbar'
import Home from './Pages/Home';
import Shop from './Pages/Shop';

function App() {
  

  return (
    <>
    <BrowserRouter>
       <Navbar/>
     <Routes>
         <Route  path='/' element={ <Home/>} />
           <Route  path='/home' element={ <Home/>} />
          <Route  path='/shop' element={ <Shop/>} />
     </Routes>
   
    
  </BrowserRouter>, 
    </>
  )
}

export default App
