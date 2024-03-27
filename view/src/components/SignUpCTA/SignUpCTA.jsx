import SignUp from "../Buttons/SignUp";

export default function SignUpCTA() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-6 lg:py-12 flex text-center flex-col justify-center items-center">
      <h1 className="text-3xl font-black m-2">
        Join Cadeau for a Journey of Giving
      </h1>
      <p className="m-4 md:m-12">
        Ready to make a difference with every step? Sign in or log in to your
        Cadeau account now! Join our growing community of compassionate
        individuals who are dedicated to giving back. When you sign in,{" "}
        {"you'll"} have access to exclusive features and the ability to track
        your sustainability contribution history. Your journey of giving starts
        here.
      </p>
      <SignUp width="96" />
    </section>
  );
}
