
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./productCard";



const DisplayProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);
  // console.log(products);
  return (
    <>
     <ProductCard products={products}/>
    </>
  );
};

export default DisplayProducts;
