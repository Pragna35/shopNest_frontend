import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";

import {AuthProvider} from "./context/authContext.jsx";
import {CartProvider} from "./context/cartContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AuthProvider>

  // </StrictMode>
);
