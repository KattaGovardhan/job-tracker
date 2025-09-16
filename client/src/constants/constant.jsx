import { ChartColumnStacked, DockIcon, Plus, User } from "lucide-react";


export const menuItems = [
  {
    title: "Dashboard",
    url: "/job-tracker/dashboard",
    icon: ChartColumnStacked,
  },
  { title: "All Jobs", url: "/job-tracker/jobs", icon: DockIcon },
  { title: "Add Job", url: "/job-tracker/add-job", icon: Plus },
  { title: "Profile", url: "/job-tracker/profile", icon: User },
];
