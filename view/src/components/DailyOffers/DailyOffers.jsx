import SecondaryBtn from "../Buttons/SecondaryBtn";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Products } from "../../hooks/Products";

export default function DailyOffers() {
  const [products, setProducts] = useState([]);
  const { fetchProductsByLabel } = Products();

  const getOfferProducts = async () => {
    try {
      const data = await fetchProductsByLabel("offers");
      if (data) {
        setProducts(data);
      } else {
        console.log("Error fetching products by label");
      }
    } catch (error) {
      console.error("Error fetching products by label:", error);
    }
  };

  useEffect(() => {
    getOfferProducts();
  });

  return (
    <section className="px-8 md:px-16 py-6 md:py-12">
      <article className="flex justify-between mb-12 px-8">
        <SecondaryBtn btn_text="Offers" />
        <Link to="/products">
          <p>View More</p>
        </Link>
      </article>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 justify-center justify-items-center">
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
