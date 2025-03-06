import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    // Add your authentication logic here
    const isAuthenticated = true; // Replace with actual authentication logic
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="rounded-lg bg-white w-80 text-center p-4 shadow-lg">
        <Heading label="Sign in" />
        <SubHeading label="Enter your credentials to access your account" />

        <InputBox
          placeholder="chiru@gmail.com"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputBox
          placeholder="123456"
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="pt-4">
          <Button label="Sign in" onClick={handleSignIn} />
        </div>

        <BottomWarning label="Don't have an account?" buttonText="Sign up" to="/signup" />
      </div>
    </div>
  );
};
