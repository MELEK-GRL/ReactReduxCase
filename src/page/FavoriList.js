import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FavoriList() {
  const navigate = useNavigate();
  const { card } = useSelector((x) => x.cards);
  return (
    <div className="flex  gap-4   w-full items-center justify-center ">
      <div className="w-full flex container flex-col gap-8 h-[600px]  overflow-y-auto ">
        <div className="w-full fleitem items-center justify-center">
          <div className="w-full items-center font-semibold flex  justify-between text-2xl p-2  border-b-2 border-gray-900 ">
            <h1>YOUR CHOICES</h1>
            <button
              onClick={() => navigate("/favorite")}
              className="hoverBtnRed  text-sm md:text-lg"
            >
              FAVORİ
            </button>
            <h1 className="hoverBtn text-sm md:text-lg">
            My Picks: {card.length}
            </h1>
          </div>
          <ul className="grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid gap-2  w-full">
            {card &&
              card.map((x) => (
                <div key={x.id}>
                  <li className="p-2 h-[200px] relative cursor-pointer flex-col border-gray-200 border-2 rounded-md flex items-center justify-center">
                 
                    <img
                      alt={x.name}
                      src={x.image}
                      className="object-cover w-full h-full"
                    />
                  </li>
                 <div className="flex w-full items-center justify-center">
                 <p className='hoverBtn w-fit flex gap-2'>{x.count}<span> pieces</span></p>
                 </div>
                 
                </div>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}