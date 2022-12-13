import { Routes, Route } from "react-router-dom";
import Shop from "./shop/shop";

import Categories from "./shop/categories/categories.jsx";

const MainCat = () => {
  return (
    <Routes>
      <Route index element={<Shop />} />
      <Route path=":cat" element={<Categories />} />
    </Routes>
  );
};

export default MainCat;
