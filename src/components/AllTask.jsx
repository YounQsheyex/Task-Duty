import React from "react";
import tasks from "../../data.js";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const AllTask = () => {
  return (
    <div className="flex flex-col gap-15 items-center w-[1100px] mt-5 mx-auto">
      {tasks.map((task, index) => {
        return (
          <div className="w-[1100px] mx-auto  border-[0.5px] border-[#b8b6b6] rounded-[10px]">
            <div key={index} className="w-[1076px] px-[12px] py-[20px]">
              <div className="flex justify-between items-center">
                <div className="w-[71px]">
                  <h1
                    className={
                      task.priority === "Urgent"
                        ? "text-[#f38383] text-[24px] font-[400]"
                        : "text-[#73c3a6] text-[24px] font-[400]"
                    }
                  >
                    {task.priority}
                  </h1>
                </div>
                <div className="flex gap-5 items-center">
                  <button className="w-[126px] h-[50px] flex items-center gap-[10px] bg-[#974fd0] px-[25px] py-[10px] rounded-[8px]">
                    <FiEdit color="#faf9fb" />
                    <p className="text-[24px] font-[500] text-[#faf9fb]">
                      Edit
                    </p>
                  </button>
                  <button className="w-[151px] h-[50px] flex items-center gap-[10px] border-[1px] border-[#974fd0] rounded-[8px] px-[25px] py-[10px]">
                    <RiDeleteBin5Line color="#974fd0" />
                    <p className="text-[24px] text-[#974fd0] font-[500]">
                      Delete
                    </p>
                  </button>
                </div>
              </div>
              <hr className="my-5" />
              <div className="w-[355px] my-4">
                <h1 className="text-[35px] font-[400] text-[#292929]">
                  {task.title}
                </h1>
              </div>
              <div className="mb-3">
                <p className="text-[24px] font-[400] text-[#737171]">
                  {task.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
