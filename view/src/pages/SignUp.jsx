import Logo from "../components/Logo/Logo";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import Or from "../components/Or/Or";
import SignOnGoogle from "../components/Buttons/SignOnGoogle";
import SignOnMicrosoft from "../components/Buttons/SignOnMicrosoft";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <main className="flex flex-col items-center justify-center font-mono py-8">
      <Logo size="large" />
      <h2 className="text-cent er text-xl font-semibold tracking-widest mb-2">
        Create an account
      </h2>
      <h2 className="text-center text-sm md:text-xl text-gray-400 font-semibold tracking-widest mb-4">
        Already have an account?{" "}
        <Link to="/auth/login">
          <span className="text-black hover:border-black hover:border-b-2">
            Sign In
          </span>
        </Link>
      </h2>
      <SignUpForm />
      <Or />
      <SignOnGoogle />
      <SignOnMicrosoft />
      <Link to="/">
        <p className="text-center text-xl text-gray-400 m-4">Back to home</p>
      </Link>
    </main>
  );
}
