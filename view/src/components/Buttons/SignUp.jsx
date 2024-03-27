import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function SignUp({ width }) {
  return (
    <Link to="/auth/register">
      <button
        className={`${
          width === "full" ? "w-full" : "w-32"
        } h-10 bg-black rounded-md text-sm text-white text-center font-black p-2 hover:cursor-pointer"`}
      >
        Sign Up
      </button>
    </Link>
  );
}
