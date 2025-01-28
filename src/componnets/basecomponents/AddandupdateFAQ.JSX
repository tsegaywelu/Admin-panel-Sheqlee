import React, { useEffect } from "react";
import backsvg from "../../assets/SVG/backarrow.svg";

import { Link } from "react-router-dom";
import Underline from "./Underline";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { useRef } from "react";

const Addandupdateuser = ({
  goto,
  Underlinetext,
  // textid,
  descriptiontoid,
  nameplaceholder,

  profilebuttontext,
  defaulttext,
  buttontext,

  formData,
  handleInputChange,
  setFormData,
  underlinewidth,
  emailplaceholder,
  phoneplaceholder,
}) => {
  const [profilePic, setProfilePic] = useState(formData.icon);
  const [buttonbackground, setButtonbackground] = useState("bg-black");
  const [prevFormData, setPrevFormData] = useState(formData); // i am using this to check if the data has changed or not

  useEffect(() => {
    if (buttontext === "Save") {
      // Check if all required fields are filled for "Save"
      const isFormValid =
        formData.icon &&
        formData.full_name &&
        formData.user_role &&
        formData.id &&
        formData.email &&
        formData.phone_number;

      setButtonbackground(isFormValid ? "bg-custom-purple" : "bg-black");
    } else if (buttontext === "Update") {
      // Compare current formData with previous values for "Update"
      const hasChanges =
        formData.icon !== prevFormData.icon ||
        formData.title !== prevFormData.title ||
        formData.id !== prevFormData.id ||
        formData.yourTags.join(",") !== prevFormData.yourTags.join(",");

      setButtonbackground(hasChanges ? "bg-custom-purple" : "bg-black");
    }
  }, [formData, buttontext, prevFormData]);

  const fileInputRef = useRef(null);

  function handleclick() {
    fileInputRef.current.click();
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (
      file &&
      file.type.startsWith("image/") &&
      file.size <= 2 * 1024 * 1024
    ) {
      // Max 2MB
      const reader = new FileReader();
      reader.onload = () => {
        // setFormData((prev) => ({ ...prev, icon: reader.result }));
        setFormData((prev) => ({ ...prev, icon: reader.result }));
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file (Max size: 2MB).");
    }
  };

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
              <input
                type="text"
                placeholder={nameplaceholder}
                className="bg-custom-tag px-4 py-2.5 rounded-[7px] outline-none placeholder:text-placehoder-text"
                value={formData.full_name}
                onChange={(e) => handleInputChange("full_name", e.target.value)}
              />
              <input
                type="email"
                placeholder={emailplaceholder}
                className="bg-custom-tag px-4 py-2.5 rounded-[7px] outline-none placeholder:text-placehoder-text"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              <input
                type="tel"
                placeholder={phoneplaceholder}
                className="bg-custom-tag px-4 py-2.5 rounded-[7px] outline-none placeholder:text-placehoder-text"
                value={formData.phone_number}
                onChange={(e) =>
                  handleInputChange("phone_number", e.target.value)
                }
              />

              <Dropdown
                defaultText={defaulttext}
                options={["Super admin", "Admin", "	Sales"]}
                formData={formData}
                updateFormData={handleInputChange}
                correctvalue2={"user_role"}
              />
            </div>

            {/* //upload side  */}
            <div className="flex  w-full gap-16  ">
              <div className="flex flex-col gap-y-5 ">
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
              </div>
            </div>
          </div>
        </div>

        <button
          className={` ${buttonbackground} text-white font-medium px-5 py-2 mt-24 text-lg rounded-[7px]`}
        >
          {buttontext}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          id="upload-button"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </div>
    </div>
  );
};

export default Addandupdateuser;
