import React from "react";
import TabPage from "../../components/Tab/TabPage";
import Icons from "../../components/Cart";
import SliderPage from "../../components/SliderPage";

export default function About() {
  return (
    <div className="flex  gap-4   w-full items-center justify-center ">
      <div className="flex container flex-col gap-8">
        <SliderPage />
        <Icons />
        <TabPage />
      </div>
    </div>
  );
}