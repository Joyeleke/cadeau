/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//create my auth context
const AuthContext = createContext();

//create my custom authprovider
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  const userLogin = async (payload) => {
    try {
      const url = `http://localhost:3000/api/auth/login`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.token) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        navigate("/products");
        return;
      } else {
        throw new Error("Unauthorized Request", Error.message);
      }
    } catch (error) {
      console.log(error);
      return { status: "failed" };
    }
  };

  return (
    <AuthContext.Provider value={{ token, userLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const Auth = () => {
  return useContext(AuthContext);
};
