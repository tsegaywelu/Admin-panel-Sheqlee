import React, { useCallback, useState } from "react";
import Underline from "../componnets/basecomponents/Underline";
import Dropdownform from "../componnets/basecomponents/Dropdownform";
import datesvg from "../assets/SVG/Date.svg";
import linksvg from "../assets/SVG/link.svg";
import deletesvg from "../assets/SVG/delete.svg";
import eye1svg from "../assets/SVG/eye1.svg";
import smalldownsvg from "../assets/SVG/smalldown.svg";
import Pagination from "../componnets/basecomponents/Pagination";
import searchsvg from "../assets/SVG/search.svg";
import { Modal } from "../componnets/basecomponents/Modal";
import { Link } from "react-router-dom";
import plussvg from "../assets/SVG/plus.svg";
import Deletemodal from "../componnets/onetimecomponents/Deletemodal";

const FAQ = () => {
  const [pagelimit, setpagelimit] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setshowModal] = useState(false);
  const closemodal = useCallback(() => setshowModal(false), []);
  const openmodal = useCallback(() => setshowModal(true), []);

  //modal for deletion
  const [showDeletemodal, setshowDeletemodal] = useState(false);
  const closeDeletemodal = useCallback(() => setshowDeletemodal(false), []);
  const openDeletemodal = useCallback(() => setshowDeletemodal(true), []);
  const [selectedCompany, setselectedCompany] = useState(null);

  function handleselectedCompany(Company) {
    setselectedCompany(Company);
    setshowDeletemodal(true);
  }

  const [FAQ, setFAQ] = useState([
    {
      faq_id: "FQID001",
      question: "What is Sheqlee Project?",
      audience: "Freelancers",
      status: "active", // Toggle is ON
    },
    {
      faq_id: "FQID002",
      question: "How can I apply for a job?",
      audience: "Companies",
      status: "inactive", // Toggle is OFF
    },
    {
      faq_id: "FQID003",
      question:
        "I cannot speak neither Korean nor English. Can I work with Korea...",
      audience: "Freelancers",
      status: "active", // Toggle is ON
    },
    {
      faq_id: "FQID004",
      question: "How does the process work?",
      audience: "Freelancers",
      status: "inactive", // Toggle is OFF
    },
    {
      faq_id: "FQID005",
      question: "How can I get my payment?",
      audience: "Companies",
      status: "active", // Toggle is ON
    },
    {
      faq_id: "FQID006",
      question:
        "If there is no agreement with the developer about the progress of...",
      audience: "Companies",
      status: "active", // Toggle is ON
    },
    {
      faq_id: "FQID007",
      question: "When did Sheqlee launch",
      audience: "Companies",
      status: "inactive", // Toggle is OFF
    },
  ]);

  const changestatus = (faqid) => {
    setFAQ((FAQ) =>
      FAQ.map((FAQ) =>
        FAQ.faq_id === faqid
          ? {
              ...FAQ,
              status:
                FAQ.status === "active"
                  ? "inactive"
                  : FAQ.status === "inactive" && "active",
            }
          : FAQ
      )
    );
  };

  const [minimum, setminimum] = useState(pagelimit * (currentPage - 1));
  const [maximum, setmaximum] = useState(
    FAQ.length < pagelimit * currentPage ? FAQ.length : pagelimit * currentPage
  );
  return (
    <div>
      <div className=" min-h-[90vh] bg-custom-white mx-4 pr-6  w-full flex-grow overflow-hidden  ">
        {showModal && (
          <Modal closewin={closemodal} message={" FILTER BY DATE"} />
        )}
        {showDeletemodal && (
          <Deletemodal
            Title={selectedCompany}
            closeDeletemodal={closeDeletemodal}
            message={
              "We could not find the types of developers we are looking for here on your platform. As a result, we have decided to close our account and whenever the need arises we will for sure be back on your platform looking for developers. Thank you for all what you are doing!"
            }
          />
        )}
        <div className="flex  items-end  gap-16 pt-4 pb-4 pl-2 w-full   mx-4 overflow-visible  ">
          <div className=" w-1/2 mb-7 flex  gap-0  justify-start items-center  -translate-y-2   ">
            <div className="w-1/5 mt-3 ">
              <Underline
                thetext={"FAQ"}
                textsize={"text-[23px] font-[900]"}
                cssproperty={
                  "bg-black w-[40%] h-[10px] rounded-xl absolute mt-0.5"
                }
              />
            </div>
            <Link to={"/FAQ/addfaq"}>
              <button className="bg-custom-purple mt-3 text-white py-2 px-2.5 w-fit text-[13px] rounded-[7px] flex items-center gap-2 font-medium">
                <img src={plussvg} alt="plus svg" className="w-3 h-3" />
                add new FAQ
              </button>
            </Link>
          </div>

          <div className="flex  justify-end w-[60%]">
            <div className="flex  justify-end w-full">
              <div className="w-1/5 mt-3 translate-x-40">
                <Underline
                  thetext={"FILTER BY"}
                  textsize={"text-[16px] font-bold"}
                  cssproperty={"bg-black w-1/3  h-[7px] rounded-xl absolute "}
                />
              </div>
              <div className="w-[100%] ">
                <div className="grid grid-cols-2 gap-x-5 gap-y-4 w-full pr-4  ">
                  <div className="col-start-2 col-span-1">
                    <Dropdownform
                      options={["All Audience ", "Freelancers", "Companies"]}
                      defaultText="Audience"
                      roundedright={"rounded-r-none"}
                      //   updateFormData={updateFormData}
                      //   formData={formData}
                      //   correctvalue2={"category"}
                    />
                  </div>

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
                        placeholder="Search FAQ…"
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
            </div>
          </div>
        </div>

        <div className="w-full z-10 ">
          <table className="w-full z-10   ">
            <thead className="bg-custom-tag text-xl   font-kantumruy">
              <tr>
                <th className="py-3  font-medium  text-start pl-5  ">FAQ ID</th>
                <th className="font-medium text-start ">Questions</th>

                <th className="font-medium text-start">Audience</th>

                <th className="font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {FAQ.slice(minimum === 0 ? minimum : minimum - 1, maximum).map(
                (FA, index) => (
                  <tr
                    key={FA.faq_id}
                    className={`  ${
                      index % 2 === 0 ? "bg-custom-white" : "bg-custom-tag"
                    } border-b`}
                  >
                    <td className="py-3 text-start  pl-5 ">{FA.faq_id}</td>
                    <td className=" text-start truncate max-w-[350px]  whitespace-nowrap ">
                      {FA.question}
                    </td>

                    <td className="">{FA.audience}</td>

                    <td className="">
                      <div className="flex items-end gap-3 justify-center">
                        <div
                          className={`rounded-[3px] border-2   p-[1px] w-[26px] h-fit flex  ${
                            FA.status === "active"
                              ? "border-green-500 justify-end"
                              : FA.status === "inactive" &&
                                "border-red-700 justify-start"
                          }`}
                          onClick={(e) => changestatus(FA.faq_id)}
                        >
                          <div
                            className={`min-w-[6px] w-[6px] min-h-[6px] h-[6px]  ${
                              FA.status === "active"
                                ? "bg-green-500"
                                : FA.status === "inactive" && "bg-red-700"
                            }`}
                          ></div>
                        </div>
                        <button>
                          <img src={eye1svg} alt="view" className="w-4 h-4" />
                        </button>
                        <button>
                          <img
                            src={deletesvg}
                            alt="delete"
                            className="w-4 h-4"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="">
        <Pagination
          total_jobs={FAQ.length}
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
    </div>
  );
};

export default FAQ;
