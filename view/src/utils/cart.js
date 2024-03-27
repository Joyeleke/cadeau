//FIX ME
export const addProductToCart = async (product_id) => {
  try {
    const payload = { product_id: Number(product_id), quantity: 1 };
    const url = `http://localhost:3000/api/cart/cartitem`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return "Successfully Added to Cart";
    } else if (response.status === 401) {
      return "Unauthorized Request!";
    } else if (response.status == 409) {
      return "Product already exists in cart!";
    } else {
      return "Could not add product to Cart!";
    }
  } catch (error) {
    console.log(error);
    return "Could not add product to Cart!";
  }
};

export const fetchAllCartItems = async () => {
  try {
    const url = `http://localhost:3000/api/cart`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
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
      return { status: "failed", message: "Could not fetch cart items!" };
    }
  } catch (error) {
    console.log(error);
    return { status: "failed", message: "Could not fetch cart items!" };
  }
};

export const deleteItemFromBackend = async (product_id) => {
  const payload = { product_id: Number(product_id) };

  try {
    const url = `http://localhost:3000/api/cart/cartitem`;

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return { status: "success" };
    } else if (response.status === 401) {
      return {
        status: "failed",
        message: "Unauthorized access. You are not signed in",
      };
    } else {
      return { status: "failed", message: "Could not delete item!" };
    }
  } catch (error) {
    console.log(error);
    return { status: "failed", message: "Could not delete item!" };
  }
};

export const deleteAllItemsfromBackend = async () => {
  try {
    const url = `http://localhost:3000/api/cart`;

    const response = await fetch(url, {
      method: "DELETE",
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
    } else {
      return {
        status: "failed",
        message: "Could not delete all items from cart!",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: "failed",
      message: "Could not delete all items from cart!", 
    };
  }
};
