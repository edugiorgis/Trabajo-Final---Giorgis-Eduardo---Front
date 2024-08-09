import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import banner1 from "../assets/Photos/banner-1.jpeg";
import banner2 from "../assets/Photos/banner-2.jpeg";
import banner3 from "../assets/Photos/banner-3.jpeg";
import banner4 from "../assets/Photos/banner-4.jpeg";

const items = [
  { src: banner1, altText: "Img 1", key: 1 },
  { src: banner2, altText: "Img 2", key: 2 },
  { src: banner3, altText: "Img 3", key: 3 },
  { src: banner4, altText: "Img 4", key: 4 },
];

function Banner() {
  return (
    <Carousel>
      {items.map((item) => (
        <Carousel.Item key={item.key}>
          <img src={item.src} alt={item.altText} width="100%" height="680px" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
