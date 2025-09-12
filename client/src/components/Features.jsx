import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  ClipboardListIcon,
  CalendarIcon,
  BarChart3Icon,
  BellIcon,
  FileTextIcon,
  UsersIcon,
} from "lucide-react";

const features = [
  {
    icon: ClipboardListIcon,
    title: "Application Tracking",
    description:
      "Keep track of every job application with detailed status updates, company information, and application dates.",
    badge: "Core Feature",
  },
  {
    icon: CalendarIcon,
    title: "Interview Scheduling",
    description:
      "Never miss an interview again. Schedule and manage all your interviews with built-in reminders.",
    badge: "Popular",
  },
  {
    icon: BarChart3Icon,
    title: "Analytics & Insights",
    description:
      "Get detailed insights into your job search progress with comprehensive analytics and reporting.",
    badge: "Pro Feature",
  },
  {
    icon: BellIcon,
    title: "Smart Reminders",
    description:
      "Automated follow-up reminders ensure you never miss important deadlines or follow-up opportunities.",
    badge: "Essential",
  },
  {
    icon: FileTextIcon,
    title: "Document Management",
    description:
      "Store and organize all your resumes, cover letters, and other documents in one secure place.",
    badge: "Useful",
  },
  {
    icon: UsersIcon,
    title: "Contact Management",
    description:
      "Keep track of recruiter contacts, hiring managers, and networking connections.",
    badge: "Network",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="w-fit mx-auto">
            Features
          </Badge>
          <h2 className="text-3xl lg:text-5xl tracking-tight">
            Everything you need to
            <span className="text-primary"> succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive suite of tools helps you stay organized, track
            progress, and land your dream job faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/20 transition-colors h-full"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
