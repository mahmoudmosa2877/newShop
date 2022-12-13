import { createContext, useEffect, useState } from "react";

const cartArray = (menuProduct, prductAdded) => {
  const existingElement = menuProduct.find(
    (cartItem) => cartItem.id === prductAdded.id
  );

  if (existingElement) {
    return menuProduct.map((prod) => {
      return prod.id === prductAdded.id
        ? { ...prod, quantity: prod.quantity + 1 }
        : prod;
    });
  } else {
    return [...menuProduct, { ...prductAdded, quantity: 1 }];
  }
};

const addOneItem = (menuProduct, prductAdded) => {
  return menuProduct.map((prod) => {
    return prod.id === prductAdded.id
      ? { ...prod, quantity: prod.quantity + 1 }
      : prod;
  });
};

const removeItem = (menuProduct, prod) => {
  return menuProduct.filter((el) => el.id !== prod.id);
};
const removeOneItem = (menuProduct, prductAdded) => {
  if (prductAdded.quantity === 1) return removeItem(menuProduct, prductAdded);
  return menuProduct.map((prod) => {
    return prod.id === prductAdded.id
      ? { ...prod, quantity: prod.quantity - 1 }
      : prod;
  });
};

export const MenuContext = createContext({
  isOpenedMenu: true,
  setIsOpenedMenu: () => {},
  menuProduct: [],
  addProductToMenu: () => {},
  totalItem: 0,
  removeProductFromMenu: () => {},
  addOItem: () => {},
  removeOItem: () => {},
});

export const ProductMenuProvider = ({ children }) => {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const [menuProduct, setMenuProduct] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  const addProductToMenu = (prductAdded) => {
    setMenuProduct(cartArray(menuProduct, prductAdded));
  };
  const addOItem = (prductAdded) => {
    setMenuProduct(addOneItem(menuProduct, prductAdded));
  };
  const removeOItem = (prductAdded) => {
    setMenuProduct(removeOneItem(menuProduct, prductAdded));
  };
  const removeProductFromMenu = (prod) => {
    setMenuProduct(removeItem(menuProduct, prod));
  };

  useEffect(() => {
    setTotalItem(menuProduct.reduce((acc, curr) => acc + curr.quantity, 0));
  }, [menuProduct]);
  const value = {
    isOpenedMenu,
    setIsOpenedMenu,
    menuProduct,
    addProductToMenu,
    totalItem,
    addOItem,
    removeProductFromMenu,
    removeOItem,
  };
  // reduceTotalItems,
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
