import React from "react";

const Underline = ({ thetext, cssproperty, textsize, paddingright }) => {
  return (
    <div className={`relative w-full ${paddingright}`}>
      <div className={`${textsize} uppercase `}>{thetext}</div>
      <div className={` ${cssproperty}`}> </div>
    </div>
  );
};

export default Underline;
