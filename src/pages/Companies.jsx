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
import Deletemodal from "../componnets/onetimecomponents/Deletemodal";
const Companies = () => {
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

  const [Companies, setCompanies] = useState([
    {
      id: "CID0001",
      companyName: "Jack Henry and Associates",
      email: "jack.henry@gmail.com",
      registrationDate: "14 Jun 2022",
      subscribers: 21,
      jobs: 7,
      status: "Active",
    },
    {
      id: "CID0002",
      companyName: "IDT Corporation",
      email: "idt.corp@gmail.com",
      registrationDate: "14 Jun 2022",
      subscribers: 78,
      jobs: 12,
      status: "Deleted",
    },
    {
      id: "CID0003",
      companyName: "Otto",
      email: "otto@gmail.com",
      registrationDate: "14 Jun 2022",
      subscribers: 102,
      jobs: 5,
      status: "Active",
    },
    {
      id: "CID0004",
      companyName: "Vrgl Inc.",
      email: "vrgl.inc@gmail.com",
      registrationDate: "14 Jun 2022",
      subscribers: 32,
      jobs: 1,
      status: "Inactive",
    },
    {
      id: "CID0005",
      companyName: "Tyler Technologies",
      email: "tyler.tech@gmail.com",
      registrationDate: "14 Jun 2022",
      subscribers: 51,
      jobs: 21,
      status: "Deleted",
    },
    {
      id: "CID0006",
      companyName: "Infosys",
      email: "infosys@gmail.com",
      registrationDate: "14 Jun 2022",
      subscribers: 11,
      jobs: 9,
      status: "Active",
    },
    {
      id: "CID0007",
      companyName: "C.H. Robinson",
      email: "ch.robison@gmail.com",
      registrationDate: "14 Jun 2022",
      subscribers: 3,
      jobs: 7,
      status: "Inactive",
    },
    {
      id: "CID0008",
      companyName: "Jack Henry and Associates",
      email: "jack.henry@gmail.com",
      registrationDate: "14 Jun 2022",
      subscribers: 21,
      jobs: 7,
      status: "Active",
    },
    {
      id: "CID0009",
      companyName: "IDT Corporation",
      email: "idt.corp@gmail.com",
      registrationDate: "14 Jun 2022",
      subscribers: 78,
      jobs: 12,
      status: "Deleted",
    },
    {
      id: "CID00010",
      companyName: "Otto",
      email: "otto@gmail.com",
      registrationDate: "14 Jun 2022",
      subscribers: 102,
      jobs: 5,
      status: "Active",
    },
    {
      id: "CID00011",
      companyName: "Vrgl Inc.",
      email: "vrgl.inc@gmail.com",
      registrationDate: "14 Jun 2022",
      subscribers: 32,
      jobs: 1,
      status: "Inactive",
    },
    {
      id: "CID00012",
      companyName: "Tyler Technologies",
      email: "tyler.tech@gmail.com",
      registrationDate: "14 Jun 2022",
      subscribers: 51,
      jobs: 21,
      status: "Deleted",
    },
    {
      id: "CID00013",
      companyName: "Infosys",
      email: "infosys@gmail.com",
      registrationDate: "14 Jun 2022",
      subscribers: 11,
      jobs: 9,
      status: "Active",
    },
    {
      id: "CID00014",
      companyName: "C.H. Robinson",
      email: "ch.robison@gmail.com",
      registrationDate: "14 Jun 2022",
      subscribers: 3,
      jobs: 7,
      status: "Inactive",
    },
  ]);

  const changestatus = (companyid) => {
    setCompanies((company) =>
      company.map((company) =>
        company.id === companyid
          ? {
              ...company,
              status:
                company.status === "Active"
                  ? "Inactive"
                  : company.status === "Inactive"
                  ? "Active"
                  : company.status === "Deleted" && "Deleted",
            }
          : company
      )
    );
  };

  const [minimum, setminimum] = useState(pagelimit * (currentPage - 1));
  const [maximum, setmaximum] = useState(
    Companies.length < pagelimit * currentPage
      ? Companies.length
      : pagelimit * currentPage
  );
  return (
    <div>
      <div className=" min-h-[90vh] bg-custom-white mx-4 pr-4  w-full flex-grow overflow-hidden  ">
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
        <div className="flex  items-end  gap-16 py-8 pl-3 w-full   mx-4 overflow-visible ">
          <div className=" w-1/2 mb-7 ">
            <Underline
              thetext={"COMPANIES"}
              textsize={"text-[22px] font-bold"}
              cssproperty={"bg-black w-[23%] h-[10px] rounded-xl absolute"}
            />
          </div>
          <div className="flex  justify-end w-full">
            <div className="w-1/5 mt-3">
              <Underline
                thetext={"FILTER BY"}
                textsize={"text-[16px] font-bold"}
                cssproperty={"bg-black w-1/4  h-[7px] rounded-xl absolute "}
              />
            </div>
            <div className="w-[70%] ">
              <div className="grid grid-cols-2 gap-x-5 gap-y-8 w-full pr-4 ">
                <Dropdownform
                  options={["All statuses", "Active", "Inactive", "deleted"]}
                  defaultText="Status"
                  //   updateFormData={updateFormData}
                  //   formData={formData}
                  //   correctvalue2={"category"}
                />

                <Dropdownform
                  options={["All actions", "Active", "Deactivated"]}
                  defaultText="Action"
                  roundedright={"rounded-r-none"}
                  //   updateFormData={updateFormData}
                  //   formData={formData}
                  //   correctvalue2={"category"}
                />

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
                      placeholder="Search by name or email.."
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

        <div className="w-full z-10 ">
          <table className="w-full z-10   ">
            <thead className="bg-custom-tag text-xl   font-kantumruy">
              <tr>
                <th className="py-3  font-medium  text-start pl-5 ">
                  <div className="relative   ">
                    Co. ID
                    <img
                      src={smalldownsvg}
                      alt=""
                      className=" absolute w-[7px] h-[7px] right-3 top-3"
                    />
                  </div>
                </th>
                <th className="font-medium text-start">
                  <div className="relative   ">
                    Company name
                    <img
                      src={smalldownsvg}
                      alt=""
                      className=" absolute w-[7px] h-[7px] right-8 top-3"
                    />
                  </div>
                </th>
                <th className="font-medium text-start">E-mail </th>
                <th className="font-medium text-start">Reg. date</th>
                <th className="font-medium text-start">
                  <div className="relative pr-3">
                    Subs
                    <img
                      src={smalldownsvg}
                      alt=""
                      className=" absolute w-[7px] h-[7px] right-3 top-3"
                    />
                  </div>
                </th>
                <th className="font-medium text-start pr-3">
                  <div className="relative">
                    Jobs
                    <img
                      src={smalldownsvg}
                      alt=""
                      className=" absolute w-[7px] h-[7px] right-1 top-3"
                    />
                  </div>
                </th>
                <th className="font-medium text-start">Status</th>
                <th className="font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {Companies.slice(
                minimum === 0 ? minimum : minimum - 1,
                maximum
              ).map((company, index) => (
                <tr
                  key={company.id}
                  className={`  ${
                    index % 2 === 0 ? "bg-custom-white" : "bg-custom-tag"
                  } border-b`}
                >
                  <td className="py-3 text-start  pl-3 ">{company.id}</td>
                  <td className="truncate max-w-[150px] whitespace-nowrap pr-6">
                    {company.companyName}
                  </td>
                  <td className=" text-custom-blue truncate max-w-[140px] pr-6 whitespace-nowrap">
                    {company.email}
                  </td>
                  <td className=" text-start">
                    <div className="">{company.registrationDate} </div>
                  </td>
                  <td className="text-center pr-3">{company.subscribers}</td>
                  <td className="text-center pr-3">{company.jobs}</td>
                  <td className="">
                    <div className="flex items-center justify-start gap-2">
                      {company.status}
                      {company.status === "Deleted" && (
                        <button
                          onClick={(e) =>
                            handleselectedCompany(company.companyName)
                          }
                        >
                          {" "}
                          <img src={linksvg} alt="link" className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="">
                    <div className="flex items-end gap-3 justify-center">
                      <div
                        className={`rounded-[3px] border-2   p-[1px] w-[26px] h-fit flex  ${
                          company.status === "Active"
                            ? "border-green-500 justify-end"
                            : company.status === "Inactive"
                            ? "border-red-700 justify-start"
                            : "border-gray-700    justify-center"
                        }`}
                        onClick={(e) => changestatus(company.id)}
                      >
                        <div
                          className={`min-w-[6px] w-[6px] min-h-[6px] h-[6px]  ${
                            company.status === "Active"
                              ? "bg-green-500"
                              : company.status === "Inactive"
                              ? "bg-red-700"
                              : "bg-gray-700 w-full"
                          }`}
                        ></div>
                      </div>
                      <button>
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
          total_jobs={Companies.length}
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

export default Companies;
