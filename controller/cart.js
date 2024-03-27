const db = require("../model/index");

const createUserCart = async (user_id) => {
  try {
    const { error } = await db.from("carts").insert({ user_id: user_id });

    if (error) {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error creating user cart:", error.message);
    throw error;
  }
};

const getUserCartId = async (user_id) => {
  try {
    const { data, error } = await db
      .from("carts")
      .select()
      .eq("user_id", user_id)
      .single();

    if (data) {
      return data.id;
    } else {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error getting user cart id:", error.message);
    throw error;
  }
};

const productExistsInCart = async (cart_id, product_id) => {
  try {
    const { data, error } = await db
      .from("cartitems")
      .select()
      .eq("cart_id", cart_id)
      .eq("product_id", product_id)
      .maybeSingle();

    if (data) {
      return true;
    } else if (data === null) {
      return false;
    } else {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error verifying product exists in cart:", error.message);
    throw error;
  }
};

const addProductToCart = async (cart_id, product_id, quantity) => {
  try {
    const { error } = await db
      .from("cartitems")
      .insert({ cart_id: cart_id, product_id: product_id, quantity: quantity });

    if (error) {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error adding product to user cart:", error.message);
    throw error;
  }
};

const getAllProductsFromCart = async (cart_id) => {
  try {
    const { data, error } = await db
      .from("carts")
      .select(`products(id, name, price, label), cartitems(quantity)`)
      .eq("id", cart_id);

    if (data) {
      const items = data[0].products.map((product, index) => {
        return { ...product, quantity: data[0].cartitems[index].quantity };
      });
      return items;
    } else {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error getting all products from cart:", error.message);
    throw error;
  }
};

const getCartItemsForOrder = async (cart_id) => {
  try {
    const { data, error } = await db
      .from("cartitems")
      .select()
      .eq("cart_id", cart_id);

    if (data) {
      return data;
    } else {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error getting all products for orders:", error.message);
    throw error;
  }
};

const updateProductInCart = async (product_id, quantity) => {
  try {
    const { error } = await db
      .from("cartitems")
      .update({ quantity: quantity })
      .eq("product_id", product_id);

    if (error) {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error updating item in cart:", error.message);
    throw error;
  }
};

const deleteProductFromCart = async (cart_id, product_id) => {
  try {
    const { error } = await db
      .from("cartitems")
      .delete()
      .eq("cart_id", cart_id)
      .eq("product_id", product_id);

    if (error) {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error a single product from cart:", error.message);
    throw error;
  }
};

const deleteAllProductsFromCart = async (cart_id) => {
  try {
    const { error } = await db
      .from("cartitems")
      .delete()
      .eq("cart_id", cart_id);

    if (error) {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error deleting all products from cart:", error.message);
    throw error;
  }
};

const cartNotEmpty = async (cart_id) => {
  try {
    const { data, error } = await db
      .from("cartitems")
      .select()
      .eq("cart_id", cart_id);

    if (data.length > 0) {
      return true;
    } else if (data.length === 0) {
      return false;
    } else {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error checking if cart is empty:", error.message);
    throw error;
  }
};

module.exports = {
  createUserCart,
  getUserCartId,
  productExistsInCart,
  addProductToCart,
  getAllProductsFromCart,
  updateProductInCart,
  getCartItemsForOrder,
  deleteAllProductsFromCart,
  deleteProductFromCart,
  cartNotEmpty,
};
