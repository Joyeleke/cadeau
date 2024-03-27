import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../utils/products";
import { addProductToCart } from "../utils/cart";
import NavTwo from "../components/Nav/NavTwo";
import DealsCarousel from "../components/DealsCarousel/DealsCarousel";

import Footer from "../components/Footer/Footer";

import ProductImagePreview from "../components/ProductImagePreview/ProductImagePreview";
import ProductsAccordion from "../components/ProductsAccordion/ProductsAccordion";
import CustomerProductDisplay from "../components/CustomerProductDisplay/CustomerProductDisplay";
import ProductColorPicker from "../components/ProductColorPicker/ProductColorPicker";

export default function IndividualProduct() {
  const { id } = useParams();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [images] = useState([
    "https://ezxeabxdawiisodycekr.supabase.co/storage/v1/object/public/CadeauImages/imani-bahati-LxVxPA1LOVM-unsplash-removebg-preview.png",
    "https://ezxeabxdawiisodycekr.supabase.co/storage/v1/object/public/CadeauImages/mnz-v13tnV6D9lw-unsplash-removebg-preview.png",
    "https://ezxeabxdawiisodycekr.supabase.co/storage/v1/object/public/CadeauImages/brennan-burling--fhcpPYjf3g-unsplash-removebg-preview.png",
    "https://ezxeabxdawiisodycekr.supabase.co/storage/v1/object/public/CadeauImages/daniel-storek-JM-qKEd1GMI-unsplash-removebg-preview.png",
  ]);
  const [currentImageUrl, setCurrentImageUrl] = useState(
    "https://ezxeabxdawiisodycekr.supabase.co/storage/v1/object/public/CadeauImages/imani-bahati-LxVxPA1LOVM-unsplash-removebg-preview.png"
  );

  // const [currentColor, setCurrentColor] = useState([]);

  // const [productSizes, setProductSizes] = useState([]);

  const [cartStatus, setCartStatus] = useState("");

  //change to const () =>

  async function handleProduct(productId) {
    const product_id = Number(productId);

    try {
      const product = await fetchProductById(product_id);
      if (product) {
        setProductName(product.name);
        setProductPrice(product.price);
        setProductDescription(product.description);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddToCart(id) {
    const product_id = id;

    try {
      const status = await addProductToCart(product_id);
      setCartStatus(status);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleProduct(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header>
        <NavTwo />
        <hr className="w-full h-0.5 bg-black border-0" />
        <DealsCarousel />
      </header>
      <main className="font-mono">
        <section className="grid grid-cols-1 lg:grid-cols-10 py-6 px-6 md:px-12">
          <article className="col-span-2 flex lg:flex-col justify-center items-center space-x-6 lg:space-x-0 order-2 lg:order-none">
            {images.map((url, index) => (
              <ProductImagePreview
                img_url={url}
                key={index}
                onClick={() => setCurrentImageUrl(url)}
                currentImageUrl={currentImageUrl}
              />
            ))}
          </article>
          <arcticle className="h-[30rem] w-full col-span-4 flex flex-col justify-center items-center order-1 lg:order-none bg-primary_grey rounded-md self-center">
            <img src={currentImageUrl} alt="" />
          </arcticle>
          <article className="col-span-4 order-3 lg:order-none mx-0 lg:mx-10 self-center">
            <p>{cartStatus}</p>
            <h2 className="text-xl font-bold my-4">{productName}</h2>
            <h2 className="text-xl font-bold my-4">${productPrice}</h2>
            <p className="my-4 text-sm md:text-md">
              {productDescription}. Brings out the best in the world amongst all
              its users.
            </p>
            <ProductColorPicker />
            <div>
              <h2 className="text-xl">Size</h2>
              <div className="flex">
                <div className="w-10 h-10 flex justify-center items-center text-sm border-black border-2 rounded-md  m-4 ml-0">
                  XS
                </div>
                <div className="w-10 h-10 flex justify-center items-center text-sm  border-black border-2 rounded-md m-4 ml-0">
                  S
                </div>
                <div className="w-10 h-10 flex justify-center items-center text-sm  border-black border-2 rounded-md m-4 ml-0">
                  M
                </div>
                <div className="w-10 h-10 flex justify-center items-center text-sm  border-black border-2 rounded-md m-4 ml-0">
                  L
                </div>
                <div className="w-10 h-10 flex justify-center items-center text-sm  border-black border-2 rounded-md m-4 ml-0">
                  XL
                </div>
              </div>
            </div>
            <div className="my-6 flex space-x-16 lg:space-x-8">
              <button
                type="submit"
                className="w-72 h-12 bg-black text-white text-sm text-center font-black p-2 hover:cursor-pointer"
                onClick={() => handleAddToCart(id)}
              >
                Add to Cart
              </button>
            </div>
          </article>
        </section>

        <ProductsAccordion />
        <CustomerProductDisplay />
      </main>
      <Footer />
    </>
  );
}
