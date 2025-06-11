import React from "react";
import dashlogo from "../assets/logodash.png";
import pic from "../assets/pic.jpg";

const Nav = () => {
  return (
    <section className="w-full h-[93px] border-[0.5px] border-[#B8B6B6]">
      <div className="w-[1083px] p-[10px] mx-auto flex justify-between items-center">
        {/* logo */}
        <div>
          <a href="#">
            <img src={dashlogo} alt="logo" />
          </a>
        </div>
        {/* links */}
        <div className="w-[310px] flex gap-10 items-center">
          <div>
            <a href="#" className="text-[22px] font-[500] text-[#292929]">
              New Task
            </a>
          </div>
          <div>
            <a href="#" className="text-[22px] font-[500] text-[#292929]">
              All Task
            </a>
          </div>
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
