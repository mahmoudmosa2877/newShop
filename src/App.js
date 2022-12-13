import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import CheckOut from "./routes/checkOut/checkOut";
import MainCat from "./routes/mainCat/mainCat";
import Category from "./components/category/category";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="check-out" element={<CheckOut />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="mainCat/*" element={<MainCat />} />
      </Route>
    </Routes>
  );
};

export default App;
