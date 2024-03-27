const db = require("../model/index");
const { getCartItemsForOrder, deleteAllProductsFromCart } = require("./cart");

const createNewOrder = async (user_id) => {
  try {
    const { data, error } = await db
      .from("orders")
      .insert({ user_id: user_id })
      .select();

    if (data) {
      return data[0].id;
    } else if (error) {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error creating user cart:", error.message);
    throw error;
  }
};

const addCartItemsToOrder = async (cart_id, order_id) => {
  try {
    const cartitems = await getCartItemsForOrder(cart_id);

    const orderitems = cartitems.map((cartitem) => {
      return {
        order_id: order_id,
        product_id: cartitem.product_id,
        quantity: cartitem.quantity,
      };
    });

    const { error } = await db.from("orderitems").insert(orderitems);

    if (error) {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error moving cart items to orderitems", error.message);
    throw error;
  }
};

const rollBackOrder = async (order_id) => {
  try {
    const { error } = await db.from("orders").delete().eq("id", order_id);

    if (error) {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error rolling back order:", error.message);
    throw error;
  }
};

const placeOrder = async (cart_id, user_id) => {
  let orderCreated = false;
  let order_id;

  try {
    order_id = await createNewOrder(user_id);
    orderCreated = true;
    await addCartItemsToOrder(cart_id, order_id);
    await deleteAllProductsFromCart(cart_id);
    return;
  } catch (error) {
    if (orderCreated) {
      try {
        await rollBackOrder(order_id);
      } catch (error) {
        console.error(
          "Error rolling back order in place order function:",
          error.message
        );
        throw error;
      }
    }
    console.error("Error placing order:", error.message);
    throw error;
  }
};

const getAllOrders = async (user_id) => {
  try {
    const { data, error } = await db
      .from("orders")
      .select(`orderitems(quantity), products(name, price)`)
      .eq("user_id", user_id);

    if (data.length === 0) {
      return data;
    } else if (data.length > 0) {
      const items = data.flatMap((order) => {
        return order.products.map((product, index) => {
          return { ...product, quantity: order.orderitems[index].quantity };
        });
      });

      return items;
    } else {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error getting all orders:", error.message);
    throw error;
  }
};

const deleteAllOrders = async (user_id) => {
  try {
    const { error } = await db.from("orders").delete().eq("user_id", user_id);

    if (error) {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error all user's order history:", error.message);
    throw error;
  }
};

module.exports = {
  placeOrder,
  getAllOrders,
  deleteAllOrders,
};
