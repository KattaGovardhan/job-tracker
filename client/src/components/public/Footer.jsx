import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { TwitterIcon, LinkedinIcon, GithubIcon } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Demo", href: "#" },
    { name: "API", href: "#" },
  ],
  Company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ],
  Resources: [
    { name: "Help Center", href: "#" },
    { name: "Contact Support", href: "#" },
    { name: "Status", href: "#" },
    { name: "Changelog", href: "#" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {/* Logo and description */}
            <div className="col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white">JT</span>
                </div>
                <span className="text-xl text-foreground">JobTracker</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                The most comprehensive job application tracking platform to help
                you land your dream job faster.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="p-2">
                  <TwitterIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <LinkedinIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <GithubIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Footer links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="text-sm text-foreground">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 JobTracker. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Made with ❤️ for job seekers</span>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Security
            </a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
