import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";


import AuthProvider from "./context/authContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AuthProvider>  
      <App />
  </AuthProvider>

  // </StrictMode>,
);
