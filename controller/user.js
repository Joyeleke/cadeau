const db = require("../model/index");

const getUserByEmail = async (email) => {
  try {
    const { data, error } = await db
      .from("users")
      .select()
      .eq("email", email)
      .single();

    if (data) {
      return data;
    } else if (data === null) {
      return null;
    } else {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error getting user by email:", error.message);
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const { data, error } = await db
      .from("users")
      .select()
      .eq("id", id)
      .single();

    if (data) {
      return data;
    } else if (data === null) {
      return null;
    } else {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.error("Error getting user by email:", error.message);
    throw error;
  }
};

const createUser = async (firstname, lastname, email, password) => {
  try {
    const { data, error } = await db
      .from("users")
      .insert({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      })
      .select("id")
      .single();

    if (data) {
      return data;
    } else {
      console.log(error);
      throw new Error(error);
    }
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};

module.exports = {
  getUserByEmail,
  createUser,
  getUserById,
};

//Work on better auth for RLS
//only return neccessary columns
