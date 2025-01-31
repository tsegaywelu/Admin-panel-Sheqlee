import React, { useState } from "react";
import Underline from "../componnets/basecomponents/Underline";
import Dropdownform from "../componnets/basecomponents/Dropdownform";

import deletesvg from "../assets/SVG/delete.svg";
import eye1svg from "../assets/SVG/eye1.svg";

import Pagination from "../componnets/basecomponents/Pagination";

import { Link } from "react-router-dom";

const APGSPPTSCP = () => {
  const [pagelimit, setpagelimit] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);

  //modal for deletion

  const [Data, setdata] = useState([
    {
      id: "1",
      page: "About",
      iteration: "2nd",
      updatedBy: "Muruts Yifter",
      updatedOn: "07 Sep 2022",
      status: "active",
    },
    {
      id: "2",
      page: "Pricing",
      iteration: "2nd",
      updatedBy: "Muruts Yifter",
      updatedOn: "14 Jun 2022",
      status: "inactive",
    },
    {
      id: "3",
      page: "Getting started",
      iteration: "4th",
      updatedBy: "Muruts Yifter",
      updatedOn: "14 Jun 2022",
      status: "active",
    },
    {
      id: "4",
      page: "Privacy Policy",
      iteration: "3rd",
      updatedBy: "Muruts Yifter",
      updatedOn: "14 Jun 2022",
      status: "active",
    },
    {
      id: "5",
      page: "Terms of Service",
      iteration: "5th",
      updatedBy: "Muruts Yifter",
      updatedOn: "14 Jun 2022",
      status: "inactive",
    },
    {
      id: "6",
      page: "Cookie Policy",
      iteration: "1st",
      updatedBy: "Muruts Yifter",
      updatedOn: "14 Jun 2022",
      status: "active",
    },
    {
      id: "7",
      page: "About",
      iteration: "1st",
      updatedBy: "Muruts Yifter",
      updatedOn: "14 Jun 2022",
      status: "active",
    },
  ]);

  const changestatus = (Dataid) => {
    setdata((Data) =>
      Data.map((Data) =>
        Data.id === Dataid
          ? {
              ...Data,
              status:
                Data.status === "active"
                  ? "inactive"
                  : Data.status === "inactive" && "active",
            }
          : Data
      )
    );
  };

  const [minimum, setminimum] = useState(pagelimit * (currentPage - 1));
  const [maximum, setmaximum] = useState(
    Data.length < pagelimit * currentPage
      ? Data.length
      : pagelimit * currentPage
  );
  return (
    <div className="w-full pr-2">
      <div className="w-full bg-custom-white mx-4 ">
        <div className="     w-full flex-grow overflow-hidden      ">
          <div className="flex  items-center  gap-16 pt-4 pb-4 pl-2 w-full    overflow-visible  ">
            <div className=" w-1/2 mb-7 flex  gap-0  justify-start items-center     ">
              <div className="w-1/5 mt-3 ">
                <Underline
                  thetext={"APGSPPTSCP"}
                  textsize={"text-[23px] font-[900]"}
                  cssproperty={
                    "bg-black w-[97%] h-[10px] rounded-xl absolute mt-0.5"
                  }
                />
              </div>
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
                  <div className="grid grid-cols-2 gap-x-5 gap-y-4 w-full   ">
                    <div className="col-start-2 col-span-1">
                      <Dropdownform
                        options={["All Pages ", "Active", "Inactive"]}
                        defaultText="Doc type"
                        roundedright={"rounded-r-none"}
                        //   updateFormData={updateFormData}
                        //   formData={formData}
                        //   correctvalue2={"category"}
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
                  <th className="py-3  font-medium  text-start pl-5  ">Page</th>
                  <th className="font-medium text-start ">Iteration</th>

                  <th className="font-medium text-start">Updated by</th>
                  <th className="font-medium text-start">Updated on</th>

                  <th className="font-medium text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {Data.slice(minimum === 0 ? minimum : minimum - 1, maximum).map(
                  (data, index) => (
                    <tr
                      key={data.updatedOn}
                      className={`  ${
                        index % 2 === 0 ? "bg-custom-white" : "bg-custom-tag"
                      } border-b`}
                    >
                      <td className="py-3 text-start  pl-5 ">{data.page}</td>
                      <td className=" pl-4  ">{data.iteration}</td>

                      <td className="">{data.updatedBy}</td>
                      <td>{data.updatedOn}</td>

                      <td className="">
                        <div className="flex items-center gap-3 justify-center">
                          <div
                            className={` rounded-[2.5px] min-w-[8px] w-[8px] min-h-[8px] h-[8px]  ${
                              data.status === "active"
                                ? "bg-green-500"
                                : data.status === "inactive" && "bg-red-700"
                            }`}
                            onClick={() => changestatus(data.id)}
                          ></div>

                          <button>
                            <Link to={`/apgspptscp/${data.id}`}>
                              <img
                                src={eye1svg}
                                alt="view"
                                className="w-4 h-4"
                              />
                            </Link>
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
      </div>
      <div className="w-full bg-custom-tag translate-x-4 ">
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
    </div>
  );
};

export default APGSPPTSCP;
