import React from "react";
import { Link } from "react-router-dom";
import dashlogo from "../assets/logodash.png";
import pic from "../assets/pic.jpg";

const Nav = () => {
  return (
    <section className="w-full h-[93px] border-[0.5px] border-[#B8B6B6]">
      <div className="w-[1083px] p-[10px] mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to={"/"}>
          <div>
            <img src={dashlogo} alt="logo" />
          </div>
        </Link>
        {/* links */}
        <div className="w-[310px] flex gap-10 items-center">
          <Link to={"/newtask"}>
            <div className="text-[22px] font-[500] text-[#292929]">
              New Task
            </div>
          </Link>
          {/* all task */}
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
    </section>
  );
};

export default Nav;
