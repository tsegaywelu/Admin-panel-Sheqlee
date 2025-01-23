import React, { useState } from "react";
import { createPortal } from "react-dom";
import times from "../../assets/SVG/times.svg";
import datesvg from "../../assets/SVG/Date.svg";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
export const Modal = ({ closewin, message }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return createPortal(
    <div className="">
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
        <div className="  pt-7 md:px-9  pb-6 font-bold  bg-white rounded-xl w-[43%] ">
          <div className="text-center pb-10 font-kantumruy font-bold text-xl">
            {message}
          </div>
          <div className="flex flex-col justify-center items-center   gap-10 ">
            <div className="flex  gap-7 font-kantumruy">
              <div className="  relative">
                <ReactDatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="From date"
                  className="bg-custom-tag outline-none rounded-lg px-3 py-2.5 placeholder:text-custom-placeholder font-normal w-full"
                />
                <img
                  src={datesvg}
                  alt="date icon"
                  className="w-5 h-5 absolute top-[10px] right-3"
                />
              </div>
              <div className="relative">
                <ReactDatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  placeholderText="To date"
                  className="bg-custom-tag outline-none rounded-lg px-3 py-2.5 placeholder:text-custom-placeholder font-normal w-full"
                />

                <img
                  src={datesvg}
                  alt="date icon"
                  className="w-5 h-5 absolute top-[10px] right-3"
                />
              </div>
            </div>
            <button
              className="bg-custom-purple py-1.5 px-5 w-fit text-white rounded-[6px] font-medium font-kantumruy"
              onClick={() =>
                console.log("Filter applied: ", { startDate, endDate })
              }
            >
              Apply filter
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
