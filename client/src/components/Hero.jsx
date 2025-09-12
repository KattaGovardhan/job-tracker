import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckIcon, ArrowRightIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                🚀 Your Career Success Starts Here
              </Badge>
              <h1 className="text-4xl lg:text-6xl tracking-tight">
                Track Every Job Application with
                <span className="text-primary"> Precision</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Stay organized, follow up effectively, and land your dream job
                faster with our comprehensive job application tracking system.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Start Tracking for Free
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Watch Demo
              </Button>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Trusted by job seekers worldwide:
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span>Free forever plan</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span>Setup in 2 minutes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-2xl p-8 border">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559523182-a284c3fb7cff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBqb2IlMjBpbnRlcnZpZXclMjBvZmZpY2V8ZW58MXx8fHwxNzU3NjY1ODA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional job interview setting"
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-lg">
                  Land your dream job with organized tracking
                </p>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-4 -right-4 bg-card rounded-lg shadow-lg border p-4">
              <div className="text-center">
                <div className="text-2xl text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">
                  Jobs Tracked
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card rounded-lg shadow-lg border p-4">
              <div className="text-center">
                <div className="text-2xl text-green-500">85%</div>
                <div className="text-sm text-muted-foreground">
                  Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
