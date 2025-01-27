import React, { useState } from "react";
import Addorupdatecategory from "../componnets/basecomponents/Addandupdate";
import profilesvg from "../assets/SVG/java.png";
import { useParams } from "react-router-dom";

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
const Updatetag = () => {
  const { tagId } = useParams();

  const [formData, setFormData] = useState({
    id: tagId,
    title: "Java",
    description:
      "A high-level, class-based, object- oriented programming language that is designed to have as few implementation dependencies as possible.",
    yourTags: [
      "Mobile App Development",
      "Desktop App Development",
      "Web Development",
      "Game Development",
    ],
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
        profilesvg={profilesvg}
        goto={"/tags"}
        Underlinetext={"UPDATE TAG"}
        descriptiontoid={"~ Tag ID"}
        Titleinput={"Tag title…"}
        berifdescription={"Brief description…"}
        profilebuttontext={"Change icon"}
        defaulttext={"Add more categories"}
        buttontext={"Update"}
        options={options}
        formData={formData}
        handleInputChange={handleInputChange}
        setFormData={setFormData}
        underlinewidth={"w-[35%]"}
      />
    </div>
  );
};

export default Updatetag;
