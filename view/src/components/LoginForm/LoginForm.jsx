import { useState } from "react";
import { Auth } from "../../hooks/Auth";
import Alert from "@mui/material/Alert";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const { userLogin } = Auth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    const { status } = await userLogin(payload);
    setStatus(status);
    return;
  };

  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      {status === "failed" ? (
        <Alert severity="error" className="w-full">
          Login Failed
        </Alert>
      ) : (
        ""
      )}

      <input
        type="text"
        placeholder="Email"
        required
        className="w-80 h-12 border-black border-2 rounded-md pl-4 pr-12 py-2 my-4 focus:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-80 h-12 border-black border-2 rounded-md pl-4 pr-12 py-2 my-4 focus:outline-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="w-full h-12 bg-black text-white text-sm text-center font-black p-2"
      >
        Log In
      </button>
    </form>
  );
}
