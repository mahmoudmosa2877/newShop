import "./product-card.scss";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import { useContext } from "react";

import { MenuContext } from "../../context/context_dropDown";

const ProductCard = ({ product }) => {
  const { id, name, imageUrl } = product;

  const { menuProduct, addProductToMenu } = useContext(MenuContext);
  const handleClick = () => {
    addProductToMenu(product);
  };
  // console.log(menuProduct);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name"> {name}</span>
        <span className="price">{name}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleClick}>
        add
      </Button>
    </div>
  );
};

export default ProductCard;
