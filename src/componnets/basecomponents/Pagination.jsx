import React, { useState, useEffect, useMemo } from "react";
import arrowdown from "../../assets/SVG/arrowdown.svg";
import nextsvg from "../../assets/SVG/next.svg";
import previoussvg from "../../assets/SVG/previous.svg";

const totalpagelimits = [7, 10, 15, 20];

const Pagination = ({
  total_jobs,
  pagelimit,
  setpagelimit,
  currentPage,
  setCurrentPage,
  setmaximum,
  setminimum,
  minimum,
  maximum,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const totalPages = useMemo(
    () => Math.ceil(total_jobs / pagelimit),
    [total_jobs, pagelimit]
  );

  const handlePageChange = (direction) => {
    let newPage = currentPage;
    if (direction === "decrease" && currentPage > 1) {
      newPage--;
    } else if (direction === "increase" && currentPage < totalPages) {
      newPage++;
    }

    setCurrentPage(newPage);
    setminimum((newPage - 1) * pagelimit + 1);
    setmaximum(Math.min(newPage * pagelimit, total_jobs));
  };

  const updatePageLimit = (limit) => {
    setpagelimit(limit);
    setCurrentPage(1);
    setminimum(1);
    setmaximum(Math.min(limit, total_jobs));
    setIsDropdownOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".dropdown-container")) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  if (total_jobs === 0) {
    return (
      <div className="bg-custom-tag flex justify-end items-center py-5 px-10 rounded-b-[10px] pr-4 mx-4">
        No data available
      </div>
    );
  }

  return (
    <div className="bg-custom-tag flex justify-end items-center py-5 px-10 gap-10 rounded-b-[10px] pr-4 ml-4">
      <div className="relative flex dropdown-container">
        <p>Rows per page:</p>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          aria-haspopup="listbox"
          aria-expanded={isDropdownOpen}
          className="relative pr-5 pl-2 "
        >
          {pagelimit}
          <img
            src={arrowdown}
            alt="arrow down"
            className="absolute w-[10px] h-[10px] top-2 right-0"
          />
          <div className="h-[2px] w-full absolute bg-unknown bottom-0 "></div>
        </button>
        {isDropdownOpen && (
          <ul
            className="absolute -right-8 top-5 w-1/2 text-center bg-white border border-gray-300 rounded shadow-lg"
            role="listbox"
          >
            {totalpagelimits.map((limit, index) => (
              <li
                key={index}
                role="option"
                onClick={() => updatePageLimit(limit)}
              >
                <button className="block w-full py-1 hover:bg-gray-100">
                  {limit}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        {minimum} - {maximum} of {total_jobs}
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => handlePageChange("decrease")}
          aria-label="Go to previous page"
          disabled={currentPage === 1}
          className="disabled:opacity-30"
        >
          <img src={nextsvg} alt="previous" className="w-3 h-3 rotate-180 " />
        </button>
        {currentPage}
        <button
          onClick={() => handlePageChange("increase")}
          aria-label="Go to next page"
          className=" disabled:opacity-30"
          disabled={currentPage === totalPages}
        >
          <img src={nextsvg} alt="next" className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
