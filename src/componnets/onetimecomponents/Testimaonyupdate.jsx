import React, { useState } from "react";
import { Link } from "react-router-dom";
import backsvg from "../../assets/SVG/backarrow.svg";
import { useLocation } from "react-router-dom";
import Underline from "../basecomponents/Underline";
import { useRef } from "react";
import { useEffect } from "react";
const Testimaonyupdate = () => {
  const { state } = useLocation();

  const [prevformData] = useState({
    company: state.company,
    testimony: state.testimony,
    companyRep: state.companyRep,
    position: state.position,
    logo: state.logo,
  });
  const [formData, setFormData] = useState({ ...prevformData });

  function handleclick() {
    fileInputRef.current.click();
  }
  const fileInputRef = useRef(null);
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
        setFormData((prev) => ({ ...prev, logo: reader.result }));
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file (Max size: 2MB).");
    }
  };

  const [buttonbackground, setButtonbackground] = useState("bg-black");
  useEffect(() => {
    const hasChanges = Object.keys(formData).some(
      (key) => formData[key] !== prevformData[key]
    );

    setButtonbackground(hasChanges ? "bg-custom-purple" : "bg-black");
  }, [formData]);
  const handlechange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <div className="bg-custom-white ml-4 pr-4  mr-2 min-h-screen relative ">
      <div className="relative ">
        <Link className="w-5 h-5 absolute left-6 top-3" to={"/systemconfig"}>
          <img src={backsvg} alt="back icon" />
        </Link>
      </div>

      <div>
        <div className="w-fit pt-24 pl-6">
          <Underline
            thetext={"UPDATE TESTIMONIAL"}
            textsize={"text-[22px] font-bold"}
            cssproperty={`bg-black w-[47%] h-[10px]  rounded-xl absolute bg-black mt-0.5`}
            paddingright={"pr-8"}
          />
        </div>

        <div className="flex gap-5  mt-20 pl-6">
          <div className="flex flex-col gap-5 w-[30%] relative">
            <input
              type="text"
              className="bg-custom-tag px-4 py-2.5 rounded-[7px] outline-none placeholder:text-placehoder-text"
              value={formData.company}
              onChange={(e) => handlechange("company", e.target.value)}
              placeholder="Company Name"
            />

            <input
              type="text"
              className="bg-custom-tag px-4 py-2.5 rounded-[7px] outline-none placeholder:text-placehoder-text"
              value={formData.companyRep}
              onChange={(e) => handlechange("companyRep", e.target.value)}
              placeholder="Company Representative"
            />

            <input
              type="text"
              className="bg-custom-tag px-4 py-2.5 rounded-[7px] outline-none placeholder:text-placehoder-text"
              value={formData.position}
              onChange={(e) => handlechange("position", e.target.value)}
              placeholder="Position"
            />
            <textarea
              name="description"
              id="description"
              rows={6}
              className="bg-custom-tag pr-4 pl-2 py-3.5 rounded-[7px] outline-none placeholder:text-placehoder-text resize-none relative leading-5"
              value={formData.testimony}
              onChange={(e) => handlechange("testimony", e.target.value)}
              placeholder="Testimony"
            ></textarea>
            <span className="absolute  text-xs right-3 bottom-2 font-kantumruy text-custom-placeholder">
              {`${formData.testimony?.length}/128`}
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-32 h-28 rounded-[7px] bg-custom-tag flex items-center justify-center overflow-hidden ">
              <img
                src={formData.logo || prevformData.logo}
                alt="profile"
                className="  w-32 h-32 py-2  "
              />
            </div>
            <button
              className="bg-custom-purple rounded-[7px] py-2.5 px-3 text-white  font-medium"
              onClick={handleclick}
            >
              Change logo
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
        <div className="pt-10 pl-6">
          <button
            className={` ${buttonbackground} text-white font-medium px-5 py-2  text-lg rounded-[7px]`}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimaonyupdate;
