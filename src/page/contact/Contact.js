import React from "react";
import MesageLogin from "../../components/MesageLogin";
import Mesage from "../../components/Mesage";
import { useSelector } from "react-redux";
export default function Contact() {
  const { user } = useSelector((state) => state.login);
  return (
    <div className="flex   gap-4  w-full items-center justify-center ">
      <div className="flex container flex-col w-full gap-8">
        <div className="w-full  flex items-center justify-center ">
          <h1 className="uppercase border-gray-900 pt-2 border-b-2 w-fit font-bold text-2xl">
            do you want to send a message ?
          </h1>
        </div>
        {user ? <Mesage /> : <MesageLogin />}
      </div>
    </div>
  );
}