import React, { useState } from "react";
import arrowdown from "../../assets/SVG/arrowdown.svg";
import cancelsvg from "../../assets/SVG/cancel.svg";
const Dropdown1 = ({
  options,
  defaultText,

  roundedright,
  setYourTags,
  yourTags,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setYourTags([...yourTags, option]);
    // yourTags.push(option);
    setIsOpen(false);
    setSearchTerm("");
  };

  // Filter options based on the search term
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-start" onMouseLeave={() => setIsOpen(false)}>
      <div className="relative inline-block w-full">
        {/* Search Input */}
        <input
          type="text"
          className={`bg-custom-tag rounded-lg  ${
            (isOpen || yourTags.length > 0) &&
            "rounded-b-none border-b-[2px] border-unknown"
          } ${roundedright} h-full outline-none py-2.5 px-3 w-full placeholder:text-placeholder-text text-start font-kantumruy`}
          placeholder={defaultText} // Keep defaultText as the placeholder
          value={searchTerm} // Bind input value to searchTerm
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm when typing
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          aria-controls="dropdown-options"
        />
        <div className="max-h-36 overflow-y-auto">
          {Array.isArray(yourTags) &&
            yourTags.map((tag, index) => (
              <div
                key={index}
                className="  flex items-center justify-between border-b-[1px] border-unknown bg-around-white h-full py-2 px-3 w-full  text-start font-kantumruy"
              >
                {tag}
                <img
                  src={cancelsvg}
                  alt="cancel svg"
                  className="h-3 w-3 ml-2 cursor-pointer "
                  onClick={() => {
                    yourTags.splice(index, 1);
                    setYourTags([...yourTags]);
                  }}
                />
              </div>
            ))}
        </div>
        <img
          src={arrowdown}
          alt="arrowdon svg"
          className={`h-4 w-4 absolute top-4 right-3 ${
            isOpen
              ? "rotate-180 transition duration-700"
              : "rotate-0 transition duration-700"
          }`}
        />

        {isOpen && (
          <div
            id="dropdown-options"
            className="z-50 absolute left-0 top-10 w-full bg-slate-200 rounded-lg overflow-hidden rounded-t-none shadow-lg"
          >
            {/* Options List */}
            <ul className="max-h-40 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b-[1px] border-unknown "
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-500">No results found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown1;
