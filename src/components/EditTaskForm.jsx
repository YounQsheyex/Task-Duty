import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { axiosInstance } from "../../utils/axiosIntance";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditTaskForm = () => {
  const redirect = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState();

  const fetchTask = async () => {
    try {
      const response = await axiosInstance.get("/task/singleTask/" + id);
      console.log(response.data);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setPriority(response.data.priority);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const editTask = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axiosInstance.patch(`/task/editTask/${id}`, {
        title,
        description,
        priority,
      });
      console.log(response.data);
      toast.success("Task updated successfully!");
      redirect("/alltask");
      // const { data } = response;
      // setTitle(data.title);
      // setDescription(data.description);
      // setPriority(data.priority);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={editTask} className="w-[1100px] mx-auto my-20">
        {/* Title */}
        <div className="w-[1000px] relative">
          <label
            htmlFor="text"
            className="w-[119px] px-[] font-[400] text-[30px] text-[#9c9c9c] absolute top-[-20px] left-[50px] bg-white z-10"
          >
            Task Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="text"
            type="text"
            placeholder="E.g Project Defense, Assignment ..."
            className="w-[1000px] h-[84px] px-[50px] border-[1px] border-[#b8b6b6] rounded-[5px] text-[22px] font-[400] placeholder-[#cccccc] focus:outline-none"
          />
        </div>
        {/* Description */}
        <div className="relative w-[1000px] mt-20">
          <label
            htmlFor="description"
            className="w-[148px] font-[400] text-[30px] text-[#9c9c9c] absolute left-[50px] top-[-25px] z-10 bg-white"
          >
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            placeholder="Briefly describe your task..."
            className="w-[1000px] h-[244px] px-[50px] py-[25px] rounded-[5px] border-[1px] border-[#b8b6b6] text-[22px] font-[400] placeholder-[#cccccc] focus:outline-none "
          ></textarea>
        </div>
        {/* Tags */}
        <div className="relative w-[1000px] mt-20">
          <label
            htmlFor="tag"
            className="w-[57px] font-[400] text-[30px] text-[#9c9c9c] absolute left-[50px] top-[-25px] bg-white z-10"
          >
            Tags
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            id="tag"
            className="w-[1000px] h-[84px] px-[50px] border-[1px] border-[#b8b6b6] rounded-[5px] focus:outline-none"
          >
            <option value="important" className="font-[400] text-[22px]">
              Important
            </option>
            <option value="Urgent" className="font-[400] text-[22px]">
              Urgent
            </option>
          </select>
        </div>
        {/* Button */}
        {/* <Link to={"/alltask"}> */}
        <div className="w-[1000px] hn-[84px] bg-[#974fd0] px-[25px] py-[10px] rounded-[8px] flex justify-center mt-15 cursor-pointer">
          <button
            disabled={isSubmitting}
            className="text-[35px] font-[500] text-[#faf9fb]"
          >
            Done
          </button>
        </div>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default EditTaskForm;
