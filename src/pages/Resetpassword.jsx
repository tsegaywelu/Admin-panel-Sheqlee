import React, { useState } from "react";
import Oneinput from "../componnets/basecomponents/Oneinput";
import Logotitle from "../componnets/basecomponents/Logotitle";
import { Link } from "react-router-dom";
const Resetpassword = () => {
  const [formData, setFormdata] = useState({
    email: "",
  });
  const updateFormData = (field, value) => {
    setFormdata((prevdata) => ({
      ...prevdata,
      [field]: value,
    }));
  };
  return (
    <div className="font-kantumruy bg-custom-slate">
      <Logotitle margintop={"pt-36"} />
      <div className="flex flex-col items-center justify-center  gap-1  max-w-[325px]  mx-auto my-12">
        <h2 className="font-kantumruy font-bold text-[22.5px]   w-full">
          Forgot password?
        </h2>
        <p className=" leading-5">
          Please enter your email to get a password reset code.
        </p>
        <div className="w-full my-4 space-y-10">
          <Oneinput
            correctvalue={"email"}
            placeHolder={"Your email... "}
            formData={formData}
            updateFormData={updateFormData}
            width={"w-full"}
          />

          <button
            className={`${
              formData.email ? "bg-custom-purple" : "bg-black"
            } px-8 py-[10px] text-white font-bold  text-[23px] rounded-[10px]`}
          >
            <Link to={"/reset password/intercode"}>Reset</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;
