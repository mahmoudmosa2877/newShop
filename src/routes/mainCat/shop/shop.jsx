import { useContext } from "react";
import "./shop.scss";

import { ProductContext } from "../../../context/context_product";
import CategoriesPreview from "../../../components/categories.preview/categories.preview";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      {Object.keys(products).map((title) => (
        <CategoriesPreview
          key={title}
          title={title}
          products={products[title]}
        />
      ))}
    </>
  );
};

export default Shop;
