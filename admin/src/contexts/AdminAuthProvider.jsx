import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  // Auto fetch admin if token exists
  const { Data, loading } = useFetch(
    "http://localhost:5000/admin-users/admin",
    { method: "GET", credentials: "include" }
  );

  useEffect(() => {
    if (Data && Data._id) {
      setAdmin(Data);
    }
  }, [Data]);

  // Admin Login Function
  const loginAdmin = async (email, password) => {
    try {
      const res = await fetch(
        "http://localhost:5000/admin-users/Admin-signin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include", // 🔥 VERY IMPORTANT
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      if (data.success) {
        // Fetch admin after login
        const adminRes = await fetch(
          "http://localhost:5000/admin-users/admin",
          { credentials: "include" }
        );
        const adminData = await adminRes.json();
        setAdmin(adminData);
      }

      return data;
    } catch (error) {
      return { success: false, message: "Login failed" };
    }
  };

  // Logout Function
  const logoutAdmin = async () => {
    await fetch("http://localhost:5000/AdminUsers/log-out", {
      method: "GET",
      credentials: "include",
    });
    setAdmin(null);
  };

  return (
    <AdminAuthContext.Provider
      value={{
        admin,
        loginAdmin,
        logoutAdmin,
        loading,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminAuthContext);
