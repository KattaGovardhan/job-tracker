import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await axios.post(
        `${baseUrl}/auth/register`,
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      );
      if (response.data.success) {
        toast.success("Sign up successful!");
      
        // Verify session before navigating
        const checkAuth = await axios.get(
          `${baseUrl}/auth/is-auth`,
          { withCredentials: true }
        );
      
        if (checkAuth.data.success) {
          navigate("/login");
        } else {
          toast.error("Authentication failed, please login again");
          navigate("/login");
        }
      } 
      else {
        toast.error(response.data.message || "Sign up failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Sign up failed");
      console.error("Sign up failed:", error.response?.data || error.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSignUp} className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="youremail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="***********"
              />
            </div>

            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 items-center">
          <CardAction className="w-full flex justify-center">
            <Button
              className="text-center cursor-pointer"
              variant="link"
              onClick={() => navigate("/login")}
            >
              Already have an account? Login
            </Button>
          </CardAction>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
