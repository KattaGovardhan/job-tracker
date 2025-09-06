import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSideBar";
import Stats from "../jobtracker/Stats";

const Dashboard = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <main className="flex-1 p-4">
        {/* Mobile-only trigger */}
        <div className="md:hidden p-2">
          <SidebarTrigger />
        </div>

        {/* Main Content */}
        <Stats />
      </main>
    </SidebarProvider>
  );
};

export default Dashboard;
