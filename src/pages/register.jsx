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

  const [Passworderror, setPasswordError] = useState("");
  const [matchError, setMatchError] = useState("");
  const [error, setError] = useState(null);

  //a function for checking password strength
  const isStrongPassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!&$%*?])[A-Za-z\d@!&$%*?]{8,}$/;
    return passwordRegex.test(password);
  };
  const handlePasswordChange = (e) => {
    const pass = e.target.value;
    setPassword(pass);

    //checking password strength
    if (!isStrongPassword(pass)) {
      setPasswordError(
        "password must be atleast 8 characters, include uppercase,lowercase,number and a special character"
      );
    } else {
      setPasswordError("");
    }
  };

  //handling password matching
  const handleConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPass(confirmPassword);

    if (password !== confirmPassword) {
      setMatchError("passwords do not match.");
    } else {
      setMatchError("");
    }
  };

  //handling register
  const handleSubmit = async (e) => {
    e.preventDefault();

    //validating fields
    if (!name || !password || !confirmPass || !email) {
      toast.error("please fill all fields");
      return; //prevents further execution
    }

    if (Passworderror || matchError) {
      return;
    }
    try {
      const res = await axios.post("http://localhost:5001/api/auth/register", {
        name,
        email,
        password,
      });
      // console.log(res);

      toast.success(res.data.message);

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
      toast.error(errorMsg);
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
                  onChange={handlePasswordChange}
                />
                <FaLock className="icon" />
              </div>
              {Passworderror && (
                <p style={{ color: "red", fontSize: ".7rem" }}>
                  {Passworderror}
                </p>
              )}

              <div className="form-group">
                <input
                  type="password"
                  placeholder="confirm password"
                  value={confirmPass}
                  onChange={handleConfirmPassword}
                />
              </div>

              {matchError && (
                <p style={{ color: "red", fontSize: ".7rem" }}>{matchError}</p>
              )}

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
