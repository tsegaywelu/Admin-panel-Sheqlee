import React, { useState } from "react";
import Logotitle from "../componnets/basecomponents/Logotitle";
import Oneinput from "../componnets/basecomponents/Oneinput";
const Intercode = () => {
  const [formData, setFormdata] = useState({
    code: "",
    password: "",
    confirm_password: "",
  });
  console.table(formData);
  const updateFormData = (field, value) => {
    setFormdata((prevdata) => ({
      ...prevdata,
      [field]: value,
    }));
  };
  return (
    <div className="bg-custom-slate">
      <div className=" font-kantumruy   max-w-[58%] mx-auto">
        <Logotitle margintop={"pt-36"} />
        <div className=" flex justify-between  gap-16 mt-12 mb-7 ">
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-1">
              <h2 className="font-kantumruy font-bold text-[22.5px]   w-full">
                Enter Code
              </h2>
              <p className=" leading-5">
                Please enter the one-time code sent to your email and set a new
                password.
              </p>
            </div>
            <Oneinput
              placeHolder={"Enter code..."}
              formData={formData}
              updateFormData={updateFormData}
              width={"w-full"}
              correctvalue={"code"}
            />
          </div>
          <div className="flex flex-col w-full gap-3">
            <h2 className="font-kantumruy font-bold text-[22.5px]   w-full">
              New password
            </h2>
            <Oneinput
              type={"password"}
              placeHolder={"Password..."}
              width={"w-full"}
              formData={formData}
              correctvalue={"password"}
              updateFormData={updateFormData}
              showeyeicon
            />
            <Oneinput
              type={"password"}
              placeHolder={"Confirm password..."}
              width={"w-full"}
              formData={formData}
              correctvalue={"confirm_password"}
              updateFormData={updateFormData}
            />
          </div>
        </div>

        <div className="flex justify-end items-center">
          <button
            className={`${
              formData.password && formData.confirm_password && formData.code
                ? "bg-custom-purple"
                : "bg-black"
            } px-7 py-[8px] text-white font-bold  text-[23px] rounded-[10px]`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intercode;
