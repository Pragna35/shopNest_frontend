import Navbar from "../components/navBar";
import Layout from "../layout/layout";
import Footer from "../components/footer";
const Home = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <Layout />
        <Footer/>
      </div>
    </>
  );
};
export default Home;
