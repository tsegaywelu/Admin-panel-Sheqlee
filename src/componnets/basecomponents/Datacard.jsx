import React from "react";
import Increasesvg from "../../assets/SVG/increase.svg";
import decreasesvg from "../../assets/SVG/decrease.svg";
import downsvg from "../../assets/SVG/down.svg";
import { useState } from "react";
const Datacard = ({
  totalNumber,
  title,
  Increase,
  buttontext,
  decrease,
  resize,
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedValue, setSelectedYear] = useState(buttontext);
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2021 + 1 },
    (_, i) => 2021 + i
  );

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };
  const handleYearSelection = (year) => {
    setSelectedYear(year);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="bg-custom-tag rounded-[10px] font-kantumruy w-full flex   justify-center items-center  ">
      <div className="flex flex-col   items-center  px-3 pt-5 pb-3 w-full h-[190px] gap-7 ">
        <p className="font-bold text-4xl">{totalNumber}</p>
        <div className=" flex flex-col items-center justify-center gap-3 h-[100px] ">
          <p
            className={`font-medium text-center leading-7  ${
              resize ? "text-[19px]" : "text-[22px]"
            } `}
          >
            {title}
          </p>
          {buttontext && (
            <button
              className="bg-black text-white pl-5 pr-3 py-2 rounded-lg text-xl font-medium flex  items-center justify-center gap-5 relative"
              onClick={toggleDropdown}
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              {selectedValue}
              <img src={downsvg} alt="downward" className="w-[14px] h-[14px]" />
              {typeof selectedValue === "string"
                ? isDropdownVisible && (
                    <div>
                      <div className="absolute top-11   left-0 bg-white rounded-lg  text-black w-full overflow-hidden">
                        {months.map((month) => (
                          <div
                            key={month}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedYear(month);
                              setIsDropdownVisible(false);
                            }}
                          >
                            {month}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                : isDropdownVisible && (
                    <div className="absolute top-10 bg-white rounded-lg  text-black w-full overflow-hidden">
                      {years.map((year) => (
                        <div
                          key={year}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent parent click from firing
                            setSelectedYear(year);
                            setIsDropdownVisible(false);
                          }}
                        >
                          {year}
                        </div>
                      ))}
                    </div>
                  )}
            </button>
          )}
        </div>
      </div>
      {Increase && (
        <div className="text-lg  font-kantumruy px-7  text-green-700 flex gap-2 mr-5 items-center w-fit">
          <img src={Increasesvg} alt="increase" className="w-8 h-9" />
          <p className="   font-medium">{Increase}%</p>
        </div>
      )}
      {decrease && (
        <div className="text-lg  font-kantumruy px-6 text-red-700 flex gap-2 mr-5 items-center w-fit">
          <img src={decreasesvg} alt="decrease" className="w-8 h-9" />
          <p className=" font-medium">{decrease}%</p>
        </div>
      )}
    </div>
  );
};

export default Datacard;
