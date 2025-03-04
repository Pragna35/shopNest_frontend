import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import '../styles/reset-Password.css'

const ResetPassword = () => {
  const navigate = useNavigate();

  const email = localStorage.getItem("email");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPAssword = async (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      toast.error("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("passwords do not match.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/reset-password",
        { email, password }
      );
      toast.success(res.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Reset failed");
    }
  };

  return (
    <>
      <div className="reset-container">
        <h2>Reset Password</h2>
        <form onSubmit={handleResetPAssword}>
          <input
            type="Password"
            placeholder="new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </>
  );
};
export default ResetPassword;
