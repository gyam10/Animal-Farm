import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import caretaker from "../assets/images/caretaker.jpg";
import animalcare2 from "../assets/images/animalcare2.jpg";
import animalcare3 from "../assets/images/animalcare3.jpg";

const CarouselBanner = () => {
  return (
    <Carousel
      showStatus={false}
      autoPlay={true}
      transitionTime={5}
      dynamicHeight={true}
      showThumbs={false}
      infiniteLoop={true}
      className="relative "
    >
      <div className=" bg-sky-100 ">
        <div className="flex justify-between mx-4 ">
          <div className="flex justify-center items-center ">
            Help you to keep progress of Animal and Fram
          </div>
          <div>
            <img
              src={caretaker}
              className="h-[700px]  object-cover object-right-bottom"
            />
          </div>
        </div>

        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div className=" bg-sky-100 ">
        <div className="flex justify-between mx-4 ">
          <div className="flex justify-center items-center ">
            Help you to keep progress of Animal and Fram
          </div>
          <div>
            <img
              src={animalcare2}
              className="h-[700px] w-[500px] object-cover object-right-bottom"
            />
          </div>
        </div>

        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div className=" bg-sky-100 ">
        <div className="flex justify-between mx-4 ">
          <div className="flex justify-center items-center ">
            Help you to keep progress of Animal and Fram
          </div>
          <div>
            <img
              src={animalcare3}
              className="h-[700px] w-[500px]  object-cover object-right-bottom"
            />
          </div>
        </div>

        {/* <p className="legend">Legend 1</p> */}
      </div>
    </Carousel>
  );
};

export default CarouselBanner;
