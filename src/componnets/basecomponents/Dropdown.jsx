import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import arrowdown from "../../assets/SVG/arrowdown.svg";
function Dropdown({
  categories,
  dropdowntitle,
  icons,
  showicons,
  chnagelinksurl,
  underline,
  pagetype,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <div className=" inline-block text-center">
      {/* Dropdown button */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-center w-full rounded-md  pr-4 md:pr-6 py-2   text-sm md:text-base  text-black font-medium font-kantumruy  "
        >
          {dropdowntitle}
          <span>
            {" "}
            <img src="{" alt="" />
            <arrowdown
              size={10}
              className={`!fill-black  absolute top-4 right-0  md:right-2 transition duration-700 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div>
          <div className=" bg-stone-900/60 z-50">
            <div
              className={`absolute  z-40     rounded-b-[10px] overflow-hidden bg-white ring-1 ring-black ring-opacity-5 ${
                showicons ? " right-3 md:right-10 md:w-[163px] " : "w-44"
              }`}
            >
              <div className=" font-medium font-kantumruy ">
                {categories.map((category, index) => (
                  <a
                    key={category}
                    href="#"
                    className="block  text-[11px] md:text-[13px] text-custom-black text-start hover:bg-gray-100 hover:text-gray-900   "
                  >
                    <div className="">
                      <Link
                        to={
                          showicons
                            ? `/sheqlee/${category}`
                            : `/sheqlee/Categories/${category}`
                        }
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <div
                          className={`flex py-[5px] md:py-2 justify-start gap-x-3  px-3  
                            ${
                              pagetype === "even" && index % 2 == 0
                                ? "border-b-[2px] border-dvider pb-2 "
                                : ""
                            }      
                          
                          
                         ${
                           pagetype === "odd" && index !== categories.length - 1
                             ? "border-b-[2px] border-dvider pb-2"
                             : ""
                         } 
                          `}
                        >
                          {" "}
                          {showicons && (
                            <img
                              src={icons[index]}
                              alt="icons"
                              width={14}
                              height={14}
                            />
                          )}{" "}
                          {category}
                        </div>
                      </Link>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* // now i am doing this */}
          <div
            className="fixed top-0 left-0 w-full h-full backdrop:blur-lg z-20 bg-black opacity-45"
            onClick={() => setIsOpen(!isOpen)}
          ></div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
