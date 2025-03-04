import { useState, useContext } from "react";
import "../styles/login.css";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { AuthContext } from "../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!name || !password) {
      toast.error("please fill all the fields");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        name,
        password,
      });

      // console.log(res.data, "response");
      const { token, userDetails, message } = res.data;

    

      // Store token in context
      login(token, userDetails);

      toast.success(message);

      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || "login failed. Please try again";
      setError(errorMsg);
      toast.error(errorMsg);
    }

    setName("");
    setPassword("");
  };
  return (
    <>
      <div className="main-container">
        <div className="login-wrapper">
          <div className="login-form-box">
            <form action="" onSubmit={handleLogin}>
              <h1>Login</h1>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="username"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <FaUserAlt className="icon" />
              </div>

              <div className="input-box">
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <FaLock className="icon" />
              </div>

              {error && (
                <p style={{ color: "red", textAlign: "center" }}>{error}</p>
              )}

              <button type="submit" className="regiser-btn">
                Login
              </button>

              <span>
                <Link to="/forget-password" className="forget">
                  forget password ?
                </Link>
              </span>

              <div className="login-link">
                <p>
                  Don't have an account ?<Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
