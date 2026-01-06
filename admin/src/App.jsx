
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
import AddFeaturedCollection from './Pages/AddFeaturedCollection';
import AddSpecialCollection from './Pages/AddSpecialCollection';
import AddMoreCollection from './Pages/AddMoreCollection';
import AddMenCollection from './Pages/AddMenCollection';
import AddWomenCollection from './Pages/AddWomenCollection';
import AddSecondMoreCollection from './Pages/AddSecondMoreCollection';


function App() {
 

  return (
    <>
     <AdminAuthProvider>
     <BrowserRouter>
       <Navbar/>
 
      <Routes>
           <Route  path='/' element={<Home/>} />
           <Route  path='/home' element={ <Home/>} />
            <Route  path='/signature-series' element={ <AddSignatureSeries/> } />
             <Route  path='/sign-up' element={ <SignUp/> } />
             <Route  path='/sign-in' element={ <SignIn/>} />
               <Route  path='/orders' element={<Orders/>} />
                <Route  path='/featured-collection' element={<AddFeaturedCollection/> } />
                <Route  path='/collection' element={<AddSpecialCollection/>} />
                <Route  path='/more-collection' element={<AddMoreCollection/>} />
                <Route  path='/men-collection' element={<AddMenCollection/>} />
                 <Route  path='/women-collection' element={<AddWomenCollection/>} />
                  <Route  path='/secondmore-collection' element={<AddSecondMoreCollection/>} />

         
     </Routes> 
  </BrowserRouter>
  </AdminAuthProvider>
      
    </>
  )
}

export default App
