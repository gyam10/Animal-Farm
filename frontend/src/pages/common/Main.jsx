import React from "react";

import Carosusel from "../../components/Carousel";

const Main = () => {
  return (
    <>
      <div className="bg-[#E8E9EB] bg-cover sm:h-auto md:h-[96vh] w-[100%] ">
        {/* <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <div>
            <div className=" pl-16 pt-16 text-6xl tracking-widest font-bold">
              Animal Farm
            </div>
            <p className="p-10 text-lg font-semibold tracking-wide text-justify">
              Info about the website and the animal farm. Info about the website
              and the animal farm. Info about the website and the animal farm.
              Info about the website and the animal farm. Info about the website
              and the animal farm. Info about the website and the animal farm.
              Info about the website and the animal farm. Info about the website
              and the animal farm. Info about the website and the animal farm.
            </p>
          </div>
        </div> */}
        <Carosusel />
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-2">
          <div className="flex items-center justify-center m-8 flex-col hover:scale-105 p-5  ease-in duration-300">
            <div className="h-[5px] rounded-lg bg-black/70 w-full" />
            <div className="flex flex-col mt-5 ">
              <p className="font-bold tracking-wider text-2xl">Here</p>
              <p className="text-sm text-gray-600 text-justify">
                Write something that we can share. Write something that we can
                share. Write something that we can share. Write something that
                we can share.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center m-8 flex-col hover:scale-105 p-5  ease-in duration-300">
            <div className="h-[5px] rounded-lg bg-black/70 w-full" />
            <div className="flex flex-col mt-5 ">
              <p className="font-bold tracking-wider text-2xl">Here</p>
              <p className="text-sm text-gray-600 text-justify">
                Write something that we can share. Write something that we can
                share. Write something that we can share. Write something that
                we can share.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center m-8 flex-col hover:scale-105 p-5  ease-in duration-300">
            <div className="h-[5px] rounded-lg bg-black/70 w-full" />
            <div className="flex flex-col mt-5 ">
              <p className="font-bold tracking-wider text-2xl">Here</p>
              <p className="text-sm text-gray-600 text-justify">
                Write something that we can share. Write something that we can
                share. Write something that we can share. Write something that
                we can share.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
