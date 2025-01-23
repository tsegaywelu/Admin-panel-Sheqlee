import React from "react";

const Textcard = ({ text, showborderleft, borderright }) => {
  return (
    <div>
      <div className={` px-[13px] py-1 ${showborderleft} ${borderright}`}>
        {text}
      </div>
    </div>
  );
};

export default Textcard;
