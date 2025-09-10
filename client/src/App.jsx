import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/routes/ProtectedRoute";

import Home from "@/pages/Home";
import Login from "@/features/auth/Login";
import SignUp from "@/features/auth/SignUp";

import DashboardLayout from "@/components/layout/DashboardLayout";
import Dashboard from "@/features/jobs/Dashboard";
import AllJobs from "@/features/jobs/AllJobs";
import AddJob from "@/features/jobs/AddJob";
import { Toaster } from "react-hot-toast";
import Profile from "@/features/profile/Profile";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/job-tracker" element={<DashboardLayout />}>
            <Route index path="dashboard" element={<Dashboard />} />
            <Route path="jobs" element={<AllJobs />} />
            <Route path="add-job" element={<AddJob />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
