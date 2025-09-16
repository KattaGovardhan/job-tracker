import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { CheckIcon } from "lucide-react";

const features = [
  "Unlimited job applications",
  "Full application status tracking",
  "Smart reminders & notifications",
  "Document storage (5GB)",
  "Interview scheduling",
  "Contact management",
  "Export your data anytime",
  "Priority support — for everyone",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="w-fit mx-auto">
            Pricing
          </Badge>
          <h2 className="text-3xl lg:text-5xl tracking-tight">
            One simple plan —
            <span className="text-primary"> everything is free</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            JobTracker is 100% free — all features, no hidden fees, no limits.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="relative border-primary shadow-lg">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground">
                Forever Free
              </Badge>
            </div>

            <CardHeader className="text-center space-y-4 pb-8">
              <CardTitle className="text-2xl">JobTracker</CardTitle>
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold tracking-tight">$0</span>
                  <span className="text-muted-foreground">/ forever</span>
                </div>
              </div>
              <CardDescription className="text-base">
                Get everything you need to organize and supercharge your job
                search — free for life.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full" size="lg">
                Get Started — It’s Free
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            No subscriptions • No credit card • Cancel nothing
          </p>
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <span>✓ All features included</span>
            <span>✓ 24/7 support</span>
            <span>✓ 99.9% uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
