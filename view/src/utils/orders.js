export const placeUserOrder = async () => {
  try {
    const url = `http://localhost:3000/api/checkout/placeOrder`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.ok) {
      return { status: "success" };
    } else if (response.status === 401) {
      return {
        status: "failed",
        message: "Unauthorized access. You are not signed in",
      };
    } else if (response.status == 400) {
      return { status: "failed", message: "Cart is empty!" };
    } else {
      return { status: "failed", message: "Could not add product to Cart!" };
    }
  } catch (error) {
    console.log(error);
    return { status: "failed", message: "Could not add product to Cart!" };
  }
};

export const fetchUserOrders = async () => {
  try {
    const url = `http://localhost:3000/api/orders`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.ok) {
      const { items } = await response.json();
      return { status: "success", items: items };
    } else if (response.status === 401) {
      return {
        status: "failed",
        message: "Unauthorized access. You are not signed in",
      };
    } else {
      return { status: "failed", message: "Could not get orders from cart!" };
    }
  } catch (error) {
    console.log(error);
    return { status: "failed", message: "Could not get orders from cart!" };
  }
};
