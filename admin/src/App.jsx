
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddSignatureSeries from './Pages/AddSignatureSeries';
import AuthProvider from './contexts/AdminAuthProvider';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';


function App() {
 

  return (
    <>
     <AuthProvider>
     <BrowserRouter>
       <Navbar/>
 
      <Routes>
           <Route  path='/' element={ <Home/>} />
           <Route  path='/home' element={ <Home/>} />
            <Route  path='/signature-series' element={ <AddSignatureSeries/>} />
             <Route  path='/sign-up' element={ <SignUp/>} />
             <Route  path='/sign-in' element={ <SignIn/>} />
         
     </Routes> 
  </BrowserRouter>
  </AuthProvider>
      
    </>
  )
}

export default App
