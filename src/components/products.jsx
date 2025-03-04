import SideBar from "./side-bar";
import DisplayProducts from "./display-products";
import { useState } from "react";


const Products = () => {

  const [selectedCategory , setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    // console.log(category)
setSelectedCategory(category)
  }
  return (
    <>
      <h1
        style={{
          background:
            "linear-gradient(to right, rgb(93, 194, 234),rgb(218, 45, 131))",
          textAlign: "center",
          fontWeight: "600",
          margin: "1.2rem 0 1.4rem",
          padding: "6px 0",
          borderRadius: "10px",
        }}
      >
        Latest Products
      </h1>
      <div className="products-container d-flex gap-3  my-3">
        <SideBar onCategoryChange={handleCategoryChange}/>
        <DisplayProducts selectedCategory={selectedCategory}/>
      </div>
    </>
  );
};

export default Products;
