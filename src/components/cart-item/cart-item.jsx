import {
  CartItemContainer,
  ItemDetails,
  ImageStyled,
  NameDiv,
} from "./cart_item.style";

const CartItem = ({ products }) => {
  const { name, imageUrl, price, quantity } = products;
  return (
    <CartItemContainer>
      <ImageStyled src={imageUrl} alt={name} />
      <ItemDetails>
        <ItemDetails as="span">
          {price}X{quantity}
        </ItemDetails>
        <NameDiv>{name}</NameDiv>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
