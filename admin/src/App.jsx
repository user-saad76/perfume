
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddSignatureSeries from './Pages/AddSignatureSeries';
import { AdminAuthProvider } from "./contexts/AdminAuthProvider";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import AdminProtected from './Pages/AdminProtected';
import Orders from './Pages/Orders';


function App() {
 

  return (
    <>
     <AdminAuthProvider>
     <BrowserRouter>
         <AdminProtected><Navbar/></AdminProtected>
 
      <Routes>
           <Route  path='/' element={<AdminProtected><Home/></AdminProtected>} />
           <Route  path='/home' element={<AdminProtected><Home/></AdminProtected>} />
            <Route  path='/signature-series' element={ <AdminProtected><AddSignatureSeries/></AdminProtected> } />
             <Route  path='/sign-up' element={ <AdminProtected><SignUp/></AdminProtected> } />
             <Route  path='/sign-in' element={ <SignIn/>} />
               <Route  path='/orders' element={ <Orders/>} />

         
     </Routes> 
  </BrowserRouter>
  </AdminAuthProvider>
      
    </>
  )
}

export default App
