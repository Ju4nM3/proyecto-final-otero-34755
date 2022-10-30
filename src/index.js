import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import "./utilFunctions/firebase"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <CartProvider>
    <App />
  </CartProvider>

);
