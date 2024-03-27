import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Products } from "../../hooks/Products";

/* eslint-disable react/prop-types */
export default function ProductsSection({
  section_title,
  section_categories,
  section_extratext,
}) {
  const [currentSection, setCurrentSection] = useState(section_categories[0]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const { fetchProductsByLabelId } = Products();

  const handleSection = async (section) => {
    try {
      setCurrentSection(section);

      const products = await fetchProductsByLabelId(
        section_title.toLowerCase(),
        section.toLowerCase()
      );

      setCurrentProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSection(section_categories[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="px-12 md:px-20 py-12 md:py-24">
      <h2 className="text-xl font-bold my-4">{section_title}</h2>
      {/* md:flex flex-wrap space-x-10 text-md font-light mb-8 */}
      {/* grid grid-cols-2 gap-x-10 gap-y-6 justify-between text-md font-light mb-8  */}
      <article className="grid grid-cols-2 gap-x-10 gap-y-6 sm:flex sm:space-x-10 justify-between sm:justify-start text-md font-light mb-8 ">
        {section_categories.map((section, index) => (
          <button key={index} onClick={() => handleSection(section)}>
            <p
              className={`${
                currentSection === section
                  ? " inline-block border-black border-b-2"
                  : ""
              } py-2`}
            >
              {section}
              {section_extratext}
            </p>
          </button>
        ))}
      </article>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-6 justify-center justify-items-center">
        {currentProducts.map((product, index) => (
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
