import React from "react";
import listData from "../data/listData";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddCard } from "../store/categoriesStore";
import { useNavigate } from "react-router-dom";


export default function Favori() {
  const { card } = useSelector((x) => x.cards);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  return (
    <div className="flex  gap-4   w-full items-center justify-center ">
      <div className="w-full flex container flex-col">
        <div className="w-full flex  flex-col items-center justify-center gap-8  h-[600px]  overflow-y-auto">
          <div className="w-full items-center font-semibold flex  justify-between text-2xl p-2  border-b-2 border-gray-900 ">
            <h1>SELECT YOUR FAVORITE</h1>
            <button onClick={()=>navigate('/favoritelist')} className="hoverBtnRed text-sm md:text-lg">FAVORİ LİST</button>
          </div>
          <ul className="grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid gap-2  w-full">
            {listData &&
              listData.map((x) => (
                <div key={x.id}>
                  <li className="p-2 h-[200px] relative cursor-pointer flex-col border-gray-200 border-2 rounded-md flex items-center justify-center">
                  <button
                    type="submit"
                    onClick={()=>dispatch(AddCard(x))}
                    className="hoverBtn py-1 absolute top-0 right-0"
                  >
                   +
                  </button>
                    <img
                      alt={x.name}
                      src={x.image}
                      className="object-cover w-full h-full"
                    />
                  </li>
                 
                </div>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}