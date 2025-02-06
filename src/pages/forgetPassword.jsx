import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../styles/forgetPassword.css";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  //send - otp
  const sendOtp = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("please entr your email");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5001/api/auth/send-otp", {
        email,
      });
      toast.success(res.data.message);
      setOtpSent(true);
    } catch (err) {
      toast.error(err.response?.data?.message || "Error sending reset link");
    }
  };

  //verify - otp

  const verifyOtp = async () => {
    if (!otp) {
      toast.error("please enter the OTP");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/verify-otp",
        { email, otp }
      );
      console.log(email);
      toast.success(res.data.message);
      setOtpSent(false);
      localStorage.setItem("email", email);
      navigate("/reset-password");
    } catch (err) {
      toast.error(err.response?.data?.message || "invalid OTP");
    }
  };

  return (
    <>
      <div className="forget-container">
        <div className="otp-container">
          <h2>OTP Verification</h2>

          {!otpSent ? (
            <>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" onClick={sendOtp}>
                Send OTP
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button onClick={verifyOtp}>Verify OTP</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ForgetPassword;
