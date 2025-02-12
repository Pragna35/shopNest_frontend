import "../styles/sidebar.css";
const SideBar = () => {
  const categories = [
    {
      img: "https://udaipurbazar.com/images/thumbs/0001927_t-shirts_370.jpeg",
      category: "men",
    },
    {
      img: "https://d2ki7eiqd260sq.cloudfront.net/Women_Sub-Category_Western3e884e02-da05-4380-a2f6-ab29e1c9f931.jpg",
      category: "women",
    },
    {
      img: "https://i.pinimg.com/736x/63/15/47/631547899e6f0a6d04a2e53079e8c54f.jpg",
      category: "kids",
    },
    {
      img: "https://img.freepik.com/free-photo/fashionable-couple-love-posing_273443-1444.jpg",
      category: "fashion",
    },
    {
      img: "https://i.pinimg.com/736x/a1/5b/09/a15b09d307117ae369a24d4a955694f1.jpg",
      category: "mobiles",
    },
    {
      img: "https://cdn.britannica.com/35/222035-050-C68AD682/makeup-cosmetics.jpg",
      category: "beauty",
    },
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/007/469/596/small/laptop-digital-device-screen-blank-mockups-free-photo.jpg",
      category: "laptops",
    },
    {
      img: "https://i.pinimg.com/originals/3b/47/4d/3b474da7555837325871c730d9b25387.jpg",
      category: "jewellery",
    },
  ];

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
              <button className="cate-btn">{product.category}</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SideBar;
