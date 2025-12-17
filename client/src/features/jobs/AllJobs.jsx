import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarIcon,
  MapPinIcon,
  SearchIcon,
  Pencil,
  Trash,
  Building,
  ClockIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { api } from "@/api/api";

const statusColors = {
  applied: "bg-blue-100 text-blue-800",
  shortlisted: "bg-yellow-100 text-yellow-800",
  interview: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

const jobStatuses = ["all", "applied", "shortlisted", "interview", "rejected"];
const jobTypes = ["all", "full-time", "part-time", "contract"];

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [jobType, setJobType] = useState("all");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Edit modal state
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  // Confirmation dialog state for deletion
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);
  const [apiError, setApiError] = useState("");

  // Debounce search input to prevent excessive API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  // Function to fetch jobs from the API
  const fetchJobs = async () => {
    setLoading(true);
    setApiError("");
    try {
      const response = await api.get("/jobs", {
        params: { search: debouncedSearch, status, jobType, page, limit: 6 },
      });

      const jobsArray = Array.isArray(response.data)
        ? response.data
        : response.data.jobs || [];

      setJobs(jobsArray);
      setTotalPages(response.data.totalPages || 1);
    } catch (err) {
      setError("Failed to fetch jobs");
      console.error(err.response || err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [debouncedSearch, status, jobType, page]);

  // Handle edit form submission
  const handleEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const updatedJob = {
      role: formData.get("role"),
      company: formData.get("company"),
      location: formData.get("location"),
      salary: Number(formData.get("salary")),
      status: formData.get("status"),
    };

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      await axios.put(`${baseUrl}/jobs/${editingJob._id}`, updatedJob, {
        withCredentials: true,
      });
      setIsEditOpen(false);
      setEditingJob(null);
      fetchJobs();
    } catch (err) {
      console.error("Edit failed:", err.response?.data || err.message);
      setApiError(err.response?.data?.error || "Failed to update job");
    }
  };

  // Open the confirmation dialog for deletion
  const handleDeleteClick = (jobId) => {
    setJobToDelete(jobId);
    setIsConfirmOpen(true);
  };

  // Perform the actual delete operation
  const confirmDelete = async () => {
    setIsConfirmOpen(false);
    if (!jobToDelete) return;

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      await axios.delete(`${baseUrl}/jobs/${jobToDelete}`, {
        withCredentials: true,
      });
      setJobs((prev) => prev.filter((job) => job._id !== jobToDelete));
      setJobToDelete(null);
    } catch (err) {
      console.error("Delete failed:", err.response?.data || err.message);
      setApiError(err.response?.data?.error || "Failed to delete job");
    }
  };

  if (loading)
    return <p className="text-center mt-10 text-gray-500">Loading jobs...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-6 space-y-6">
      {/* 🔍 Search + Filters */}
      <div className="sticky top-0 bg-white z-10 shadow-sm rounded-lg p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2 w-full sm:w-1/3">
          <SearchIcon className="w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-full"
          />
        </div>

        <div className="flex gap-4 w-full sm:w-auto">
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-[140px] rounded-full">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {jobStatuses.map((s) => (
                <SelectItem key={s} value={s}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={jobType} onValueChange={setJobType}>
            <SelectTrigger className="w-[140px] rounded-full">
              <SelectValue placeholder="Job type" />
            </SelectTrigger>
            <SelectContent>
              {jobTypes.map((t) => (
                <SelectItem key={t} value={t}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="ghost"
            onClick={() => {
              setSearch("");
              setStatus("all");
              setJobType("all");
              setPage(1);
            }}
            className="rounded-full"
          >
            Reset
          </Button>
        </div>
      </div>

      {apiError && <p className="text-center text-red-500">{apiError}</p>}

      {/* 📄 Jobs List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No jobs found
          </p>
        ) : (
          jobs.map((job) => (
            <Card
              key={job._id}
              className="rounded-xl border hover:shadow-lg transition relative"
            >
              <Badge
                className={`absolute top-4 right-4 ${statusColors[job.status]}`}
              >
                {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
              </Badge>
              <CardHeader>
                <CardTitle className={"text-blue-600"}>{job.role}</CardTitle>
                <div className="flex items-center gap-2">
                  <Building className="size-4" />
                  <CardDescription className={"font-bold text-gray-700"}>
                    {job.company}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 space-y-2">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 rounded-full px-3 py-1"
                  >
                    <MapPinIcon className="w-4 h-4 text-gray-500" />
                    <span>{job.location || "Remote"}</span>
                  </Badge>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 rounded-full px-3 py-1"
                  >
                    <CalendarIcon className="w-4 h-4 text-gray-500" />
                    <span>
                      {new Date(job.appliedDate).toLocaleDateString()}
                    </span>
                  </Badge>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 rounded-full px-3 py-1"
                  >
                    <ClockIcon className="w-4 h-4 text-gray-500" />
                    <span>{job.jobType}</span>
                  </Badge>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 rounded-full px-3 py-1"
                  >
                    <span>₹ {job.salary}</span>
                  </Badge>
                </div>
              </CardContent>
              <div className="flex justify-end gap-2 p-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full"
                  onClick={() => {
                    setEditingJob(job);
                    setIsEditOpen(true);
                  }}
                >
                  <Pencil className="w-4 h-4 mr-1" /> Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  className="rounded-full"
                  onClick={() => handleDeleteClick(job._id)}
                >
                  <Trash className="w-4 h-4 mr-1" /> Delete
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>

      {/* 📑 Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="rounded-full"
        >
          Previous
        </Button>
        <span className="font-medium">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className="rounded-full"
        >
          Next
        </Button>
      </div>

      {/* ✏️ Edit Job Modal */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Job</DialogTitle>
          </DialogHeader>
          {editingJob && (
            <form onSubmit={handleEdit} className="space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="role">Role</label>
                <Input
                  name="role"
                  defaultValue={editingJob.role}
                  placeholder="Role"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="company">Company</label>
                <Input
                  name="company"
                  defaultValue={editingJob.company}
                  placeholder="Company"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="location">Location</label>
                <Input
                  name="location"
                  defaultValue={editingJob.location}
                  placeholder="Location"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="salary">Salary</label>
                <Input
                  name="salary"
                  type="number"
                  defaultValue={editingJob.salary}
                  placeholder="Salary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="status">Status</label>
                <Select name="status" defaultValue={editingJob.status}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {["applied", "shortlisted", "interview", "rejected"].map(
                      (s) => (
                        <SelectItem key={s} value={s}>
                          {s.charAt(0).toUpperCase() + s.slice(1)}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>

              <DialogFooter>
                <Button type="submit" className="rounded-full">
                  Save Changes
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* 🗑️ Delete Confirmation Dialog */}
      <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Are you sure you want to delete this job application? This action
            cannot be undone.
          </DialogDescription>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsConfirmOpen(false)}
              className="rounded-full"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={confirmDelete}
              className="rounded-full"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AllJobs;
