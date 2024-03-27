import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { placeUserOrder } from "../utils/orders";

export default function Return() {
  const [status, setStatus] = useState(null);
  const [orderStatus, setOrderStatus] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const getPaymentStatus = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    try {
      const response = await fetch(
        `http://localhost:3000/api/checkout/session-status?session_id=${sessionId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch session status");
      }

      const data = await response.json();
      setStatus(data.status);
      setCustomerEmail(data.customer_email);

      if (data.status === "complete") {
        const { status } = await placeUserOrder();
        setOrderStatus(status);
      }
    } catch (error) {
      console.error("Error fetching session status:", error);
    }
  };

  useEffect(() => {
    getPaymentStatus();
  }, []);

  if (status === "open") {
    return <Navigate to="/checkout" />;
  }

  if (status === "complete") {
    return (
      <section className="px-16 text-center">
        {orderStatus}
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email{" "}
          <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    );
  }

  return null;
}
