"use client";

import React from "react";
import { useStyles } from "./style/style";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Avatar } from "antd";

// Dummy data for testimonials
const testimonials = [
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ex sit amet turpis tempus consectetur.",
    image: "https://via.placeholder.com/150", // URL of the image
    name: "John Doe",
  },
  {
    message:
      "Vestibulum vel lacinia nisi. Duis bibendum eleifend lobortis. Sed quis dolor vehicula, scelerisque dui sit amet, bibendum ligula.",
    image: "https://via.placeholder.com/150", // URL of the image
    name: "Jane Doe",
  },
  {
    message:
      "Vestibulum vel lacinia nisi. Duis bibendum eleifend lobortis. Sed quis dolor vehicula, scelerisque dui sit amet, bibendum ligula.",
    image: "https://via.placeholder.com/150", // URL of the image
    name: "Jane Doe",
  },
  {
    message:
      "Vestibulum vel lacinia nisi. Duis bibendum eleifend lobortis. Sed quis dolor vehicula, scelerisque dui sit amet, bibendum ligula.",
    image: "https://via.placeholder.com/150", // URL of the image
    name: "Jane Doe",
  },
  {
    message:
      "Vestibulum vel lacinia nisi. Duis bibendum eleifend lobortis. Sed quis dolor vehicula, scelerisque dui sit amet, bibendum ligula.",
    image: "https://via.placeholder.com/150", // URL of the image
    name: "Jane Doe",
  },
  // Add more testimonials as needed
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const SuccessStories = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.main}>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 600ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{ flex: "0 1 calc(33.33% - 20px)", marginBottom: "20px" }}
          >
            <Card
              title={testimonial.name}
              bordered={false}
              style={{ width: "100%", height: "auto", border: "2px solid red" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  src={testimonial.image}
                  size={100}
                  style={{ marginRight: 16 }}
                />
                <p>{testimonial.message}</p>
              </div>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SuccessStories;
