import "../styles/cartPage.css";
import { CartContext } from "../context/cartContext";
import { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cartItems , clearCart, removeProduct, increaseQuantity, decreaseQuantity} = useContext(CartContext);
  //   console.log(cartItems, "cart");
const navigate = useNavigate()
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);
  return (
    <Container>
      <Row>
        <Col className="clear-cart d-flex align-items-center justify-content-between my-2">
        <button className="clear-cart-btn bg-success " onClick={() => navigate('/')}><i class="ri-arrow-left-line"></i> back to shopping</button>
          <button className="clear-cart-btn bg-danger" onClick={clearCart}>Clear cart</button>
        </Col>
        {cartItems &&
          cartItems.map((item, ind) => {
            return (
              <Col lg="12" md="12" sm="12" key={ind} className="my-3">
                <div className="cart-div d-flex align-items-center justify-content-between gap-15px">
                  {/* <h5>{item.product_id}</h5> */}
                  <div className="cart-img">
                    <img src={item.product_img} alt={item.product_name} />
                  </div>
                  <div className="cart-title">
                    <p>{item.product_name}</p>
                    <span className="remove-btn" onClick={() => removeProduct(item.product_id)}>
                      <i class="ri-close-line"></i> Remove
                    </span>
                  </div>

                  <div className="quantity-div d-flex align-items-center justify-content-center gap-3 ">
                    <div className="increment-btn d-flex align-items-center justify-content-center bg-success" onClick={() => increaseQuantity(item.product_id)}>
                      <span>+</span>
                    </div>
                    <span className="quantity-text ">{item.quantity}</span>
                    <div className="decrement-btn d-flex align-items-center justify-content-center bg-danger" onClick={() => decreaseQuantity(item.product_id)}>
                      <span>-</span>
                    </div>
                  </div>
                  <div className="cart-price d-flex align-items-center justify-content-end">
                    <span>{(item.quantity*item.price).toFixed(2)}</span>
                  </div>
                </div>
              </Col>
            );
          })}
        <hr />
        <Col>
          <div className="total-price-div d-flex align-items-center justify-content-end gap-5">
            <h1 className="fw-bold">Total: </h1>
            <div className="total-price">
              <span>₹</span> {total.toFixed(2)}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
