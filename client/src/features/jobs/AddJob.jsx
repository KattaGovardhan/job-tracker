// pages/AddJob.jsx
import React, { useState } from "react";
import { url } from "@/api/api";
import toast from "react-hot-toast";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import JobForm from "@/components/JobForm";

const jobStatuses = ["applied", "shortlisted", "interview", "rejected"];
const jobTypes = ["full-time", "part-time", "contract"];

const AddJob = () => {
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    location: "",
    status: "applied",
    salary: "",
    jobType: "full-time",
    appliedDate: new Date().toISOString().split("T")[0],
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await url.post("/jobs", formData);

      toast.success(`Job "${formData.role}" at ${formData.company} added!`);
      setFormData({
        role: "",
        company: "",
        location: "",
        status: "applied",
        salary: "",
        jobType: "full-time",
        appliedDate: new Date().toISOString().split("T")[0],
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to add job. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-lg shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600 text-center">
            Add New Job
          </CardTitle>
        </CardHeader>
        <CardContent>
          <JobForm
            formData={formData}
            loading={loading}
            onChange={handleChange}
            onSelectChange={handleSelectChange}
            onSubmit={handleSubmit}
            jobStatuses={jobStatuses}
            jobTypes={jobTypes}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AddJob;
