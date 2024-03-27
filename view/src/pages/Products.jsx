import DealsCarousel from "../components/DealsCarousel/DealsCarousel";
import Footer from "../components/Footer/Footer";
import NavTwo from "../components/Nav/NavTwo";
import PromoImage from "./images/gianandrea-villa-t4cSB-InqGY-unsplash.jpg";
import MaleModelOne from "./images/avat-fathiazar-DPesb1g_iEo-unsplash.jpg";
import MaleModelTwo from "./images/sab-qadeer-IlpMdlcSALQ-unsplash.jpg";
import ProductsSection from "../components/ProductsSection/ProductsSection";

export default function Products() {
  return (
    <>
      <header className="font-mono">
        <NavTwo />
        <hr className="w-full h-0.5 bg-black border-0" />
        <DealsCarousel />
      </header>

      <main className="font-mono">
        <ProductsSection
          section_title="Deals"
          section_categories={["30", "70", "10", "5"]}
          section_extratext="% Off"
        />
        <ProductsSection
          section_title="Featured"
          section_categories={[
            "Home-made",
            "Sustainable",
            "Pricey",
            "Hand-crafted",
          ]}
        />

        <section className="text-center">
          <h2 className="text-3xl font-black my-8">
            Slay The Way You Deserve Too
          </h2>
          <img src={PromoImage} alt="picture of NFL prospect" className="w-full"/>
        </section>

        <ProductsSection
          section_title="Accessories"
          section_categories={["Boots", "Hats", "Pricey", "Socks"]}
        />

        <section className="px-12 md:px-16 py-6 md:py-12">
          <h2 className="text-3xl text-center font-black my-12">
            Rock Your Style and Champion Your Fit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 justify-around justify-items-center">
            <img
              src={MaleModelOne}
              alt="Male Model"
              className="h-[32rem] rounded-lg"
            />
            <img
              src={MaleModelTwo}
              alt="Male Model"
              className="h-[32rem] rounded-lg"
            />
          </div>
        </section>

        <ProductsSection
          section_title="Clearance"
          section_categories={["10", "20", "25", "30"]}
          section_extratext="% Off"
        />
      </main>
      <Footer />
    </>
  );
}
