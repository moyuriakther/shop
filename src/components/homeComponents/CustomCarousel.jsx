import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CustomCarousel = () => {
  const images = [
    {
      id: 1,
      img: "//storage.sg.content-cdn.io/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/userimages/banners/May2023/new_arrivals_d120501.jpg",
    },
    {
      id: 2,
      img: "https://storage.sg.content-cdn.io/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/userimages/banners/May2023/venturini_d120502.jpg",
    },
    {
      id: 3,
      img: "https://storage.sg.content-cdn.io/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/userimages/banners/May2023/ninirossi_d120506.jpg",
    },
  ];

  return (
    <Carousel autoPlay={true}>
      {images?.map((image, i) => (
        <div key={i}>
          <img src={image?.img} />
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
