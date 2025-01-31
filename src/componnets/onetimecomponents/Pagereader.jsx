import React from "react";
import Underline from "../basecomponents/Underline";
import backsvg from "../../assets/SVG/backarrow.svg";
import Dropdownform from "../basecomponents/Dropdownform";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Pagereader = () => {
  const { page_id } = useParams();
  return (
    <div className="relative  bg-custom-white min-h-[100vh] px-7 mx-4">
      <div className=" absolute w-5 h-5 left-7 top-3">
        <Link className=" " to={"/systemconfig"}>
          <img src={backsvg} alt="back icon" />
        </Link>
      </div>

      <div className="flex justify-between items-center pt-12">
        <div className="flex  items-center gap-8  w-1/3  ">
          <div>
            <Underline
              thetext={"READ ABOUT"}
              textsize={"text-[21px] font-[900]"}
              cssproperty={
                "bg-black w-[70px] h-[10px] rounded-xl absolute mt-0.5"
              }
            />
          </div>
          <div className="w-1/4  ">
            <Dropdownform
              options={["v1", "v2", "v3", "v4", "v5"]}
              defaultText="v1"

              //   updateFormData={updateFormData}
              //   formData={formData}
              //   correctvalue2={"category"}
            />
          </div>
        </div>

        <button className="text-xl  py-2 px-4  bg-custom-purple text-white rounded-[7px] font-medium font-kantumruy">
          <Link to={`/apgspptscp/pageupdate/${page_id}`}>Create new About</Link>
        </button>
      </div>

      <div className="w-full min-h-[80vh] flex items-center justify-center bg-custom-tag mt-10 rounded-[15px]">
        <p className="text-5xl font-light">Formatted text</p>
      </div>
    </div>
  );
};

export default Pagereader;
