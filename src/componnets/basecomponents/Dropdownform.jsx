import React, { useState, useEffect } from "react";
import arrowdown from "../../assets/SVG/arrowdown.svg";

const Dropdownform = ({
  options,
  defaultText,
  // labeltext,
  // warn,
  // updateFormData,
  // formData,
  // correctvalue2,
  roundedright,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedvalue, setselected] = useState(defaultText);

  //   useEffect(() => {
  //     if (formData[correctvalue2]) {
  //       setselected(formData[correctvalue2]);
  //     }
  //   }, [formData, correctvalue2]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setselected(option);
    // updateFormData(correctvalue2, option);
    setIsOpen(false);
  };

  return (
    <div className="text-start ">
      {/* {labeltext && (
        <label className=" md:text-xl inline-block my-3 font-kantumruy font-medium">
          {labeltext} {warn && <span className="text-red-600">*</span>}
        </label>
      )} */}
      <div className={`relative inline-block w-full ${isOpen && "z-50 "}`}>
        <button
          onClick={toggleDropdown}
          className={`  ${
            isOpen ? " z-50 rounded-b-none border-b-[2px] border-unknown " : " "
          } bg-custom-tag rounded-[7px] ${roundedright} h-full   py-[10px] px-3 w-full text-[16px] text-custom-placeholder text-start font-kantumruy `}
          aria-expanded={isOpen}
          aria-controls="dropdown-options"
        >
          {selectedvalue}
          <img
            src={arrowdown}
            alt=""
            className={` h-[14px] w-[14px] absolute top-4 right-4 ${
              isOpen
                ? "rotate-180 transition duration-700"
                : "rotate-0 transition duration-700"
            }`}
          />
        </button>
        {isOpen && (
          <ul
            id="dropdown-options"
            className={`z-50  absolute text-custom-placeholder left-0 w-full  bg-custom-tag  rounded-lg overflow-scroll rounded-t-none  ${roundedright}`}
          >
            {options.map((option, index) => (
              <div className="hover:bg-gray-100">
                <li
                  key={index}
                  className="ml-4   py-[5px] border-b-[1px] border-unknown  cursor-pointer text-[14px] "
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              </div>
            ))}
          </ul>
        )}
      </div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full backdrop:blur-lg z-20 bg-black opacity-60"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      )}
    </div>
  );
};

export default Dropdownform;
