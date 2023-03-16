import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

import css3 from "../assets/sliders/css3.webp";
import react from "../assets/sliders/react.png";
import tailwind from "../assets/sliders/tailwind.jpg";
import bootsrap from "../assets/sliders/bootsrap.png";
import js from "../assets/sliders/jss.jpg";
import nodejs from "../assets/sliders/nodejss.png";

function NextBtn(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="bg-gray-600 left-[-9px] text-white w-[24px] h-[24px] bottom-[5em] absolute border-none rounded"
      style={style}
      onClick={onClick}
    >
      <AiOutlineArrowLeft className=" w-[1.5em] h-[1.2em] top-[1px] right-[1px] relative" />
    </button>
  );
}

function PrevtBtn(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="bg-gray-600 w-[24px] h-[24px] text-white absolute z-10 top-[6em] right-[9px] border-none rounded"
      style={style}
      onClick={onClick}
    >
      <AiOutlineArrowRight className=" w-[1.5em] h-[1.2em] top-[2px] right-[0px] relative" />
    </button>
  );
}
export default function SliderPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextBtn />,
    prevArrow: <PrevtBtn />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 3.5,
                arrows:false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 3.5,
                arrows:false
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
            }
        }
    ]
  };
  return (
    <div className="w-full md:flex md:flex-row flex flex-col gap-8">
     <div className="w-full md:w-[50%] flex ">
       <div className="flex gap-8 w-full md:w-[80%] flex-col items-start justify-start ">
       <h1 className="uppercase border-gray-900 pt-2 border-b-2 w-fit font-bold text-2xl">
       Front-End devoloper
        </h1>
        <h1 className="border border-slate-600 font-semibold rounded-md p-2">
        Front-End software task is to prepare the skeleton structure of a site and to prepare this structure according to the wishes of the user. It provides the creation of the skeleton structure with three basic languages as CSS, HTML and JS. Mastery of these languages is extremely important for the frontend developer.
        </h1>
       </div>
      </div>
      <div className="w-full md:w-[50%] flex">
        <div className="w-full">
          <Slider {...settings} >
            <div className="flex ">
              <img
                alt={react}
                src={react}
                className=" w-[90%] h-[200px] object-cover"
              />
            </div>
            <div className="flex">
              <img
                alt={tailwind}
                src={tailwind}
                className="w-[90%] h-[200px] object-cover"
              />
            </div>
            <div className="flex">
              <img
                alt={css3}
                src={css3}
                className="w-[90%] h-[200px] object-cover"
              />
            </div>
            <div className="flex">
              <img
                alt={bootsrap}
                src={bootsrap}
                className="w-[90%] h-[200px] object-cover"
              />
            </div>
            <div className="flex">
              <img
                alt={js}
                src={js}
                className="w-[90%] h-[200px] object-cover"
              />
            </div>
            <div className="flex">
              <img
                alt={nodejs}
                src={nodejs}
                className="w-[90%] h-[200px] object-cover"
              />
            </div>
           
          </Slider>
        </div>
      </div>
    </div>
  );
}