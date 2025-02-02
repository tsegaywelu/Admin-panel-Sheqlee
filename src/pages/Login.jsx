import React, { useState } from "react";
import Logotitle from "../componnets/basecomponents/Logotitle";
import Oneinput from "../componnets/basecomponents/Oneinput";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });
  const updateFormData = (field, value) => {
    setFormdata((prevdata) => ({
      ...prevdata,
      [field]: value,
    }));
  };

  const handlesubmit = (email, password) => {
    //  i am not kding gpt please tell me what can i do here
  };
  return (
    <div className=" bg-custom-slate  font-kantumruy">
      <Logotitle margintop={"pt-24"} />
      <form
        className="flex flex-col items-center justify-center  gap-3  max-w-[325px]  mx-auto my-9 "
        onSubmit={handlesubmit}
      >
        <h2 className="font-kantumruy font-bold text-[23px]   w-full">
          Log in
        </h2>

        <div className="flex flex-col gap-4 w-full">
          <Oneinput
            type={"email "}
            placeHolder={"Email... "}
            width={"w-full"}
            formData={formData}
            correctvalue={"email"}
            updateFormData={updateFormData}
          />
          <Oneinput
            type={"password"}
            placeHolder={"Password..."}
            width={"w-full"}
            formData={formData}
            correctvalue={"password"}
            updateFormData={updateFormData}
            showeyeicon
          />
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-wrap justify-between items-center my-7 ">
            <button
              className={`${
                formData.email && formData.password
                  ? "bg-custom-purple"
                  : "bg-black"
              } px-7 py-[10px] text-white font-bold  text-[20px] rounded-[10px]`}
            >
              Log in{" "}
            </button>
            <p className="">
              Forgot password?{" "}
              <Link
                to={"/reset password"}
                className="text-custom-blue font-semibold"
              >
                Reset
              </Link>
            </p>
          </div>
          <div className=" text-[15px] leading-5">
            First time logging in? Click{" "}
            <Link className="text-custom-blue font-semibold">here</Link> to
            activate your account.
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
