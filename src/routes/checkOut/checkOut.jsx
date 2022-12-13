import "./checkOut.scss";
import { useContext } from "react";
import { MenuContext } from "../../context/context_dropDown";

import CheckOutItem from "../../components/check-out-item/check-out-item";

const CheckOut = () => {
  const { menuProduct } = useContext(MenuContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span className="header-block">product</span>
        <span className="header-block">discribtion</span>
        <span className="header-block">quantity</span>
        <span className="header-block">price</span>
        <span className="header-block">remove</span>
      </div>
      {menuProduct.map((el) => (
        <CheckOutItem key={el.id} product={el} />
      ))}
    </div>
  );
};
export default CheckOut;
