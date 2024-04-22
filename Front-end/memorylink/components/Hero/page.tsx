"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useStyles } from "./style/style";

const images = ["assets/images/family.jpg", "assets/images/doctorinput.jpg"];

const Hero = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.main}>
      <Carousel
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.images}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
