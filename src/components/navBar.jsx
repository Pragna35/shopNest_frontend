import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const Navbar = () => {
  const { token, logout , currentUser} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout =  () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <header className="header">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg="3" md="3" sm="4" className="text-start">
              <div className="logo-div d-flex align-items-center">
                <img
                  src="/shopping-bag-logo.avif"
                  alt="logo"
                  className="logo-img"
                />
                <div className="text-container d-flex align-items-center ">
                  <h2 style={{ color: "orangered", fontWeight: "bold" }}>S</h2>
                  <h2 style={{ color: "blue", fontWeight: "bold" }}>h</h2>
                  <h2 style={{ color: "goldenrod", fontWeight: "bold" }}>o</h2>
                  <h2 style={{ color: "hotpink", fontWeight: "bold" }}>p</h2>

                  <h2 style={{ color: "skyblue", fontWeight: "bold" }}>N</h2>
                  <h2 style={{ color: "red", fontWeight: "bold" }}>e</h2>
                  <h2 style={{ color: "darkorange", fontWeight: "bold" }}>s</h2>
                  <h2 style={{ color: "green", fontWeight: "bold" }}>t</h2>
                </div>
              </div>
            </Col>
            <Col lg="5" md="5" sm="4" className="text-center">
              <div className="search-bar d-flex align-items-center justify-content-center">
                <input type="text" placeholder="Search..." />
                <span className="search-icon ">
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            {token ? (
              <Col lg="3" md="4" sm="4">
                <div className="profile-div d-flex align-items-center justify-content-end gap-3">
                  <div className="profile d-flex align-items-center">
                  <div className="profile-img d-flex align-items-center justify-content-center">
                    <i class="ri-user-line"></i>
                   
                  </div>
                  <span className="username">{currentUser}</span>
                  </div>
                 
                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </Col>
            ) : (
              <Col
                lg="3"
                md="4"
                sm="4"
                className="text-end d-flex align-items-center justify-content-end "
              >
                <button
                  className="login-btn"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Log in
                </button>
                <button
                  className="signin-btn"
                  onClick={() => navigate("/register")}
                >
                  Sign up
                </button>
              </Col>
            )}
            <Col>
              <span className="cart-icon">
                <i class="ri-shopping-cart-2-line"></i>
              </span>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};
export default Navbar;
