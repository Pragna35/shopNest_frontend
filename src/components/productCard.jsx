import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import "../styles/productCard.css";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const ProductCard = ({ products }) => {

 // console.log(products, "item");

const {addToCart} = useContext(CartContext)


  return (
    <>
      <div className="products-container flex-grow-1 px-3 ">
        <Container>
          <Row>
            {products &&
              products.map((item, ind) => {
                return (
                  <Col key={ind} md={3} sm={6} xs={12} className="mb-4">
                    <div className="product-card p-3 text-center">
                      <div className="product-img pb-2">
                        <img
                          src={item.product_img}
                          alt={item.product_name}
                          className=" w-100 h-100"
                        />
                      </div>
                      <p className="product-title pb-2">{item.product_name}</p>
                      <div className="price-div d-flex justify-content-between align-items-center">
                        <span>
                          Price:
                          <span className="product-price ">₹ {item.price}</span>
                        </span>
                        <span className="product-cart-icon" onClick={() => addToCart(item)}>
                          <i class="ri-shopping-cart-2-line"></i>
                        </span>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default ProductCard;
