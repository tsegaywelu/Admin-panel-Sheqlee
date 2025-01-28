import React, { useState } from "react";

import profilesvg from "../../assets/SVG/profile.svg";
import addandupdateFAQ from "./addandupdateFAQ";

const Addtag = () => {
  const [formData, setFormData] = useState({
    id: "FQID005",
    full_name: "",
    email: "",
    phone_number: "",
    Audience: "",

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
      <addandupdateFAQ
        goto={"/systemconfig"}
        Underlinetext={"ADD A NEW FAQ"}
        descriptiontoid={"~ FAQ ID"}
        nameplaceholder={"Full name"}
        emailplaceholder={"Email"}
        phoneplaceholder={"Phone number"}
        profilebuttontext={"Upload photo"}
        defaulttext={"User role"}
        buttontext={"Save"}
        formData={formData}
        handleInputChange={handleInputChange}
        setFormData={setFormData}
        underlinewidth={"w-[40%]"}
      />
    </div>
  );
};

export default Addtag;
