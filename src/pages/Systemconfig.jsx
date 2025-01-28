import React from "react";
import FAQ from "./FAQ";
import { useState } from "react";
import Textcard from "../componnets/basecomponents/Textcard";
import APGSPPTSCP from "./APGSPPTSCP";
const Systemconfig = () => {
  const [activeTitle, setactiveTitle] = useState({
    Title: "FAQ",
  });
  const UpdateActivetitle = (Title, value) => {
    setactiveTitle((prevdata) => ({
      ...prevdata,
      [Title]: value,
    }));
  };

  return (
    <div className="bg-custom-white">
      <div className=" mx-10  font-kantumruy font-medium text-xl  flex justify-start items-center   rounded-b-[10px] overflow-hidden bg-custom-tag w-fit">
        <button
          className={` py-[10px] ${
            activeTitle.Title === "FAQ" ? "text-white bg-black " : ""
          }`}
          onClick={(e) => UpdateActivetitle("Title", "FAQ")}
        >
          <Textcard
            text={"FAQ"}
            showborderleft={"border-r-[1.5px] border-custom-placeholder"}
          />
        </button>
        <button
          className={` py-[10px] ${
            activeTitle.Title === "APGSPPTSCP" ? "text-white bg-black " : ""
          }`}
          onClick={(e) => UpdateActivetitle("Title", "APGSPPTSCP")}
        >
          <Textcard
            text={"APGSPPTSCP"}
            showborderleft={"border-r-[1.5px] border-custom-placeholder"}
          />
        </button>
        <button
          className={` py-[10px] ${
            activeTitle.Title === "Testimonials" ? "text-white bg-black " : ""
          }`}
          onClick={(e) => UpdateActivetitle("Title", "Testimonials")}
        >
          <Textcard
            text={"Testimonials"}
            activeTitle={activeTitle.Title}
            UpdateActivetitle={UpdateActivetitle}
            showborderleft={"border-r-[1.5px] border-custom-placeholder"}
          />
        </button>
        <button
          className={` py-[10px] ${
            activeTitle.Title === "Hero" ? "text-white bg-black " : ""
          }`}
          onClick={(e) => UpdateActivetitle("Title", "Hero")}
        >
          <Textcard
            text={"Hero"}
            activeTitle={activeTitle.Title}
            UpdateActivetitle={UpdateActivetitle}
            showborderleft={"border-r-[1.5px] border-custom-placeholder"}
          />
        </button>
        <button
          className={` py-[10px] ${
            activeTitle.Title === "Footer" ? "text-white bg-black " : ""
          }`}
          onClick={(e) => UpdateActivetitle("Title", "Footer")}
        >
          <Textcard
            text={"Footer"}
            activeTitle={activeTitle.Title}
            UpdateActivetitle={UpdateActivetitle}
          />
        </button>
      </div>
      <APGSPPTSCP />
    </div>
  );
};

export default Systemconfig;
