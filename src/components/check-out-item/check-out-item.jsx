import "./check-out-item.style.scss";
import { useContext } from "react";
import { MenuContext } from "../../context/context_dropDown";

const CheckOutItem = ({ product }) => {
  const {
    menuProduct,
    removeProductFromMenu,
    addProductToMenu,
    addOItem,
    removeOItem,
  } = useContext(MenuContext);
  const handleClick = () => {
    removeProductFromMenu(product);
  };

  const handleDecrease = () => {
    removeOItem(product);
  };
  const handleIncrease = () => {
    addOItem(product);
  };
  console.log(product);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <span className="name">{product.name}</span>
      <div className="quantity">
        <span className="arrow" onClick={handleDecrease}>
          &#10094;
        </span>
        <span className="value">{product.quantity}</span>
        <span className="arrow" onClick={handleIncrease}>
          &#10095;
        </span>
      </div>
      <span className="price">{product.price}</span>
      <span className="remove-button" onClick={handleClick}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckOutItem;
