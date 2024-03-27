export const fetchProductById = async (productId) => {
  try {
    const url = `http://localhost:3000/api/products/product/${productId}`;
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data.product;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};

//improve ERROR HANDLING
