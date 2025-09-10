import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = () => {
  const [auth, setAuth] = useState(null); // null = loading

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const res = await axios.get(`${baseUrl}/auth/is-auth`, {
          withCredentials: true,
        });
        setAuth(res.data.success);
      } catch {
        setAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (auth === null) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>; // show spinner while checking
  }

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;