import { api } from "@/api/api";
import toast from "react-hot-toast";

export const handleSendOtp = async (email, setSendingOtp) => {
  if (!email) {
    toast.error("Please enter your email first");
    return;
  }
  setSendingOtp(true);
  try {
    const res = await api.post("/auth/send-reset-otp", { email });
    if (res.data.success) {
      toast.success("OTP sent to your email");
    } else {
      toast.error(res.data.message || "Failed to send OTP");
    }
  } catch (err) {
    toast.error(err.response?.data?.message || "Error sending OTP");
  } finally {
    setSendingOtp(false);
  }
};

export const handleResetPassword = async (e, newPassword, confirmNewPassword,setLoading, email, otp, navigate) => {
  e.preventDefault();
  if (newPassword !== confirmNewPassword) {
    toast.error("Passwords do not match");
    return;
  }
  setLoading(true);
  try {
    const response = await url.post("/auth/reset-password", {
      email,
      otp,
      newPassword,
    });

    if (response.data.success) {
      toast.success("Password reset successfully!");
      navigate("/login");
    } else {
      toast.error(response.data.message || "Password reset failed");
    }
  } catch (error) {
    toast.error(
      error.response?.data?.message ||
        "Password reset failed. Please try again."
    );
    console.error(
      "Password reset failed:",
      error.response?.data || error.message
    );
  } finally {
    setLoading(false);
  }
};
