import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Login({ width }) {
  return (
    <Link to="auth/login">
      <button
        className={`${
          width === "full" ? "w-full" : "w-32"
        } h-10 border-black border-2 rounded-md text-sm text-center p-2`}
      >
        Login
      </button>
    </Link>
  );
}
