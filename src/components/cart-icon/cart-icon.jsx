// import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { MenuContext } from "../../context/context_dropDown";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.style";

const CartIcon = (props) => {
  const { menuProduct, totalItem } = useContext(MenuContext);

  const result = menuProduct.reduce((acc, curr) => acc + curr.quantity, 0);
  console.log(result, totalItem);

  return (
    <CartIconContainer onClick={props.onClick}>
      <ShoppingIcon />
      <ItemCount>{result}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
