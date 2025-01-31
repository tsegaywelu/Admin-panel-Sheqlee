import React, { useState } from "react";

import profilesvg from "../assets/SVG/profile.svg";
import Addandupdateuser from "../componnets/basecomponents/Addandupdateuser";

const Addtag = () => {
  const [formData, setFormData] = useState({
    id: "USR005",
    full_name: "Muruts Yifter",
    email: "muruts.yifter@gmail.com",
    phone_number: "+251912345678",
    password: "",
    confirm_password: "",
    icon: profilesvg,
  });
  console.table(formData);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <div>
      {/* {formData.title} {formData.description} {formData.id}{" "}
      {formData.yourTags[0]} */}
      <Addandupdateuser
        goto={"/users"}
        Underlinetext={"EDIT PROFILE"}
        descriptiontoid={"~ User ID"}
        nameplaceholder={"Full name"}
        emailplaceholder={"Email"}
        phoneplaceholder={"Phone number"}
        profilebuttontext={"Upload photo"}
        defaulttext={"User role"}
        buttontext={"Update"}
        formData={formData}
        handleInputChange={handleInputChange}
        setFormData={setFormData}
        underlinewidth={"w-[34%]"}
        addpasswordinput
      />
    </div>
  );
};

export default Addtag;
