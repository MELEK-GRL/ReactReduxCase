import React from "react";
import cartDataFirst from "../data/cartDataFirst";
import cartDataSecond from "../data/cartDataSecond";
import cardDataThree from "../data/cardDataThree";

export default function Cart() {
  return (
    <div className="w-full flex-col md:flex md:flex-row flex">
      <div className="flex  gap-x-10 w-full md:w-[50%] p-4 h-[320px] items-center justify-center md:justify-start overflow-hidden">
        <div className=" object-cover h-fit flex flex-col gap-3 hover:transition-all">
          {cartDataFirst.map((x, index) => (
            <img
              alt={x.name}
              key={index}
              src={x.image}
              className="hover:translate-y-2  cursor-pointer border-gray-300 border-2 object-cover rounded-full w-[100px] h-[100px]"
            />
          ))}
        </div>
        <div className="object-cover mb-[100px] h-fit flex flex-col gap-3 hover:transition-all">
          {cartDataSecond.map((x, index) => (
            <img
              alt={x.name}
              key={index}
              src={x.image}
              className="cursor-pointer hover:translate-y-2 border-gray-300 border-2 object-cover rounded-full w-[100px] h-[100px]"
            />
          ))}
        </div>
        <div className=" object-cover h-fit flex flex-col gap-3 hover:transition-all">
          {cardDataThree.map((x, index) => (
            <img
              alt={x.name}
              key={index}
              src={x.image}
              className="hover:translate-y-2  cursor-pointer border-gray-300 border-2 object-cover rounded-full w-[100px] h-[100px]"
            />
          ))}
        </div>
      </div>

      <div className="w-full md:w-[50%] gap-8 flex flex-col items-start justify-start ">
        <h1 className="border-gray-900 pt-2 border-b-2 w-fit font-bold text-2xl">
          ABOUT SOFTWARE
        </h1>
        <h1 className="border border-slate-600 font-semibold rounded-md p-2">
          Of course, software development experts are constantly working on the
          use of technology products more efficiently from the past to the
          present. Important software developers directing technology; They are
          world-renowned and each has experience in different software variants.
          Again, these experiences come together in many common points such as
          programming, coding abilities, research and development abilities, and
          really good products emerge. They have contributed to humanity and
          technology, whose names have been heard about software.
        </h1>
      </div>
    </div>
  );
}