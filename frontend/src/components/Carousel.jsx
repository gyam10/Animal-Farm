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
      className="relative"
    >
      <div className=" bg-[#E8E9EB]  ">
        <div className="flex justify-between mx-4 w-full">
          <div className="flex justify-center items-center w-[50%]">
            Help you to keep progress of Animal and Fram
          </div>
          <div className="w-[50%] ">
            <img
              src={caretaker}
              alt="caretaker"
              className="h-[53vh] w-[100%] object-scale-down    object-right-bottom"
            />
          </div>
        </div>

        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div className=" bg-[#E8E9EB] ">
        <div className="flex justify-between mx-4 w-full ">
          <div className="flex justify-center items-center w-[50%]">
            Help you to keep progress of Animal and Fram
          </div>
          <div className="w-[50%]">
            <img
              src={animalcare2}
              alt="animalcare2"
              className="h-[53vh]  object-cover object-right-bottom"
            />
          </div>
        </div>

        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div className=" bg-[#E8E9EB] ">
        <div className="flex justify-between mx-4 w-full">
          <div className="flex justify-center items-center w-[50%]">
            Help you to keep progress of Animal and Fram
          </div>
          <div className="w-[50%]">
            <img
              src={animalcare3}
              alt="animalcare3"
              className="h-[53vh] w-[500px]  object-cover object-right-bottom"
            />
          </div>
        </div>

        {/* <p className="legend">Legend 1</p> */}
      </div>
    </Carousel>
  );
};

export default CarouselBanner;
