import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { UserProvider } from "./context/context_user";
import { ProductProvider } from "./context/context_product";
// import { ProductSoldProvider } from "./context/context_sold";
import { ProductMenuProvider } from "./context/context_dropDown";

import "./index.scss";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <ProductMenuProvider>
            <App />
          </ProductMenuProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
