/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useState } from "react";

const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {
  const initialProducts = {
    trending: [],
    arriving: [],
    popular: [],
    offers: [],
    deals: { 5: [], 10: [], 30: [], 70: [] },
    featured: {
      "home-made": [],
      sustainable: [],
      pricey: [],
      "hand-crafted": [],
    },
    accessories: { boots: [], hats: [], pricey: [], socks: [] },
    clearance: { 10: [], 20: [], 25: [], 30: [] },
  };
  const [products, setAllProducts] = useState(initialProducts);

  const fetchProductsByLabel = async (label) => {
    if (products[label].length !== 0) {
      return products[label];
    }

    try {
      const url = `http://localhost:3000/api/products/category/${label}`;
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setAllProducts((prevProducts) => ({
          ...prevProducts,
          [label]: data.products,
        }));
        return products[label];
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProductsByLabelId = async (label, labelId) => {
    if (products[label][labelId].length !== 0) {
      return products[label][labelId];
    }

    try {
      const url = `http://localhost:3000/api/products/category/${label}/${labelId}`;
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setAllProducts((prevProducts) => ({
          ...prevProducts,
          [label]: {
            ...prevProducts[label],
            [labelId]: data.products,
          },
        }));
        return data.products;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{ fetchProductsByLabel, fetchProductsByLabelId }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const Products = () => {
  return useContext(ProductContext);
};
