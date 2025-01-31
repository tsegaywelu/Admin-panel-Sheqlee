import React, { useCallback, useState } from "react";
import Underline from "../componnets/basecomponents/Underline";
import { Modal } from "../componnets/basecomponents/Modal";
import datesvg from "../assets/SVG/Date.svg";
import searchsvg from "../assets/SVG/search.svg";
import deletesvg from "../assets/SVG/delete.svg";
import eye1svg from "../assets/SVG/eye1.svg";
import Pagination from "../componnets/basecomponents/Pagination";
import Feedbackmodal from "../componnets/onetimecomponents/Feedbackmodal";
const Feedback = () => {
  const [showModal, setshowModal] = useState(false);
  const closemodal = useCallback(() => setshowModal(false), []);
  const openmodal = useCallback(() => setshowModal(true), []);

  const [opendetilsmodal, setdetailsmodal] = useState(false);
  const closedetailmodal = useCallback(() => setdetailsmodal(false), []);
  const opendetailodal = useCallback(() => setdetailsmodal(true), []);

  const [selectedfeedback, setselectedfeedback] = useState({});

  const handleselectedfeedback = (data) => {
    setselectedfeedback(data);
    opendetailodal();
  };

  const Data = [
    {
      Fe_ID: "FDID001",
      Message: "I love Sheqlee. I have been able to find jo...",
      Name: "Tedros Haile",
      Email: "tedros.haile@gmail.com",
    },
    {
      Fe_ID: "FDID002",
      Message:
        "Thank you Sheqlee for helping me find a good job that I can work from my home. The opportunity I have gotten has given me the chance to support my family.",
      Name: "Tedros Haile",
      Email: "tedros.haile@gmail.com",
    },
    {
      Fe_ID: "FDID003",
      Message: "The day I heard about Sheqlee is the mos...",
      Name: "Tedros Haile",
      Email: "tedros.haile@gmail.com",
    },
    {
      Fe_ID: "FDID004",
      Message: "You know I am a Korean entrepreneur wh...",
      Name: "Tedros Haile",
      Email: "tedros.haile@gmail.com",
    },
    {
      Fe_ID: "FDID005",
      Message: "Without Sheqlee I wouldn’t even be emp...",
      Name: "Tedros Haile",
      Email: "tedros.haile@gmail.com",
    },
    {
      Fe_ID: "FDID006",
      Message: "Today I would like to take a moment to th...",
      Name: "Tedros Haile",
      Email: "tedros.haile@gmail.com",
    },
    {
      Fe_ID: "FDID007",
      Message: "If it wasn’t for Sheqlee, I would be unemp...",
      Name: "Tedros Haile",
      Email: "tedros.haile@gmail.com",
    },
  ];
  const [pagelimit, setpagelimit] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);

  const [minimum, setminimum] = useState(pagelimit * (currentPage - 1));
  const [maximum, setmaximum] = useState(
    Data.length < pagelimit * currentPage
      ? Data.length
      : pagelimit * currentPage
  );
  return (
    <>
      <div className="pt-24 bg-custom-white mx-4 ">
        {showModal && (
          <Modal closewin={closemodal} message={" FILTER BY DATE"} />
        )}
        {opendetilsmodal && (
          <Feedbackmodal
            closewin={closedetailmodal}
            selectedfeedback={selectedfeedback}
          />
        )}
        <div className="flex justify-between pl-6">
          <div className="">
            <Underline
              thetext={"FEEDBACKS"}
              textsize={"text-[23px] font-[900]"}
              cssproperty={
                "bg-black w-[50%] h-[10px] rounded-xl absolute mt-0.5"
              }
            />
          </div>
          <div className="grid mt-4 w-[44%] ">
            <div className=" col-start-1 col-span-2 flex items-center gap-4  w-full ">
              <button
                className="py-[5px] px-3 bg-custom-tag h-full overflow-hidden rounded-lg  "
                onClick={openmodal}
              >
                <img src={datesvg} alt="date icon" className="w-7 h-7" />{" "}
              </button>
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Search feedbacks…"
                  className="py-[10px] pl-8   text-[16px] placeholder:text-custom-placeholder bg-custom-tag outline-none rounded-lg  rounded-r-none w-full"
                />
                <img
                  src={searchsvg}
                  alt="search"
                  className="w-4 h-4 absolute top-4 left-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <table className="w-full">
            <thead className="bg-custom-tag text-xl   font-kantumruy">
              <tr className="">
                <th className="py-3  font-medium  text-start pl-5 ">Fe. ID</th>
                <th className="font-medium text-start">Message</th>
                <th className="font-medium text-start">Name</th>
                <th className="font-medium text-start">E-mail</th>
                <th className="font-medium text-start">Action</th>
              </tr>
            </thead>
            <tbody>
              {Data.slice(minimum, maximum).map((item, index) => (
                <tr
                  key={index}
                  className={`  ${
                    index % 2 === 0 ? "bg-custom-white" : "bg-custom-tag"
                  } border-b`}
                >
                  <td className="py-3 text-start pl-5">{item.Fe_ID}</td>
                  <td className="text-start truncate max-w-[190px] pr-10">
                    {item.Message}
                  </td>
                  <td className="text-start">{item.Name}</td>
                  <td className="text-start text-custom-blue">{item.Email}</td>
                  <td className="text-start">
                    <div className="flex items-end gap-5 justify-start">
                      <button onClick={(e) => handleselectedfeedback(item)}>
                        <img src={eye1svg} alt="view" className="w-4 h-4" />
                      </button>
                      <button>
                        <img src={deletesvg} alt="delete" className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="">
        <Pagination
          total_jobs={Data.length}
          pagelimit={pagelimit}
          setpagelimit={setpagelimit}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setmaximum={setmaximum}
          setminimum={setminimum}
          minimum={minimum}
          maximum={maximum}
        />
      </div>
    </>
  );
};

export default Feedback;
