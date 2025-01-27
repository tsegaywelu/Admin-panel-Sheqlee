import React, { useState, useEffect } from "react";
import arrowdown from "../../assets/SVG/arrowdown.svg";
const Dropdown = ({
  options,
  defaultText,
  labeltext,
  warn,
  updateFormData,
  formData,
  correctvalue2,
  roundedright,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedvalue, setselected] = useState(defaultText);
  useEffect(() => {
    if (formData[correctvalue2]) {
      setselected(formData[correctvalue2]);
    }
  }, [formData, correctvalue2]);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setselected(option);
    updateFormData(correctvalue2, option);
    setIsOpen(false);
  };
  return (
    <div className="text-start " onMouseLeave={(e) => setIsOpen(false)}>
      {/* {labeltext && (
        <label className=" md:text-xl inline-block my-3 font-kantumruy font-medium">
          {labeltext} {warn && <span className="text-red-600">*</span>}
        </label>
      )} */}
      <div className="relative inline-block w-full">
        <button
          onClick={toggleDropdown}
          className={`bg-custom-tag rounded-lg ${roundedright} h-full outline-none  py-2.5 px-3 w-full  text-placehoder-text text-start font-kantumruy`}
          aria-expanded={isOpen}
          aria-controls="dropdown-options"
        >
          <span className={`${selectedvalue !== defaultText && "text-black"}`}>
            {" "}
            {selectedvalue}
          </span>
          <img
            src={arrowdown}
            alt=""
            className={` h-3 w-3 absolute top-4 right-3 ${
              isOpen
                ? "rotate-180 transition duration-700"
                : "rotate-0 transition duration-700"
            }`}
          />
        </button>
        {isOpen && (
          <ul
            id="dropdown-options"
            className="z-50 absolute text-custom-placeholder left-0 w-full  bg-white  rounded-md "
          >
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-1.5 hover:bg-gray-100 cursor-pointer text-[13px] "
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Dropdown;
