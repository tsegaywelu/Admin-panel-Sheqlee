import React, { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import times from "../../assets/SVG/times.svg";

const Feedbackmodal = ({ closewin, selectedfeedback }) => {
  console.table(selectedfeedback);

  const copyToClipboard = () => {
    const feedbackText = `
      Name: ${selectedfeedback.Name}
      Email: ${selectedfeedback.Email}
      Message: ${selectedfeedback.Message}
    `;

    navigator.clipboard
      .writeText(feedbackText)
      .then(() => {
        closewin();
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return createPortal(
    <div>
      <button
        className="  fixed right-2 md:right-7 top-8 p-1  text-2xl font-bold  rounded-full text-white z-50  "
        onClick={closewin}
      >
        <img
          src={times}
          alt="times icon"
          className=" w-[22px] h-[22px] md:w-[27px] md:h-[27px]"
        />
      </button>
      <div className="  flex items-center justify-center h-screen w-full fixed mx-auto bg-stone-900/50 z-10 ">
        <div className="bg-white z-50 pt-7 pb-3 pr-10 pl-6 font-kantumruy text-black w-[43%] rounded-[10px] ">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="text-2xl flex gap-8 ">
                <div className="font-medium text-2xl">Name</div>{" "}
                <div>{selectedfeedback.Name}</div>
              </div>
              <div className="text-2xl flex gap-8">
                <div className="font-medium text-2xl">E-mail</div>
                <div>{selectedfeedback.Email}</div>
              </div>
            </div>
            <div className="text-2xl flex flex-col gap-3">
              <div className="font-medium text-2xl ">Message</div>
              <div>{selectedfeedback.Message}</div>
            </div>
          </div>
          <div className="flex justify-center mt-32">
            <button
              className="py-1.5 px-4 bg-custom-purple rounded-[7px] text-white font-medium  "
              onClick={copyToClipboard}
            >
              Copy feedback
            </button>
          </div>
        </div>
      </div>
    </div>,

    document.getElementById("modal")
  );
};

export default Feedbackmodal;
