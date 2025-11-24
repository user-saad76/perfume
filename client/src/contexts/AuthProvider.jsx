import { createContext, useContext } from "react"
import { useFetch } from "../hooks/useFetch"

export const AuthContext = createContext();

function AuthProvider({children}) {
    const {Data,error,loading} = useFetch('http://localhost:5000/users/me')
     const {Data:logout} = useFetch('http://localhost:5000/users/log-out')
    return(
      <AuthContext.Provider value = {{user:Data,error,loading}}>
        {children}
      </AuthContext.Provider>
    )
}
export default AuthProvider


 export const useAuth = () => useContext(AuthContext)