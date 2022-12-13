import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils.js";

export const ProductContext = createContext({
  products: {},
});

export const ProductProvider = ({ children }) => {
  // const [dataCat, setDataCat] = useState({});
  const [products, setProducts] = useState([]);
  // setDataCat(async () => await getCategoriesAndDocument());

  useEffect(() => {
    const getCategoriesMap = async () => {
      const dataCat = await getCategoriesAndDocument();

      setProducts(dataCat);
      console.log(" use Effect");
    };
    getCategoriesMap();
  }, []);
  // useEffect(() => {
  //   let isMounted = true; // note mutable flag
  //   getCategoriesAndDocument().then((data) => {
  //     if (isMounted) setProducts(data); // add conditional check
  //   });
  //   return () => {
  //     isMounted = false;
  //   }; // cleanup toggles value, if unmounted
  // }, []);

  // useEffect(() => {
  //   // 👇️ set isMounted to true
  //   let isMounted = true;

  //   async function fetchData() {
  //     const result = await getCategoriesAndDocument();
  //     console.log(" use Effect");
  //     console.log(isMounted);

  //     // 👇️ only update state if component is mounted
  //     if (isMounted) {
  //       setProducts(result);
  //     }
  //   }

  //   fetchData();
  //   console.log(isMounted);

  //   return () => {
  //     // 👇️ when component unmounts, set isMounted to false
  //     isMounted = false;
  //   };
  // }, []);

  console.log(products);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
