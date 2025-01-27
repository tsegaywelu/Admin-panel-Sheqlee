import React, { useState } from "react";

import profilesvg from "../assets/SVG/profile.svg";
import Addandupdateuser from "../componnets/basecomponents/Addandupdateuser";

const Addtag = () => {
  const [formData, setFormData] = useState({
    id: "USR005",
    full_name: "",
    email: "",
    phone_number: "",
    user_role: "",

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
        Underlinetext={"REGISTER A USER"}
        descriptiontoid={"~ User ID"}
        nameplaceholder={"Full name"}
        emailplaceholder={"Email"}
        phoneplaceholder={"Phone number"}
        profilebuttontext={"Upload photo"}
        defaulttext={"User role"}
        buttontext={"Save"}
        formData={formData}
        handleInputChange={handleInputChange}
        setFormData={setFormData}
        underlinewidth={"w-[30%]"}
      />
    </div>
  );
};

export default Addtag;
