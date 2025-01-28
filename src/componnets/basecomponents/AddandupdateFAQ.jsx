import React, { useEffect } from "react";
import backsvg from "../../assets/SVG/backarrow.svg";

import { Link } from "react-router-dom";
import Underline from "./Underline";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { useRef } from "react";

const AddandupdateFAQ = ({
  goto,
  Underlinetext,
  // textid,
  descriptiontoid,
  nameplaceholder,

  defaulttext,
  buttontext,

  formData,
  handleInputChange,

  underlinewidth,
  answerplaceholder,
}) => {
  const [buttonbackground, setButtonbackground] = useState("bg-black");
  const [prevFormData, setPrevFormData] = useState(formData); // i am using this to check if the data has changed or not

  useEffect(() => {
    if (buttontext === "Save") {
      // Check if all required fields are filled for "Save"
      const isFormValid =
        formData.qestion && formData.Audience && formData.id && formData.answer;

      setButtonbackground(isFormValid ? "bg-custom-purple" : "bg-black");
    } else if (buttontext === "Update") {
      // Compare current formData with previous values for "Update"
      const hasChanges =
        formData.answer !== prevFormData.answer ||
        formData.qestion !== prevFormData.qestion ||
        formData.id !== prevFormData.id ||
        formData.Audience !== prevFormData.Audience;

      setButtonbackground(hasChanges ? "bg-custom-purple" : "bg-black");
    }
  }, [formData, buttontext, prevFormData]);

  return (
    <div className="bg-custom-white ml-4 pr-4  mr-2 min-h-screen relative  ">
      <div className="relative ">
        <Link className="w-5 h-5 absolute left-6 top-3" to={goto}>
          <img src={backsvg} alt="back icon" />
        </Link>
      </div>

      <div className="pt-1.5">
        <div className="w-fit pt-24 pl-6">
          <Underline
            thetext={Underlinetext}
            textsize={"text-[22px] font-bold"}
            cssproperty={`bg-black ${underlinewidth} h-[10px]  rounded-xl absolute bg-black mt-0.5`}
            paddingright={"pr-8"}
          />
        </div>
      </div>

      <div className="pl-6 ">
        <div className="flex flex-col mt-16 gap-y-8 ">
          <div className="relative w-[31%] ">
            <input
              // placeholder={textid}
              type="text"
              className="bg-black  text-white px-4 py-2.5 rounded-[7px] placeholder:text-white outline-none w-full"
              value={formData.id}
              onChange={(e) => handleInputChange("id", e.target.value)}
            />
            <small className="absolute bg-black text-white top-3 right-2 text-xs">
              {descriptiontoid}
            </small>
          </div>
          <div className="flex gap-x-8 items-start w-full">
            <div className="flex flex-col gap-y-2.5 w-[46%]  relative ">
              <Dropdown
                defaultText={defaulttext}
                options={["All", "Freelancers", "Companies"]}
                formData={formData}
                updateFormData={handleInputChange}
                correctvalue2={"Audience"}
              />

              <textarea
                name="question"
                id="qestion"
                rows={2}
                placeholder={nameplaceholder}
                className="resize-none bg-custom-tag px-4 py-2.5 rounded-[7px] outline-none placeholder:text-placehoder-text"
                value={formData.qestion}
                onChange={(e) => handleInputChange("qestion", e.target.value)}
              ></textarea>

              <textarea
                name="answer"
                id="answer"
                rows={6}
                placeholder={answerplaceholder}
                className=" text-sm resize-none bg-custom-tag pl-3 pr-1 py-2.5 rounded-[7px] outline-none placeholder:text-placehoder-text leading-5"
                value={formData.answer}
                onChange={(e) => handleInputChange("answer", e.target.value)}
              ></textarea>
            </div>

            {/* //upload side  */}
            <div className="flex  w-full gap-16  ">
              {/* <div className="flex flex-col gap-y-5 ">
                <div className="w-36 h-36 rounded-[7px] bg-custom-tag flex items-center justify-center overflow-hidden ">
                  <img
                    src={profilePic}
                    alt="profile"
                    className={` ${
                      formData.icon !== prevFormData.icon
                        ? "w-full h-full"
                        : "w-24 h-24 py-2"
                    }   `}
                  />
                </div>
                <button
                  className="bg-custom-purple rounded-[7px] py-2.5 px-5 text-white  font-medium"
                  onClick={handleclick}
                >
                  {profilebuttontext}
                </button>
              </div> */}
            </div>
          </div>
        </div>

        <button
          className={` ${buttonbackground} text-white font-medium px-5 py-2 mt-8 text-lg rounded-[7px]`}
        >
          {buttontext}
        </button>
      </div>
    </div>
  );
};

export default AddandupdateFAQ;
