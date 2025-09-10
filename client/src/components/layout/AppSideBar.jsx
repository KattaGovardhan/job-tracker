import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Settings,
  LogOut,
  ChartColumnStacked,
  DockIcon,
  Plus,
  User,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const menuItems = [
  {
    title: "Dashboard",
    url: "/job-tracker/dashboard",
    icon: ChartColumnStacked,
  },
  { title: "All Jobs", url: "/job-tracker/jobs", icon: DockIcon },
  { title: "Add Job", url: "/job-tracker/add-job", icon: Plus },
  { title: "Profile", url: "/job-tracker/profile", icon: User },
];

export default function AppSidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      await axios.post(`${baseUrl}/auth/logout`, {}, { withCredentials: true });
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
      console.error("Logout failed:", error);
    }
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <Link
          to="/job-tracker/dashboard"
          className="block text-xl font-bold text-center text-blue-500"
        >
          Your Job Tracker
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className=" hover:bg-blue-500 hover:text-white"
                  >
                    <Link to={item.url}>
                      <item.icon className="text-xl" />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleLogout}>
              <LogOut className="text-xl" />
              <span className="text-sm">Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
