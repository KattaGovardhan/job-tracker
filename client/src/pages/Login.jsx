import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;

      const response = await axios.post(`${baseUrl}/auth/login`, {
        email,
        password,
      });
      if (response.data.success) {
        const token = response.data.token;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        navigate("/dashboard");
      } else {
        // Login failed
        alert(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleLogin}>
          <CardContent>
            <div className="flex flex-col gap-6">
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
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Button
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    variant="link"
                    type="button"
                    onClick={() => navigate("/reset-password")}
                  >
                    Forgot Password?
                  </Button>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="***********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col items-center gap-4">
            <Button type="submit" className="w-full cursor-pointer">
              Login
            </Button>

            <CardAction className="w-full flex justify-center">
              <Button
                variant="link"
                className="text-center text-sm cursor-pointer"
                type="button"
                onClick={() => navigate("/signup")}
              >
                Don’t have an account? Sign Up
              </Button>
            </CardAction>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
