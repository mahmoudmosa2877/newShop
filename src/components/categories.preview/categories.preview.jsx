import {
  CategoryPreviewContainer,
  TitlePreview,
  PreviewText,
} from "./categories.preview.styles.jsx";
import { useNavigate } from "react-router-dom";
// use LInk instead....

import ProductCard from "../product-card/product-card";

const CategoriesPreview = ({ title, products }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(title);
    console.log("title");
  };
  ///  span in h1 what can i do
  return (
    <CategoryPreviewContainer key={title}>
      <h1>
        <TitlePreview onClick={clickHandler}>{title}</TitlePreview>
      </h1>
      <PreviewText>
        {products.map((el, indx) => {
          if (indx < 4) return <ProductCard key={el.id} product={el} />;
        })}
      </PreviewText>
    </CategoryPreviewContainer>
  );
};

export default CategoriesPreview;
