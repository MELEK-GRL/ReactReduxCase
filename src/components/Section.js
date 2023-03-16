import React from "react";
import videoSpace from "../assets/img/space.mp4";
import africaImg from "../assets/img/africa.jpg";
import spaceImage from "../assets/img/spaceImg.jpg";
import { Link } from "react-router-dom";

export default function Section() {
  return (
    <div className="flex w-full">
      <div className="flex-col-reverse flex md:flex-row justify-between  gap-4 md:gap-0  w-full  items-center overflow-hidden ">
        <div className="w-full md:w-[50%] p-6 pt-0 md:p-0 flex flex-col gap-6 md:gap-16 justify-center items-center">
          <div className="flex flex-col gap-2 w-full md:w-fit">
            <h1 className=" font-bold text-2xl sm:text-3xl">FRONT</h1>
            <h1 className="font-bold text-5xl sm:text-7xl sm:ml-20">DEVOLOPER</h1>
          </div>
          <div className="flex  flex-col gap-8 ">
            <h1 className="text-xl font-bold">
              Let's explore frontend design with frontend developer..
            </h1>
            <div className="flex w-full items-end justify-end">
              <Link to="/about" className="hoverBtn w-fit">
                DISCOVER
              </Link>
            </div>
          </div>
        </div>
        <div className="flex  w-fit h-[400px] md:h-[600px]">
          <div className="p-5 md:w-[600px] md:h-[600px] h-[400px] w-[400px] relative flex  bg-zinc-400">
            <video
              src={videoSpace}
              autoPlay
              loop
              muted
              className="object-cover rounded absolute  h-[400px] w-[400px] md:w-[600px] md:h-[600px] top-0 left-0"
            ></video>
            <img
              src={spaceImage}
              className="mix-blend-screen rounded border-none object-cover h-[400px] w-[400px] md:w-[600px] md:h-[600px] absolute top-0 left-0 "
            />
            <img
              src={africaImg}
              className="mix-blend-screen rounded object-cover h-[400px] w-[400px] md:w-[600px] md:h-[600px] absolute top-0 left-0 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}