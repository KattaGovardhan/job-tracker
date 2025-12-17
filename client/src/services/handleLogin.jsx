import { api } from "@/api/api";
import toast from "react-hot-toast";
export const handleLogin = async (e, email, password, navigate, setLoading) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await api.post("/auth/login", { email, password });

    if (res.data.success) {
      toast.success("Login successful!");
      navigate("/job-tracker/dashboard");
    } else {
      toast.error(res.data.message || "Login failed");
    }
  } catch (err) {
    toast.error(err.response?.data?.message || "Login failed");
    console.error("Login failed:", err);
  } finally {
    setLoading(false);
  }
};
