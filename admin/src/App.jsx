
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import AddSignatureSeries from './components/Pages/AddSignatureSeries';


function App() {
 

  return (
    <>
     <BrowserRouter>
       <Navbar/>
 
      <Routes>
           <Route  path='/' element={ <Home/>} />
           <Route  path='/home' element={ <Home/>} />
            <Route  path='/signature-series' element={ <AddSignatureSeries/>} />
         
     </Routes> 
   
    
  </BrowserRouter>
      
    </>
  )
}

export default App
