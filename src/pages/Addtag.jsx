import React, { useState } from "react";
import Addorupdatecategory from "../componnets/basecomponents/Addandupdate";
import profilesvg from "../assets/SVG/profile.svg";

const options = [
  "front-end",
  "back-end",
  "full-stack",
  "mobile",
  "desktop",
  "web",
  "game",
  "machine learning",
  "data science",
  "cloud",
  "blockchain",
  "AI ",
];

const Addtag = () => {
  const [formData, setFormData] = useState({
    id: "TGID009",
    title: "",
    description: "",
    yourTags: [],
    icon: profilesvg,
  });
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <div>
      {/* {formData.title} {formData.description} {formData.id}{" "}
      {formData.yourTags[0]} */}
      <Addorupdatecategory
        goto={"/tags"}
        Underlinetext={"ADD A NEW TAG"}
        descriptiontoid={"~ Tag ID"}
        Titleinput={"Tag title…"}
        berifdescription={"Brief description…"}
        profilebuttontext={"Upload icon"}
        defaulttext={"Add categories"}
        buttontext={"Save"}
        options={options}
        formData={formData}
        handleInputChange={handleInputChange}
        setFormData={setFormData}
        underlinewidth={"w-[48%]"}
      />
    </div>
  );
};

export default Addtag;
