import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../image/ImageWithFallback";
import {
  ArrowRightIcon,
  PlusIcon,
  BarChart3Icon,
  CheckCircleIcon,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Add Your Applications",
    description:
      "Simply input your job applications with company details, position, and application date.",
    icon: PlusIcon,
  },
  {
    number: "02",
    title: "Track Your Progress",
    description:
      "Monitor the status of each application from submission to interview to final decision.",
    icon: BarChart3Icon,
  },
  {
    number: "03",
    title: "Land Your Dream Job",
    description:
      "Stay organized, follow up effectively, and increase your chances of success.",
    icon: CheckCircleIcon,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="w-fit mx-auto">
            How it Works
          </Badge>
          <h2 className="text-3xl lg:text-5xl tracking-tight">
            Get started in
            <span className="text-primary"> 3 simple steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our intuitive platform makes job tracking effortless, so you can
            focus on what matters most.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                    {step.number}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <step.icon className="h-5 w-5 text-primary" />
                    <h3 className="text-xl">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Button size="lg" className="text-lg px-8">
                Start Your Job Search Journey
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl shadow-2xl border overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTc1NTUyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business dashboard and analytics"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-lg mb-2">Real-time dashboard</h4>
                <p className="text-sm opacity-90">
                  Monitor all your applications, interviews, and progress in one
                  beautiful dashboard.
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-lg p-3 shadow-lg">
              <div className="text-sm">Application Sent ✓</div>
            </div>

            <div className="absolute top-1/2 -left-4 bg-blue-500 text-white rounded-lg p-3 shadow-lg">
              <div className="text-sm">Interview Scheduled</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
