import React, { useState } from "react";
import Addorupdatecategory from "../componnets/basecomponents/Addandupdate";
import profilesvg from "../assets/SVG/profile.svg";

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
];

const Addcategory = () => {
  const [formData, setFormData] = useState({
    id: "CTID009",
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
        goto={"/categories"}
        Underlinetext={"ADD A NEW CATEGORY"}
        descriptiontoid={"~ Category ID"}
        Titleinput={"Category title…"}
        berifdescription={"Brief description…"}
        profilebuttontext={"Upload icon"}
        defaulttext={"Add tags"}
        buttontext={"Save"}
        options={options}
        formData={formData}
        handleInputChange={handleInputChange}
        setFormData={setFormData}
        underlinewidth={"w-[37%]"}
      />
    </div>
  );
};

export default Addcategory;
