import React from "react";
import dashlogo from "../assets/logodash.png";
import pic from "../assets/pic.jpg";
import AllTask from "./AllTask.jsx";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import SusLoader from "./SusLoader.jsx";

const GotoMyTask = () => {
  return (
    <div>
      {/* nav session */}
      <div id="top" className="w-full border-[0.5px] border-[#b8b6b6]">
        <div className="w-[1100px] p-[10px] mx-auto flex justify-between items-center">
          {/* logo */}
          <Link to={"/"}>
            <div>
              <img src={dashlogo} alt="logo" />
            </div>
          </Link>
          {/* links */}

          <div className="w-[188px] flex items-center justify-between">
            <Link to={"/newTask"}>
              <div className="text-[22px] font-[500] text-[#292929]">
                New Task
              </div>
            </Link>

            <div className="border-[3px] border-[#292929] rounded-full ">
              <img
                src={pic}
                alt="pic"
                className=" w-[60px] h-[60px] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* hero section */}
      <div className="w-[1101px] mx-auto flex justify-between my-10">
        <div className="w-[191px]">
          <h1 className="text-[50px] text-[#292929] font-[500]">My Task</h1>
        </div>
        <Link to={"/newTask"}>
          <div className="mt-5">
            <button className="text-[#974fd0] flex gap-2 items-center cursor-pointer">
              <IoAdd size={"24px"} />
              <p className="text-[24px]">Add New Task</p>
            </button>
          </div>
        </Link>
      </div>
      <AllTask />
      <div className="w-[128px] mx-auto my-10">
        <a
          href="#top"
          className="text-[26px] text-[#974fd0] underline font-[500] text-center"
        >
          Back To Top
        </a>
      </div>
    </div>
  );
};

export default GotoMyTask;
