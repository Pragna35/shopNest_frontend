import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <Carousel className="bannerDiv ">
        <Carousel.Item interval={1000} className="w-100 rounded-2">
          <img
            className="banner-imgs w-100 rounded-2"
            src="/banner-imgs/banner.webp"
            alt="banner"
          />
        </Carousel.Item>
        <Carousel.Item interval={500} className="w-100 rounded-2">
          <img
            className="banner-imgs w-100 rounded-2"
            src="/banner-imgs/banner1.jpg"
            alt="banner"
          />
        </Carousel.Item>
        <Carousel.Item className="w-100 rounded-2">
          <img
            className="banner-imgs w-100 rounded-2"
            src="/banner-imgs/banner3.jpg"
            alt="banner"
          />
        </Carousel.Item>
        <Carousel.Item className="w-100 rounded-2">
          <img
            className="banner-imgs w-100 rounded-2"
            src="/banner-imgs/banner4.jpg"
            alt="banner"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
