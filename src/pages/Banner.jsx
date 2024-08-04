import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import banner1 from "../assets/Photos/banner-1.jpeg";
import banner2 from "../assets/Photos/banner-2.jpeg";
import banner3 from "../assets/Photos/banner-3.jpeg";
import banner4 from "../assets/Photos/banner-4.jpeg";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

const items = [
  {
    src: banner1,
    altText: "Img 1",
    key: 1,
  },
  {
    src: banner2,
    altText: "Img 2",
    key: 2,
  },
  {
    src: banner3,
    altText: "Img 3",
    key: 3,
  },
  {
    src: banner4,
    altText: "Img 4",
    key: 4,
  },
];

function Banner(args) {
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%" height="680px" />
      </CarouselItem>
    );
  });

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

export default Banner;
