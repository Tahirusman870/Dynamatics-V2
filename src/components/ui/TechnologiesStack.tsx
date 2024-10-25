import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TechnolodiesImages from "./TechnolodiesImages";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TechnologiesStack = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={2000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      
      <TechnolodiesImages image="/icons/wordpress-icon.svg" />
      <TechnolodiesImages image="/icons/html-icon.svg" />
      <TechnolodiesImages image="/icons/css-icon.svg" />
      <TechnolodiesImages image="/icons/javascript.svg" />
      <TechnolodiesImages image="/icons/typescript.svg" />
      <TechnolodiesImages image="/icons/angular-icon.svg" />
      <TechnolodiesImages image="/icons/vue-js-icon.svg" />
      <TechnolodiesImages image="/icons/nextjs.svg" />
      <TechnolodiesImages image="/icons/nestjs.svg" />
      <TechnolodiesImages image="/icons/react-js-icon.svg" />
      <TechnolodiesImages image="/icons/nodejs.svg" />
      <TechnolodiesImages image="/icons/tailwind-css-icon.svg" />
      <TechnolodiesImages image="/icons/shadcn-ui.png" />
      <TechnolodiesImages image="/icons/materialui.svg" />
      <TechnolodiesImages image="/icons/graphql.svg" />
      <TechnolodiesImages image="/icons/mongodb.svg" />


    </Carousel>
  );
};

export default TechnologiesStack;
