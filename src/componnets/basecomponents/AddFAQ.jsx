import React, { useState } from "react";

import AddandupdateFAQ from "./AddandupdateFAQ";

const Addtag = () => {
  const [formData, setFormData] = useState({
    id: "FQID005",
    qestion: "",
    answer: "",

    Audience: "",
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
        Underlinetext={"ADD A NEW FAQ"}
        descriptiontoid={"~ FAQ ID"}
        nameplaceholder={"Question…"}
        answerplaceholder={"Answer…"}
        defaulttext={"Audience"}
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
