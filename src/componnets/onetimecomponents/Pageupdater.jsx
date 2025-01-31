import React from "react";
import Underline from "../basecomponents/Underline";
import backsvg from "../../assets/SVG/backarrow.svg";
import Dropdownform from "../basecomponents/Dropdownform";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Pageupdater = () => {
  const { page_id } = useParams();
  return (
    <div className="relative  bg-custom-white min-h-[100vh] px-7 mx-4">
      <div className=" absolute w-5 h-5 left-7  top-3">
        <Link className=" " to={`/apgspptscp/${page_id}`}>
          <img src={backsvg} alt="back icon" />
        </Link>
      </div>

      <div className="flex justify-between items-center pt-12">
        <div className="flex  items-center gap-7  w-1/3  ">
          <div>
            <Underline
              thetext={"Update About"}
              textsize={"text-[20px] font-[900]"}
              cssproperty={
                "bg-black w-[70px] h-[10px] rounded-xl absolute mt-0.5"
              }
            />
          </div>
          <div className="w-1/7 text-center  py-2 px-3 rounded-[5px]  bg-black text-white ">
            v3
          </div>
        </div>

        <button className="text-xl  py-2 px-4  bg-custom-purple text-white rounded-[7px] font-medium font-kantumruy">
          Update About
        </button>
      </div>

      <div className="w-full min-h-[80vh] flex items-center justify-center bg-custom-tag mt-10 rounded-[15px]">
        <p className="text-5xl font-light">Formatted text</p>
      </div>
    </div>
  );
};

export default Pageupdater;
