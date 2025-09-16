import { Outlet } from "react-router-dom";
import AppSideBar from "@/layout/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

function DashboardLayout() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSideBar />
        <SidebarTrigger />
        <div className="flex flex-col flex-1">
          <main className="flex-1 p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default DashboardLayout;
