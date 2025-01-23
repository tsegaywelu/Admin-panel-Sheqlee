import React from "react";
import Icon from "../../assets/SVG/setting.svg";
const Logotitle = ({ margintop = "" }) => {
  return (
    <div className=" ">
      <div className={`flex flex-col items-center  gap-8 ${margintop}`}>
        <img src={Icon} alt="logo loading..." className="w-[125px] h-[125px]" />
        <div className="flex flex-col items-center justify-center gap-[2.5px] ">
          <h2 className="font-recolta text-[25.5px]">CONTROL BOARD</h2>
          <div className="h-[6.5px] w-[87%] bg-custom-purple rounded-[5px] "></div>
        </div>
      </div>
    </div>
  );
};

export default Logotitle;
