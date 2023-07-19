import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CustomCarousel = () => {
  const images = [
    {
      id: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/vite-react-shop.appspot.com/o/slider-images%2Fmaverick_d120505.jpg?alt=media&token=61e03960-e0c0-4f0c-bc38-fb491fccbacd",
    },
    {
      id: 2,
      img: "https://firebasestorage.googleapis.com/v0/b/vite-react-shop.appspot.com/o/slider-images%2Fmoochie_d120504.webp?alt=media&token=fecab72f-dbc6-43fb-a476-e245a10f0227",
    },
    {
      id: 3,
      img: "https://firebasestorage.googleapis.com/v0/b/vite-react-shop.appspot.com/o/slider-images%2Fnew_arrivals_d120501.webp?alt=media&token=c0290cc0-0f05-4832-ae9f-6cb8aa8c9525",
    },
    {
      id: 4,
      img: "https://firebasestorage.googleapis.com/v0/b/vite-react-shop.appspot.com/o/slider-images%2Fninirossi_d120506.jpg?alt=media&token=ecc87e55-a93c-487d-8e35-4230b4f30419",
    },
    {
      id: 5,
      img: "https://firebasestorage.googleapis.com/v0/b/vite-react-shop.appspot.com/o/slider-images%2Fschool_smart_d120509.webp?alt=media&token=3409d1f2-5130-47a4-b557-2cdb6709a46d",
    },
    {
      id: 6,
      img: "https://firebasestorage.googleapis.com/v0/b/vite-react-shop.appspot.com/o/slider-images%2Ftwinkler_d120508.webp?alt=media&token=d649be32-3236-46cd-a620-661820a9a9a3",
    },
    {
      id: 7,
      img: "https://firebasestorage.googleapis.com/v0/b/vite-react-shop.appspot.com/o/slider-images%2Fventurini_d120502.webp?alt=media&token=3a3bcd8f-c3d0-4334-9e24-cf4b41f95a8f",
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
