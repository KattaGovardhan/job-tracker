// components/JobForm.jsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const JobForm = ({
  formData,
  loading,
  onChange,
  onSelectChange,
  onSubmit,
  jobStatuses,
  jobTypes,
}) => (
  <form onSubmit={onSubmit} className="space-y-4">
    {/* Role */}
    <div className="flex flex-col gap-2">
      <Label>Role</Label>
      <Input
        name="role"
        value={formData.role}
        onChange={onChange}
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
        onChange={onChange}
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
        onChange={onChange}
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
        onChange={onChange}
        placeholder="50000"
      />
    </div>

    {/* Status + Job Type */}
    <div className="flex justify-between gap-4">
      <div className="flex flex-col gap-2 flex-1">
        <Label>Status</Label>
        <Select
          value={formData.status}
          onValueChange={(value) => onSelectChange("status", value)}
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
          onValueChange={(value) => onSelectChange("jobType", value)}
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
        onChange={onChange}
      />
    </div>

    <Button type="submit" className="w-full" disabled={loading}>
      {loading ? "Adding..." : "Add Job"}
    </Button>
  </form>
);

export default JobForm;
