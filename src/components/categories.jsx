import "../styles/categories.css";
import { categories } from "../assets/data/categories";

const Categories = () => {


  return (
    <>
      <div className="outer-categories-div">
        <div className="inner-categories-div d-flex justify-content-between">
          {categories.map((item, ind) => {
            return (
              <div className="item-div" key={ind}>
                <div className="img-div">
                  <img src={item.img} alt={item.category} />
                </div>

                <p>{item.category}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Categories;
