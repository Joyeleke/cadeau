export const newUserSignUp = async (firstname, lastname, email, password) => {
  try {
    const payload = { firstname, lastname, email, password };
    const url = `http://localhost:3000/api/auth/register`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return { status: "success" };
    } else if (response.status === 409) {
      return { status: "failed", message: "User Already Exists! Log In" };
    } else {
      return { status: "failed", message: "Failed to complete registration" };
    }
  } catch (error) {
    console.log(error);
    return { status: "failed", message: "Failed to complete registration" };
  }
};
