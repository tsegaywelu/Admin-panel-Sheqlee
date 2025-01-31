import React from "react";
import { useLocation } from "react-router-dom";
import backsvg from "../../assets/SVG/backarrow.svg";
import { Link } from "react-router-dom";
import Underline from "../basecomponents/Underline";
import { useState } from "react";
import { useEffect } from "react";
const Updatehero = () => {
  const { state } = useLocation();
  const [prevformData] = useState({
    Title: state.title,
    description: state.description,
  });
  const [formData, setFormData] = useState({ ...prevformData });

  const [buttonbackground, setButtonbackground] = useState("bg-black");
  useEffect(() => {
    const hasChanges = Object.keys(formData).some(
      (key) => formData[key] !== prevformData[key]
    );

    setButtonbackground(hasChanges ? "bg-custom-purple" : "bg-black");
  }, [formData]);
  const handlechange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <div className="bg-custom-white ml-4 pr-4  mr-2 min-h-screen relative ">
      <div className="relative ">
        <Link className="w-5 h-5 absolute left-6 top-3" to={"/systemconfig"}>
          <img src={backsvg} alt="back icon" />
        </Link>
      </div>

      <div className="w-fit pt-24 pl-6">
        <Underline
          thetext={"UPDATE Hero"}
          textsize={"text-[22px] font-bold"}
          cssproperty={`bg-black w-[35%] h-[10px]  rounded-xl absolute bg-black mt-0.5`}
          paddingright={"pr-8"}
        />
      </div>

      <div className="flex flex-col gap-5  mt-20 pl-6 w-[30%]">
        <input
          type="text"
          className="bg-black text-white px-4 py-2.5 rounded-[7px] outline-none placeholder:text-placehoder-text"
          value={formData.Title}
          onChange={(e) => handlechange("Title", e.target.value)}
        />
        <textarea
          rows={4}
          name="area"
          id="teaxt-area"
          className="bg-custom-tag pr-4 pl-2 py-3.5 rounded-[7px] outline-none placeholder:text-placehoder-text resize-none relative leading-5"
          value={formData.description}
          onChange={(e) => handlechange("description", e.target.value)}
        ></textarea>
      </div>
      <div className="pt-10 pl-6">
        <button
          className={` ${buttonbackground} text-white font-medium px-5 py-2  text-lg rounded-[7px]`}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Updatehero;
