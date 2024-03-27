import PrimaryBtn from "../Buttons/PrimaryBtn";

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center bg-black text-white font-mono px-8 md:px-16 py-12 md:py-24 mb-0">
      <article>
        <h2 className="text-3xl my-8">Cadeau</h2>
      </article>
      <ul className="flex flex-row flex-wrap items-center justify-center space-x-3 md:space-x-12 md:space-y-0 my-4">
        <li>Home</li>
        <li>Shop</li>
        <li>Featured</li>
        <li>Accessories</li>
        <li>Deals</li>
      </ul>
      <article className="flex space-x-4 my-4">
        <PrimaryBtn btn_text="Contact Us" />
        <PrimaryBtn btn_text="About Us" />
      </article>
    </footer>
  );
}
