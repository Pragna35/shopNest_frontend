import "../styles/register.css";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validating fields
    if (!name || !password || !confirmPass || !email) {
      toast.error("please fill all fields", {
        // autoClose: 3000,
        theme: "colored",
      });
      return; //prevents further execution
    }

    //
    if (password !== confirmPass) {
      setError("passwords do not match!");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5001/api/auth/register", {
        name,
        email,
        password,
      });
      // console.log(res);

      //show success toast
      toast.success(res.data.message, {
        theme: "colored",
      });
      //clear input fields
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPass("");

      //redirect to login page after 2 sec
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Registration failed!";
      setError(errorMsg);
      toast.error(errorMsg, {
        theme: "colored",
      });
    }
  };
  return (
    <>
      <div className="main-container">
        <div className="wrapper">
          <div className="form-box">
            <form action="" onSubmit={handleSubmit}>
              <h1>Register</h1>
              <div className="form-group">
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
              <div className="form-group">
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <MdEmail className="icon" />
              </div>
              <div className="form-group">
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

              <div className="form-group">
                <input
                  type="password"
                  placeholder="confirm password"
                  value={confirmPass}
                  onChange={(e) => {
                    setConfirmPass(e.target.value);
                  }}
                />
              </div>

              {error && <p className="error-msg">{error}</p>}

              <button type="submit" className="regiser-btn">
                Register
              </button>

              <div className="login-link">
                <p>
                  already have an account ?<Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
