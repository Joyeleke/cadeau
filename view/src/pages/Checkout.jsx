import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51MHfXUBztievLv2l1lk7Gwvf5XohguUCwy8judpZNxi5Qaz8frfxKT8FIHxEpXA8hejfv4coO7z7t2sqvp0SgFJq00khaB5aau"
);

export default function CheckoutForm() {
  const fetchClientSecret = useCallback(async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/checkout/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      return data.clientSecret;
    } catch (error) {
      console.error("Error fetching client secret:", error);
      return null;
    }
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
