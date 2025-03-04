import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./authContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  console.log(cartItems, "count");
  // console.log(cartItems,"context - cart")
  const { currentUser, token } = useContext(AuthContext);
  const userId = currentUser?.id;

  //fetching cart items
  const fetchCartitems = async () => {
    // if (!userId) {
    //   let localCart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    //   setCartCount(localCart.length);
    //   return;
    // }

    try {
      const res = await axios.get(`http://localhost:5001/api/cart/${userId}`);

      setCartItems(res.data.items);
      setCartCount(res.data.count);
    } catch (err) {
      console.log("error fetching cart items", err);
    }
  };

  useEffect(() => {
    fetchCartitems();
  }, [userId]); //runs whenever userId changes

  //fuction to add product to the cart
  const addToCart = async (product) => {
    if (token) {
      try {
        const res = await axios.post("http://localhost:5001/api/cart/add", {
          userId,
          productId: product.product_id,
        });

        setCartItems((prev) => {
          const existingProduct = prev.find(
            (item) => item.product_id === product.product_id
          );

          if (existingProduct) {
            return prev.map((item) =>
              item.product_id === product.product_id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            return [...prev, { ...product, quantity: 1 , availableStock: product.quantity}];
          }
        });

        setCartCount((prev) => {
          const existingProduct = cartItems.find(
            (item) => item.product_id === product.product_id
          );
          return existingProduct ? prev : prev + 1;
        });
      } catch (err) {
        console.log("error adding to cart", err);
      }
    }
    // else {
    //   //Store in localStorage for non-logged-in users
    //   let cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    //   cart.push({
    //     product_id: product.product_id,
    //     product_name: product.product_name,
    //     product_img: product.product_img,
    //     price: product.price,
    //     quantity: 1,
    //   });
    //   localStorage.setItem("cart", JSON.stringify(cart));
    //   setCartItems(cart)
    //   setCartCount(cart.length);
    // }
  };

  //removing single product from cart
  const removeProduct = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:5001/api/cart/removeItem/${productId}`
      );
      setCartItems((prev) =>
        prev.filter((item) => item.product_id !== productId)
      );
      setCartCount((prev) => Math.max(prev - 1, 0)); //prevents -ve counts
    } catch (err) {
      console.log("Error in removing product", err);
    }
  };

  //clearing cart
  const clearCart = async () => {
    if (token) {
      try {
        await axios.delete(`http://localhost:5001/api/cart/clear/${userId}`);
        setCartItems([]);
        setCartCount(0);
      } catch (err) {
        console.log("Error clearing cart", err);
      }
    }
  };

  //increasing quantity
  const increaseQuantity = async (productId) => {
    try {
      const product = cartItems.find((item) => item.product_id === productId);

      if(product.quantity >= product.availableStock){
        alert("Cannot add more items. stock limit reached.");
        return;
      }
      await axios.post("http://localhost:5001/api/cart/increment", {
        userId,
        productId,
      });

      setCartItems((prev) =>
        prev.map((item) =>
          item.product_id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } catch (err) {
      console.log("Error increaseing quantity", err);
    }
  };

  // decreasing button
  const decreaseQuantity = async (productId) => {
    try {
      await axios.post("http://localhost:5001/api/cart/decrement", {
        userId,
        productId,
      });
      setCartItems((prev) => {
        const updatedItems = prev
          .map((item) =>
            item.product_id === productId && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0); //removes product with quantity of 0

        setCartCount(updatedItems.length);
        return updatedItems;
      });
    } catch (err) {
      console.log("Error decreaseing quantity", err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        cartCount,
        clearCart,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
