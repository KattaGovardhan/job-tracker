import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      await axios.post(`${baseUrl}/jobs`, formData, { withCredentials: true });

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
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Role */}
            <div className="flex flex-col gap-2">
              <Label>Role</Label>
              <Input
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Software Engineer"
                required
              />
            </div>

            {/* Company */}
            <div className="flex flex-col gap-2">
              <Label>Company</Label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Google"
                required
              />
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2">
              <Label>Location</Label>
              <Input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Hyderabad / Remote"
              />
            </div>

            {/* Salary */}
            <div className="flex flex-col gap-2">
              <Label>Salary</Label>
              <Input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="50000"
              />
            </div>

            {/* Status + Job Type */}
            <div className="flex justify-between gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <Label>Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, status: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue>{formData.status}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {jobStatuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <Label>Job Type</Label>
                <Select
                  value={formData.jobType}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, jobType: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue>{formData.jobType}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {jobTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Applied Date */}
            <div className="flex flex-col gap-2">
              <Label>Applied Date</Label>
              <Input
                type="date"
                name="appliedDate"
                value={formData.appliedDate}
                onChange={handleChange}
              />
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Adding..." : "Add Job"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddJob;
