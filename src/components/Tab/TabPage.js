import React from "react";
import Tab from "./Tab";
import { useState } from "react";
import Sliders from "../Sliders";

export default function TabPage() {
  const [tab, setTab] = useState(1);
  return (
    <div className="w-full flex-col-reverse md:gap-0 gap-12 flex md:flex-row md:flex">
      <div className="container flex flex-col gap-8  w-full md:w-[50%]">
        <h1 className="border-gray-900 pt-2 border-b-2 w-fit font-bold text-2xl">
          INFORMATION ABOUT MERN
        </h1>
        <Tab activeTab={tab} setTab={setTab}>
          <Tab.Panel title="MongoDB">
            <div className="flex w-full h-25 flex-col gap-3">
              <h1 className="font-semibold">
                MongoDB is simply an open source NoSQL (Not only SQL) database
                application. MongoDB Inc. Developed by C++ programming language
                in 2009 by MongoDB, it is a document-based and scalable
                application. MongoDB, which is preferred more in structures
                where traditional relational databases cannot keep up and
                becomes cumbersome due to its fast and open source code, has
                gained popularity all over the world.
              </h1>
            </div>
          </Tab.Panel>
          <Tab.Panel title="ExpressJS">
            <div className="flex w-full h-25 flex-col gap-3">
              <h1 className="font-semibold">
                Express.js module / package is a Node.js based web application
                server framework. Express.js' methods make it quick and easy to
                build a robust API, thanks to unlimited HTTP utilities and
                layers.
              </h1>
            </div>
          </Tab.Panel>
          <Tab.Panel title="ReactJS">
            <div className="flex w-full h-25 flex-col gap-3">
              <h1 className="font-semibold">
                React is a JavaScript library used to generate fast and
                effective user results for web applications. As an open source,
                based and front-end library, React is only responsible for
                keyboard view layers.
              </h1>
            </div>
          </Tab.Panel>
          <Tab.Panel title="nodeJS">
            <div className="flex w-full h-25 flex-col gap-3">
              <h1 className="font-semibold">
                Node.js is targeted to make JavaScript commands run on the
                server side by making various additions to the V8 JavaScript
                module, which was used by Ryan Dahl in 2009 to use the
                JavaScript commands of the Google Chrome browser.
              </h1>
            </div>
          </Tab.Panel>
        </Tab>
      </div>
      <div className="w-full md:w-[50%] gap-8 flex flex-col items-start justify-start ">
        <Sliders />
      </div>
    </div>
  );
}