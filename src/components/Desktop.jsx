import React from "react";
import { BsImageFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

const Desktop = () => {
  return (
    <div className="bg-[#FAFAFA] h-[100vh] mx-auto  py-[50px] ">
      {/* Header  */}
      <nav className="flex justify-around items-center">
        <div className="flex gap-4">
          {/* Logo  */}
          <div className="flex items-center gap-1">
            <BsImageFill />
            <h2 className="text-[#13113C] font-bold">wallmine</h2>
          </div>
          {/* status  */}
          <div>
            <p>Status</p>
          </div>
        </div>
        <div>
          <button className="bg-[#5F59F7] text-white font-medium sm:font-normal py-1 px-5 rounded-sm">
            E-mail helpdesk
          </button>
        </div>
      </nav>

      {/* hero  */}
      <div className="flex flex-col items-center my-[60px]">
        <div className=" rounded-full bg-[#21B062] text-6xl text-white">
          <TiTick />
        </div>
        <h1 className="text-xl">All services are online</h1>
        <p className="text-sm text-[#42476180]">As of June 1st, 1:46 PM ET</p>
      </div>

      {/* API Status  */}
      <div className="bg-[#FAFAFC] w-2/3 flex flex-col mx-auto drop-shadow-2xl border-solid border-2 rounded-xl py-5">
        {/* Heading  */}
        <div className="flex justify-around items-center my-5">
          <h1 className="font-bold">Current status by service</h1>
          <ul className="gap-1 hidden lg:flex">
            <li className="rounded-full bg-gray-400 text-sm text-white">
              <TiTick />
            </li>
            <li className="rounded-full bg-gray-400 text-sm text-white">
              <TiTick />
            </li>
            <li className="rounded-full bg-gray-400 text-sm text-white">
              <TiTick />
            </li>
            <li className="rounded-full bg-gray-400 text-sm text-white">
              <TiTick />
            </li>
            <li className="rounded-full bg-gray-400 text-sm text-white">
              <TiTick />
            </li>
          </ul>
        </div>

        {/* Single APIs  */}
        <div className="bg-white flex flex-col lg:px-[100px] mb-2">
          <div className="flex justify-around items-center my-2">
            <div className="flex items-center gap-1">
              <TiTick className="rounded-full bg-[#21B062] text-sm text-white" />
              <p>API</p>
            </div>
            <p>100.000% uptime</p>
          </div>
          <div className="bg-[#21B062] w-full h-[80px]"></div>
        </div>

        <div className="bg-white flex flex-col lg:px-[100px]   mb-2">
          <div className="flex justify-around items-center my-2">
            <div className="flex items-center gap-1">
              <TiTick className="rounded-full bg-[#FFB72B] text-sm text-white" />
              <p>Dashboard</p>
            </div>
            <div>
              <p>99.987% uptime</p>
            </div>
          </div>
          <div className="bg-[#21B062] w-auto h-[100px]"></div>
        </div>

        <div className="bg-white flex flex-col lg:px-[100px] mb-2">
          <div className="flex justify-around items-center my-2">
            <div className="flex items-center gap-1">
              <TiTick className="rounded-full bg-[#DE3618] text-sm text-white" />
              <p>Landing Page</p>
            </div>
            <div>
              <p>99.706% uptime</p>
            </div>
          </div>
          <div className="bg-[#21B062] w-auto h-[100px]"></div>
        </div>
      </div>

      {/* Footer  */}
      <div className="flex justify-around my-5 p-5 text-[#424761]">
        <h4>@ 2020 wallmine</h4>
        <h4 className="flex items-center gap-1">
          Powered by
          <span>
            {" "}
            <TiTick className="rounded-full bg-black text-sm text-white" />
          </span>
          <span className="font-bold">Better Uptime</span>
        </h4>
      </div>
    </div>
  );
};

export default Desktop;
