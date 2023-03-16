import React from 'react'
import Slider from "react-slick";
import wep1 from '../assets/sliders/w-1.jpg'
import wep2 from '../assets/sliders/w-2.jpg'
import wep3 from '../assets/sliders/w-3.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Sliders() {
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img alt={wep2} src={wep2} className=' object-cover ' />
        </a>
      );
    },
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  return (
    <div className='flex  flex-col w-full'>

    <Slider {...settings}>
      <div className='bg-red-300 w-full items-center justify-center'>
      <img alt={wep2} src={wep2}  className='w-full h-[220px] object-cover'/>
      </div>
      <div className='bg-red-300 w-full items-center justify-center'>
      <img alt={wep3} src={wep3}  className='w-full h-[220px] object-cover'/>
      </div>
      <div className='bg-red-300 w-full items-center justify-center'>
      <img alt={wep1} src={wep1}  className='w-full h-[220px] object-cover'/>
      </div>
      
    </Slider>
  </div>
  )
}