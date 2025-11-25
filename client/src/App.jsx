
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




function App() {
  
  // const {Data:user,error,loading} = useFetch('http://localhost:5000/users/me')
  // console.log("User-data",user);
  
 
 

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
       <Navbar />
     <Routes>
         <Route  path='/' element={ <Home/>} />
           <Route  path='/home' element={ <Home/>} />
          <Route  path='/shop' element={ <Shop/>} />
          <Route  path='/signature-series/:slug' element={ <DetailPage/>} />
           <Route  path='/sign-up' element={ <SignUp/>} />
           <Route  path='/sign-in' element={ <SignIn/>} />
            <Route  path='/dashboard' element={<Protected><Dashboard/></Protected> } />
           
     </Routes>
  </BrowserRouter>
    </AuthProvider>
    
    </>
  )
}

export default App
