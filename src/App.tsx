import React from "react";
import { BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart/Cart";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Cart />
    </BrowserRouter>
  );
};
