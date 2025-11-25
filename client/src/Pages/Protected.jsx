import { useAuth } from "../contexts/authProvider"
import { Navigate } from "react-router"

function Protected({children}) {
   const {user,error,loading} = useAuth()

   if(loading) return <h1>Loading....</h1>
   if(error) return <h1>Something went wrong</h1>
   if(!user || !user.name) return <Navigate to='/' replace/>
    return children
    
}
export default Protected