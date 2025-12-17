import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { api } from "@/api/api";

const ProtectedRoute = () => {
  const [auth, setAuth] = useState(null); // null = loading

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get("/auth/is-auth");
        setAuth(res.data.success);
      } catch {
        setAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (auth === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    ); // show spinner while checking
  }

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
