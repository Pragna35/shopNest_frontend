import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./productCard";


const DisplayProducts = ({ selectedCategory }) => {
  // console.log(selectedCategory);
  const [products, setProducts] = useState([]);
  // console.log(products);


  useEffect(() => {
    const categoryParam =
      selectedCategory === "all" ? "" : `${selectedCategory}`;
    axios
      .get(`http://localhost:5001/api/products/${categoryParam}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("error fetching products", err));
  }, [selectedCategory]);

  return (
    <>
    <div className="display-products-container">
    <ProductCard products={products} />
    </div>
     
    </>
  );
};

export default DisplayProducts;
