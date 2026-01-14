import { useAdmin } from "../Contexts/AdminAuthProvider";
import { Navigate } from "react-router";

function AdminProtected({ children }) {
  const { admin, loading } = useAdmin();

  // 1. still loading
  if (loading) return <h1>Loading...</h1>;


  // 2. not logged in
  if (!admin || !admin._id) {
    return <Navigate to="/sign-in" />;
  }
  
   

  // 3. logged in: allow access
  return children;
}

export default AdminProtected;
