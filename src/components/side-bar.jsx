

import { categories } from "../assets/data/categories";
import "../styles/sidebar.css";

//passing oncategoryChange (prop) to product( parent ) component
const SideBar = ({onCategoryChange}) => {
 

  return (
    <>
      <div className="main-sidebar flex-grow-0 d-flex align-items-center">
        {categories.map((product, index) => {
          return (
            <div
              key={index}
              className="side-category d-flex align-items-center "
            >
              <img src={product.img} alt={product.category} />
              <button
                className="cate-btn"
                onClick={() => onCategoryChange(product.category)}   //state uplifting 
              >
                {product.category}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SideBar;
