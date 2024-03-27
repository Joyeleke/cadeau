import Logo from "../components/Logo/Logo";
import SignOnGoogle from "../components/Buttons/SignOnGoogle";
import SignOnMicrosoft from "../components/Buttons/SignOnMicrosoft";
import Or from "../components/Or/Or";
import LoginForm from "../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center font-mono py-16 ">
      <Logo size="large" />
      <h2 className="text-center text-sm md:text-xl text-gray-400 font-semibold tracking-widest mt-4 mb-8">
        Do not have an account?{" "}
        <Link to="/auth/register">
          <span className="text-black hover:border-black hover:border-b-2">
            Sign Up
          </span>
        </Link>
      </h2>
      <LoginForm />
      <Or />
      <SignOnGoogle />
      <SignOnMicrosoft />
      <Link to="/">
        <p className="text-center text-xl text-gray-400 m-4">Back to home</p>
      </Link>
    </main>
  );
}
