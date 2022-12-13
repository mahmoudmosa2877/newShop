import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cartDropdown.style";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "../../context/context_dropDown";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item";

const CartDropdown = () => {
  const { menuProduct } = useContext(MenuContext);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/check-out");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {menuProduct.map((el) => (
          <CartItem products={el} key={el.id} />
        ))}
        <Button onClick={handleClick}>Go to checkout</Button>
      </CartItems>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
