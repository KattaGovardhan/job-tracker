import { api } from "@/api/api";
import toast from "react-hot-toast";

export const handleSignUp = async (
  e,
  setLoading,
  name,
  email,
  password,
  navigate
) => {
  e.preventDefault();
  setLoading(true);
  try {
    const response = await api.post("/auth/register", {
      name,
      email,
      password,
    });
    if (response.data.success) {
      toast.success("Sign up successful!");
      const checkAuth = await url.get("/auth/is-auth");

      if (checkAuth.data.success) {
        navigate("/job-tracker/dashboard");
      } else {
        toast.error("Authentication failed, please login again");
        navigate("/login");
      }
    } else {
      toast.error(response.data.message || "Sign up failed");
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "Sign up failed");
    console.error("Sign up failed:", error.response?.data || error.message);
  }
  setLoading(false);
};
