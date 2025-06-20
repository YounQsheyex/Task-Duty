import React from "react";
import BounceLoader from "react-spinners/BounceLoader";
import logo from "../assets/logo.png";

const SusLoader = ({height}) => {
  return (
    <div
      style={{ height: height ? height : "50vh" }}
      className={`flex items-center justify-center`}
    >
      <div className="flex items-center gap-3">
        <BounceLoader />
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" />
          <div>
            <h2 className="font-medium text-lg lg:text-xl ">Task Duty</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SusLoader;
