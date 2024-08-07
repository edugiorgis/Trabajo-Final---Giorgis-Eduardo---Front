import React, { useState, useRef } from "react";
import "../styles.css";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

const items = [
  {
    Text: "6 CUOTAS SIN INTERÉS EN TODO EL SITIO",
    key: 1,
  },
  {
    Text: "ENVIO GRATIS - CON COMPRAS SUPERIORES A $90.000",
    key: 2,
  },
  {
    Text: "ENVIO EXPRESS - RECIBI EN 24 HS",

    key: 3,
  },
  {
    Text: "12 CUOTAS SIN INTERÉS EN MONTOS SUPERIORES A $600.000",

    key: 4,
  },
];

function BannerInitial(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const carouselRef = useRef(null);

  const next = () => {
    if (animating) return;

    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;

    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.key}
    >
      <div className="carousel-text">{item.Text}</div>
    </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      ref={carouselRef}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default BannerInitial;
