import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles.css";

const items = [
  {
    text: "6 CUOTAS SIN INTERÉS EN TODO EL SITIO",
    key: 1,
  },
  {
    text: "ENVIO GRATIS - CON COMPRAS SUPERIORES A $90.000",
    key: 2,
  },
  {
    text: "ENVIO EXPRESS - RECIBI EN 24 HS",
    key: 3,
  },
  {
    text: "12 CUOTAS SIN INTERÉS EN MONTOS SUPERIORES A $600.000",
    key: 4,
  },
];

function BannerInitial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {items.map((item) => (
        <Carousel.Item key={item.key}>
          <div className="carousel-text">{item.text}</div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BannerInitial;
