import "./categories.scss";
import { useParams } from "react-router-dom";
// import CategoriesPreview from "../../../../components/categories.preview/categories.preview";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../../context/context_product";
import ProductCard from "../../../../components/product-card/product-card";
const Categories = () => {
  const { cat } = useParams();
  console.log(cat);
  const { products } = useContext(ProductContext);
  console.log(products[cat], "this is products[cat]");

  const [prod, setProd] = useState([]);
  useEffect(() => {
    setProd(products[cat]);
  }, [products, cat]);

  console.log(prod, "this is prod");
  return (
    <>
      <h1 className="title">{cat.toUpperCase()}</h1>

      <div className="category-container">
        {prod && prod.map((el) => <ProductCard key={el.id} product={el} />)}
      </div>
    </>
  );
};

export default Categories;
