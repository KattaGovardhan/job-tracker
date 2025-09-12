import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="relative overflow-hidden border-2">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />

          <CardContent className="relative p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <SparklesIcon className="h-6 w-6 text-primary" />
                    <span className="text-primary">
                      Ready to transform your job search?
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-5xl tracking-tight">
                    Start tracking your applications
                    <span className="text-primary"> today</span>
                  </h2>

                  <p className="text-xl text-muted-foreground">
                    Join thousands of job seekers who have already organized
                    their search and landed their dream jobs with JobTracker.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Get Started Free
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8">
                    Schedule Demo
                  </Button>
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-background text-sm">
                      👨‍💼
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-background text-sm">
                      👩‍💻
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-background text-sm">
                      👨‍🎓
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-background text-xs">
                      +5k
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Trusted by 5,000+ job seekers
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-card rounded-2xl shadow-2xl border overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1617035969161-f6d66f95445e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZW1vdGUlMjB3b3JrJTIwbGFwdG9wfGVufDF8fHx8MTc1NzU3MDM3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Remote work with laptop"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>

                {/* Success notification */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-lg p-4 shadow-lg animate-pulse">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span className="text-sm">Job Offer Received!</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
