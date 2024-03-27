/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import DealsCarousel from "../components/DealsCarousel/DealsCarousel";
import Footer from "../components/Footer/Footer";
import NavTwo from "../components/Nav/NavTwo";
import OrderProductCard from "../components/OrderProductCard/OrderProductCard";
import ProductCard from "../components/ProductCard/ProductCard";
import { fetchUserOrders } from "../utils/orders";
import { Products } from "../hooks/Products";

export default function Orders() {
  const [orderitems, setOrderItems] = useState([]);
  const [coolProducts, setCoolProducts] = useState([]);
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { fetchProductsByLabel } = Products();

  const fetchCoolProducts = async () => {
    try {
      const data = await fetchProductsByLabel("trending");
      if (data) {
        setCoolProducts(data);
      } else {
        console.log("Error fetching products by label");
      }
    } catch (error) {
      console.error("Error fetching products by label:", error);
    }
  };

  const getUserOrders = async () => {
    try {
      const { status, items, message } = await fetchUserOrders();
      if (status === "failed") {
        setStatus(status);
        setErrorMessage(message);
        return;
      }
      setOrderItems(items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserOrders();
    fetchCoolProducts();
  }, []);

  return (
    <>
      <header>
        <NavTwo />
        <hr className="w-full h-0.5 bg-black border-0" />
        <DealsCarousel />
      </header>
      <main className="font-mono px-12 md:px-20 lg:px-28 py-8 md:py-12 lg:py-16 text-sm md:text-md">
        <section className="my-8">
          {status === "failed" ? (
            <Alert severity="error" className="max-w-96 my-8">
              {errorMessage}
            </Alert>
          ) : (
            ""
          )}
          <article className="flex justify-between">
            <h2>Orders</h2>
            <h2>{orderitems.length} Total Orders</h2>
          </article>
          <hr className="w-full my-4" />
          <article className="flex space-between">
            <p className="mr-auto">PRODUCT</p>
            <p>TOTAL</p>
          </article>
          {orderitems
            ? orderitems.map((product, index) => (
                <OrderProductCard key={index} product={product} />
              ))
            : "Nothing to see here!"}
        </section>
        <section className="mt-24">
          <h2 className="text-center text-2xl font-bold lg:text-left my-4">
            Check out our other cool products
          </h2>
          <article className="grid grid-cols-3 gap-y-12 items-center justify-center">
            {coolProducts.map((product, index) => (
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
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
