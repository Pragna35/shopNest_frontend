//react-toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import ForgetPassword from "./pages/forgetPassword";
import ResetPassword from "./pages/resetPassword";
import NotFound from "./pages/notFound";

function App() {
  return (
    <>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={1000} theme="colored" />
      </BrowserRouter>
    </>
  );
}

export default App;
