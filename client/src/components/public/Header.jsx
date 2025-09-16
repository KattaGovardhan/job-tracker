import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white">JT</span>
              </div>
              <span className="text-xl text-foreground">JobTracker</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden md:inline-flex"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
            <Button onClick={() => navigate("/signup")}>Get Started</Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
