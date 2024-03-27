const db = require("../model/index");

const getProductsByLabel = async (label) => {
  try {
    const { data, error } = await db
      .from("products")
      .select()
      .eq("label", label)
      .limit(6);

    if (data) {
      return data;
    } else {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error fetching trending products:", error.message);
    throw error;
  }
};

const getProductsByLabelId = async (label, labelId) => {
  try {
    const { data, error } = await db
      .from("products")
      .select()
      .eq("label", label)
      .eq("label_id", labelId)
      .limit(6);

    if (data) {
      return data;
    } else {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error fetching trending products:", error.message);
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const { data, error } = await db
      .from("products")
      .select()
      .eq("id", id)
      .maybeSingle();

    if (data) {
      return data;
    } else if (data === null) {
      return null;
    } else {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error getting product by id:", error.message);
    throw error;
  }
};

module.exports = { getProductsByLabel, getProductsByLabelId, getProductById };
