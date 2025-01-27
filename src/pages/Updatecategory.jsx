import React, { useState } from "react";
import Addorupdatecategory from "../componnets/basecomponents/Addandupdate";
import profilesvg from "../assets/SVG/caticon.svg";
import { useParams } from "react-router-dom";

const options = [
  "React Native",
  "Flutter",
  "Ionic",
  "Xamarin",
  "Laravel",
  "Django",
  "Node.js",
  "PHP",
  "Python",
  "Java",
  "C#",
  "C++",
  "Kotlin",
  "Swift",
  "Objective-C",
  "Ruby",
  "Go",
  "Rust",
  "Scala",
  "Haskell",
  "Perl",
  "R",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "PHP",
  "Python",
  "Java",
  "C#",
  "C++",
  "Kotlin",
];
const Updatecategory = () => {
  const { categoryId } = useParams();

  const [formData, setFormData] = useState({
    id: categoryId,
    title: "Cross-Platform Development",
    description:
      "The creation of software apps that are compatible with multiple mobile operating systems.",
    yourTags: [
      "React Native",
      "Flutter",
      "Ionic",
      "Xamarin",
      "Laravel",
      "Django",
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
        goto={"/categories"}
        Underlinetext={"UPDATE CATEGORY"}
        descriptiontoid={"~ Category ID"}
        Titleinput={"Category title…"}
        berifdescription={"Brief description…"}
        profilebuttontext={"Change icon"}
        defaulttext={"Add tags"}
        buttontext={"Update"}
        options={options}
        formData={formData}
        handleInputChange={handleInputChange}
        setFormData={setFormData}
        underlinewidth={"w-[38%]"}
      />
    </div>
  );
};

export default Updatecategory;
