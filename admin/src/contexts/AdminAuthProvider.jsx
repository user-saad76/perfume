import { createContext, useContext } from "react"
import { useFetch } from "../hooks/useFetch"

export const AuthContext = createContext();

function AuthProvider({children}) {
    const {Data,error,loading} = useFetch('http://localhost:5000//admin-users/admin')

    const logout = async () => {
    await fetch("http://localhost:5000/AdminUsers/log-out", {
      method: "GET",
      credentials: "include", // IMPORTANT if using cookies
    });
    window.location.href = '/'
  }

    return(
      <AuthContext.Provider value = {{admin:Data,error,loading,logout}}>
        {children}
      </AuthContext.Provider>
    )
}
export default AuthProvider


 export const useAuth = () => useContext(AuthContext)