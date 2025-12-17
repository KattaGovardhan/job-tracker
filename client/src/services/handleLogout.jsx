import { api } from "@/api/api";
import { toast } from "react-toastify";

export const handleLogout = async (navigate) => {
  try {
    await api.post("/auth/logout");
    toast.success("Logged out successfully");
    navigate("/login");
  } catch (error) {
    toast.error(error.response?.data?.message || "Logout failed");
    console.error("Logout failed:", error);
  }
};
