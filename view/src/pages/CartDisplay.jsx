import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import CartProductCard from "../components/CartProductCard/CartProductCard";
import {
  fetchAllCartItems,
  deleteItemFromBackend,
  deleteAllItemsfromBackend,
} from "../utils/cart";

export default function CartDisplay() {
  const [cartitems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const getCartItems = async () => {
    try {
      const { status, items, message } = await fetchAllCartItems();

      if (status === "failed") {
        setStatus(status);
        setErrorMessage(message);
        return;
      }

      setCartItems(items);

      const currentTotal = items.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
      setCartTotal(currentTotal);
    } catch (error) {
      console.log(error);
    }
  };

  const clearItemFromCart = async (product_id) => {
    try {
      const { status, message } = await deleteItemFromBackend(product_id);

      if (status === "failed") {
        setStatus(status);
        setErrorMessage(message);
        return;
      }

      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== product_id)
      );

      setCartTotal((prevTotal) => {
        const deletedItem = cartitems.find((item) => item.id === product_id);
        return prevTotal - deletedItem.price;
      });
    } catch (error) {
      console.log(error);
    }
  };

  const clearCart = async () => {
    try {
      const { status, message } = await deleteAllItemsfromBackend();

      if (status === "failed") {
        setStatus(status);
        setErrorMessage(message);
        return;
      }

      setCartItems([]);
      setCartTotal(0);
    } catch (error) {
      console.log(error);
    }
  };

  const makeOrderRequest = async () => {
    if (cartitems.length === 0) {
      setStatus("failed");
      setErrorMessage("Cart is Empty!");
      return;
    } else {
      navigate("/checkout");
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <>
      <header className="px-8 md:px-16 lg:px-20 pt-8">
        {status === "failed" ? (
          <Alert severity="error" className="max-w-96">
            {errorMessage}
          </Alert>
        ) : (
          ""
        )}
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-3 font-mono">
        <section className="col-span-1 lg:col-span-2 px-8 md:px-16 lg:px-20 py-8 md:py-12 lg:py-16 text-sm md:text-md">
          <article className="flex justify-between">
            <h2>Cart</h2>
            <p>{cartitems.length} Items</p>
          </article>
          <hr className="w-full my-4 rounded-lg" />
          <article className="flex justify-between">
            <p>PRODUCT DETAILS</p>
            <p>TOTAL</p>
          </article>
          <div>
            {cartitems.length !== 0
              ? cartitems.map((product, index) => (
                  <CartProductCard
                    key={index}
                    product={product}
                    onClick={clearItemFromCart}
                  />
                ))
              : ""}
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between my-8">
            <Link to="/products">
              <p className="font-bold hover:cursor-pointer">
                &#8592; Continue Shopping
              </p>
            </Link>
            <button
              className="bg-black text-white px-4 py-2 max-w-52"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </section>
        <section className="bg-tempcolor ml-0 lg:ml-12 px-8 md:px-16 lg:px-20 py-8 md:py-12 lg:py-16 text-sm md:text-md">
          <h2 className="font-bold text-sm lg:text-xl">Order Summary</h2>
          <hr className="w-full my-4 rounded-lg" />
          <article className="flex justify-between mb-4">
            <p>ITEMS </p>
            <p>{cartitems.length} </p>
          </article>
          <article className="flex justify-between">
            <p>TOTAL COST</p>
            <p>${cartTotal}</p>
          </article>
          <button
            onClick={makeOrderRequest}
            className="bg-black text-white w-52 lg:w-full h-12 p-auto my-8"
          >
            Checkout
          </button>
        </section>
      </main>
    </>
  );
}
