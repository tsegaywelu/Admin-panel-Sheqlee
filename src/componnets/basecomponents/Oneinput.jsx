import React from "react";
import eye from "../../assets/SVG/eye.svg";
import eye1 from "../../assets/SVG/eye1.svg";
import { useState } from "react";
const Oneinput = ({
  placeHolder,
  type,
  width,
  showeyeicon,
  formData,
  updateFormData,
  correctvalue,
}) => {
  const [inputtype, setinputtype] = useState(type);

  const toggleInputType = () => {
    setinputtype((prevType) => (prevType === "password" ? "text" : "password")); // Toggle between "password" and "text"
  };
  return (
    <div className={`${width} relative`}>
      <input
        type={inputtype}
        placeholder={placeHolder}
        className={`bg-custom-tag  ${width} outline-none px-5 py-3 rounded-[10px] text-[19px] placeholder:text-custom-placeholder`}
        value={formData[correctvalue] || ""}
        onChange={(e) => updateFormData(correctvalue, e.target.value)}
      />

      {showeyeicon && (
        <div
          className=" absolute right-4 bottom-4  cursor-pointer"
          onClick={toggleInputType}
        >
          <img
            src={inputtype == "password" ? eye : eye1}
            alt="eye"
            className="w-5 h-5"
          />
        </div>
      )}
    </div>
  );
};

export default Oneinput;
