import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";

const Hero = () => {
  const images = [frame1, frame2, frame3];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // 5 seconds

    return () => clearInterval(intervalId); // cleanup on unmount
  }, []);
  return (
    <div className="w-[1083px] mx-auto mt-[174px] flex justify-between items-center">
      {/* text div */}
      <div className="w-[535px]">
        <div className="w-[470px]">
          <h1 className="text-[50px] font-[500] text-[#292929]">
            Manage your Tasks on
            <span className="text-[50px] font-[500] text-[#974FD0]">
              TaskDuty
            </span>
          </h1>
        </div>
        <div className="my-[10px]">
          <p className="text-[24px] font-[400] text-[#737171]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
            sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
            tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
            semper porttitor. Nec accumsan.
          </p>
        </div>
        <div className="flex gap-[10px] items-center w-[210px] h-[50px] bg-[#974fd0] rounded-[8px] px-[25px] py-[10px]">
          <Link to={"/alltask"}>
            <button className="text-[#faf9fb] font-[500] text-[24px] cursor-pointer">
              Go to My Task
            </button>
          </Link>
        </div>
      </div>
      {/* image div */}
      <div className="w-[419px] h-[397px]">
        <img
          src={images[currentImage]}
          alt=""
          className="transition-opacity duration-500"
        />
      </div>
    </div>
  );
};

export default Hero;
