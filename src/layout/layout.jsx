import Categories from "../components/categories";
import Banner from "../components/banner";
import Products from "../components/products";
const Layout = () => {
  return (
    <>
      <div className=" mx-2 ">
        <Categories />
        <Banner />
        <Products />  
      </div>
     
    </>
  );
};

export default Layout;
