import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Products } from "../../hooks/Products";

export default function PrimePicks() {
  const [products, setProducts] = useState([]);
  const [label, setLabel] = useState("trending");
  const { fetchProductsByLabel } = Products();

  const handleLabel = async (label) => {
    try {
      const data = await fetchProductsByLabel(label);
      if (data) {
        setProducts(data);
        setLabel(label);
      } else {
        console.log("Error fetching products by label");
      }
    } catch (error) {
      console.error("Error fetching products by label:", error);
    }
  };

  useEffect(() => {
    handleLabel(label);
  });

  return (
    <section className="px-8 md:px-16 py-12 md:py-24">
      <article className="flex justify-center md:justify-between mb-12">
        <div className="grid grid-cols-2 gap-x-12 sm:gap-x-24 md:gap-x-6 gap-y-4 justify-center items-center md:flex md:space-x-6">
          <button
            className={`${
              label === "trending"
                ? "bg-black text-white"
                : "bg-white text-black border-black border-2"
            } w-36 h-12 text-sm text-center font-black p-2"`}
            onClick={() => handleLabel("trending")}
          >
            Trending
          </button>
          <button
            className={`${
              label === "arriving"
                ? "bg-black text-white"
                : "bg-white text-black border-black border-2"
            } w-36 h-12 text-sm text-center font-black p-2"`}
            onClick={() => handleLabel("arriving")}
          >
            Arriving
          </button>
          <button
            className={`${
              label === "popular"
                ? "bg-black text-white"
                : "bg-white text-black border-black border-2"
            } w-36 h-12 text-sm text-center font-black p-2"`}
            onClick={() => handleLabel("popular")}
          >
            Popular
          </button>
          <Link to="/products">
            <p className="md:hidden place-self-center text-center hover:cursor-pointer">
              View More &#x2192;
            </p>
          </Link>
        </div>
        <Link to="/products">
          <p className="hidden md:inline-block">View More &#x2192;</p>
        </Link>
      </article>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-6 justify-center justify-items-center">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product_id={product.id}
            product_name={product.name}
            product_price={product.price}
            product_description={product.description}
            colors_available={product.colors_available}
            isBestSeller={product.best_seller}
            image_url={product.image_url}
          />
        ))}
      </div>
    </section>
  );
}
