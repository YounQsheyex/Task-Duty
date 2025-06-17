import React from "react";
import { Link } from "react-router-dom";
import dashlogo from "../assets/logodash.png";
import pic from "../assets/pic.jpg";
import { MdOutlineArrowBackIos } from "react-icons/md";
import NewTaskForm from "./NewTaskForm";

const NewTask = () => {
  return (
    <div>
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
            <Link to={"/alltask"}>
              <div className="text-[22px] font-[500] text-[#292929]">
                All Task
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
      {/* hero */}
      <div className="w-[1083px] mx-auto mt-10">
        <div className="flex items-center justify-between w-[260px]">
          <div className="w-[40px] h-[40px]">
            <Link to={"/allTask"}>
              <MdOutlineArrowBackIos
                className="w-full h-full"
                color={"#292929"}
              />
            </Link>
          </div>
          <div className="w-[200px]">
            <h1 className="font-[500] text-[50px] text-[#292929]">New Task</h1>
          </div>
        </div>
        <div>
          <NewTaskForm />
        </div>
      </div>
      {/* back to top */}
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

export default NewTask;
