import React from "react";
import { createPortal } from "react-dom";
import times from "../../assets/SVG/times.svg";
const Deletemodal = ({ message, closeDeletemodal, Title }) => {
  return createPortal(
    <div>
      <div className=" z-50  flex items-center justify-center h-screen w-full fixed mx-auto">
        <button
          className="  fixed right-2 md:right-7 top-8 p-1  text-2xl font-bold  rounded-full text-white z-50  "
          onClick={closeDeletemodal}
        >
          <img
            src={times}
            alt="times icon"
            className=" w-[22px] h-[22px] md:w-[27px] md:h-[27px]"
          />
        </button>
        <div className=" mt-20 pt-3 px-7  pb-3   bg-white rounded-xl w-[40%] font-kantumruy">
          <h2 className="font-semibold text-2xl text-center mb-2">{Title}</h2>
          <h4 className="text-xl font-medium my-2">Deletion reason</h4>
          <p>{message}</p>
          <div className="flex justify-center ">
            <button
              className="  mt-5 py-[6px] px-4  bg-custom-purple text-white rounded-[5px] font-medium font-kantumruy"
              onClick={closeDeletemodal}
            >
              Okay, got it
            </button>
          </div>
        </div>
      </div>
      <div className="  flex items-center justify-center h-screen w-[100vw] fixed mx-auto bg-stone-900/50 z-10 "></div>
    </div>,
    document.getElementById("modal")
  );
};

export default Deletemodal;
