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
import { LogOut } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

import { menuItems } from "@/constants/constant";
import { handleLogout } from "@/services/handleLogout";

export default function AppSidebar() {
  const navigate = useNavigate();

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
            <SidebarMenuButton onClick={() => handleLogout(navigate)}>
              <LogOut className="text-xl" />
              <span className="text-sm">Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
