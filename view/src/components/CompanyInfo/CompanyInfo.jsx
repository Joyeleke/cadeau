import SignUp from "../Buttons/SignUp";
import CompanyInfoImage from "./vlad-deep-XGMVbI8JwEg-unsplash.jpg";

export default function CompanyInfo() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 px-12 md:px-24 py-12 md:py-24">
      <article className="flex flex-col justify-between items-center lg:items-start">
        <h1 className="text-3xl font-black my-4 text-center lg:text-left">
          Cadeau: Give the Gift of Comfort
        </h1>
        <p className="my-2 text-center lg:text-left">
          Join us in making a lasting impact! By browsing and purchasing from
          {"Cadeau's"} shoe ecommerce platform, you contribute to a cycle of
          giving and help make a positive change in {"someone's"} life.
        </p>
        <p className="mt-2 mb-8 text-center lg:text-left">
          Your generosity not only provides comfort and support but also
          promotes sustainable practices by giving a new life to shoes that
          might otherwise go to waste. With Cadeau, you can shop for gently used
          shoes while supporting sustainability and community initiatives
          through online commerce.
        </p>
        <SignUp/>
      </article>
      <img
        src={CompanyInfoImage}
        alt="a woman presenting a gift"
        className="rounded-xl m-auto"
      />
    </section>
  );
}
