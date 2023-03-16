import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <div className="flex max-h-full min-h-screen items-center  gap-2  justify-between flex-col">
        <Header />
        <div className="flex w-full p-2 container">
        <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}