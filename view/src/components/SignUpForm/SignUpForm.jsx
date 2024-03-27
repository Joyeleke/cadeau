import { useState } from "react";
import { newUserSignUp } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { status, message } = await newUserSignUp(
        firstName,
        lastName,
        email,
        password
      );

      if (status === "success") {
        navigate("/auth/login");
      } else {
        setErrorMessage(message);
        setStatus(status);
      }
    } catch (error) {
      setErrorMessage("Failed to complete registration");
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      {status === "failed" ? (
        <Alert severity="error" className="w-full">
          {errorMessage}
        </Alert>
      ) : (
        ""
      )}

      <input
        type="text"
        placeholder="First Name"
        className="w-80 h-12 border-black border-2 rounded-md pl-4 pr-12 py-2 my-4 focus:outline-none"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        className="w-80 h-12 border-black border-2 rounded-md pl-4 pr-12 py-2 my-4 focus:outline-none"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Email"
        className="w-80 h-12 border-black border-2 rounded-md pl-4 pr-12 py-2 my-4 focus:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-80 h-12 border-black border-2 rounded-md pl-4 pr-12 py-2 my-4 focus:outline-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button
        type="submit"
        className="w-full h-12 bg-black text-white text-sm text-center font-black p-2"
      >
        Sign Up
      </button>
    </form>
  );
}
