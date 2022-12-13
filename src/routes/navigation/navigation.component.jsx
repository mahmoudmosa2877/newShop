import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cartDropdown";

import { UserContext } from "../../context/context_user";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { MenuContext } from "../../context/context_dropDown";

// import "./navigation.styles.scss";
import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinkContainer,
} from "./navigation.styles";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isOpenedMenu, setIsOpenedMenu } = useContext(MenuContext);
  // console.log(currentUser);

  const signOutHandler = async () => {
    await signOutUser();
  };
  const [dropMenu, setDropMenu] = useState(false);

  const clickHandlerDropdown = () => {
    setIsOpenedMenu(!isOpenedMenu);
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/mainCat">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              {" "}
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon onClick={clickHandlerDropdown} />
        </NavLinkContainer>
        {isOpenedMenu && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
