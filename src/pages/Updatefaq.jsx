import React, { useState } from "react";

import AddandupdateFAQ from "../componnets/basecomponents/AddandupdateFAQ";

const Addtag = () => {
  const [formData, setFormData] = useState({
    id: "FQID005",
    qestion: "How does the process work?",
    answer:
      "When matching is all set which you have applied for, you will make a contract with Sheqlee Inc. The payment to the developer will be one month later, and the payment will proceed when both sides",

    Audience: "Companies",
  });
  console.table(formData);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <div>
      {/* {formData.title} {formData.description} {formData.id}{" "}
      {formData.yourTags[0]} */}
      <AddandupdateFAQ
        goto={"/systemconfig"}
        Underlinetext={"UPDATE FAQ"}
        descriptiontoid={"~ FAQ ID"}
        nameplaceholder={"Question…"}
        answerplaceholder={"Answer…"}
        defaulttext={"Audience"}
        buttontext={"Update"}
        formData={formData}
        handleInputChange={handleInputChange}
        setFormData={setFormData}
        underlinewidth={"w-[41%]"}
      />
    </div>
  );
};

export default Addtag;
