import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, CheckCircle2, UserCheck, XCircle } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const Dashboard = () => {
  const [stats, setStats] = useState({
    applied: 0,
    shortlisted: 0,
    interview: 0,
    rejected: 0,
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;

        // 1. Fetch stats
        const { data } = await axios.get(`${baseUrl}/user/stats-count`, {
          withCredentials: true,
        });

        if (data.success) {
          setStats({
            applied: data.data.totalApplied,
            shortlisted: data.data.totalShortlisted,
            interview: data.data.interviewJobs,
            rejected: data.data.rejectedJobs,
          });
        }

        // 2. Fetch user
        const userRes = await axios.get(`${baseUrl}/profile`, {
          withCredentials: true,
        });
        if (userRes.data.success) {
          setUser(userRes.data.profile.user);
        }
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };
    fetchStats();
  }, []);

  // Stats cards
  const cards = [
    {
      title: "Total Applied",
      value: stats.applied,
      icon: Briefcase,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Shortlisted",
      value: stats.shortlisted,
      icon: CheckCircle2,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Interview",
      value: stats.interview,
      icon: UserCheck,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    {
      title: "Rejected",
      value: stats.rejected,
      icon: XCircle,
      color: "text-red-600",
      bg: "bg-red-100",
    },
  ];

  const pieData = [
    { name: "Applied", value: stats.applied },
    { name: "Shortlisted", value: stats.shortlisted },
    { name: "Interview", value: stats.interview },
    { name: "Rejected", value: stats.rejected },
  ];

  const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

  const barData = [
    {
      name: "Jobs",
      Applied: stats.applied,
      Shortlisted: stats.shortlisted,
      Interview: stats.interview,
      Rejected: stats.rejected,
    },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Greeting */}
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        Welcome back,{" "}
        <span className="text-blue-600">{user?.name || "User"}</span> 👋
      </h1>
      <p className="text-center text-gray-500">
        Here’s an overview of your job applications
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Card
            key={card.title}
            className="shadow-lg rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className={`text-lg font-semibold ${card.color}`}>
                {card.title}
              </CardTitle>
              <div className={`p-3 rounded-full ${card.bg}`}>
                <card.icon className={`h-6 w-6 ${card.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <p className={`text-4xl font-bold ${card.color}`}>{card.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <Card className="p-4 shadow-lg border border-gray-100 rounded-2xl">
          <CardHeader>
            <CardTitle
              className={"text-lg font-semibold text-center text-gray-600"}
            >
              Applications Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card className="p-4 shadow-lg border border-gray-100 rounded-2xl">
          <CardHeader>
            <CardTitle
              className={"text-lg font-semibold text-center text-gray-600"}
            >
              Applications Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Applied" fill="#3B82F6" />
                <Bar dataKey="Shortlisted" fill="#10B981" />
                <Bar dataKey="Interview" fill="#F59E0B" />
                <Bar dataKey="Rejected" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
