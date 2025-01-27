import React, { useState } from "react";
import backsvg from "../assets/SVG/backarrow.svg";
import smalldownsvg from "../assets/SVG/smalldown.svg";
import Underline from "../componnets/basecomponents/Underline";
import Dropdownform from "../componnets/basecomponents/Dropdownform";
import datesvg from "../assets/SVG/Date.svg";
import { useCallback } from "react";
import { Modal } from "../componnets/basecomponents/Modal";
import { Link } from "react-router-dom";
import deletesvg from "../assets/SVG/delete.svg";
import copysvg from "../assets/SVG/copy.svg";
import Pagination from "../componnets/basecomponents/Pagination";
const Jobdetail = () => {
  const [showModal, setshowModal] = useState(false);
  const closemodal = useCallback(() => setshowModal(false), []);
  const openmodal = useCallback(() => setshowModal(true), []);
  //for the pagination part
  const [pagelimit, setpagelimit] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const Companyinfo = [
    { COMPANY: " KEPLER Co., LTD" },
    { "APPLY-LINK": " https://kepler.co" },
    { "JOB TITLE": " SOFTWARE ENGINEER I" },
  ];
  const jobdtail = [
    {
      frID: "FID0001",
      name: "Abigya Abayneh",
      title: "Full-Stack Developer",
      email: "abigyalabayneh@gmail.com",
      appliedDate: "14 Jun 2022",
    },
    {
      frID: "FID0002",
      name: "Abrahaley Tewele",
      title: "Mobile Developer",
      email: "abrahaleytewelee35@gmail.com",
      appliedDate: "14 Jun 2022",
    },
    {
      frID: "FID0003",
      name: "Amir Musema",
      title: "Product & UI/UX Developer",
      email: "amirmusemaa@gmail.com",
      appliedDate: "14 Jun 2022",
    },
    {
      frID: "FID0004",
      name: "Biniam Shiferaw",
      title: "Backend Developer",
      email: "seifubini@gmail.com",
      appliedDate: "14 Jun 2022",
    },
    {
      frID: "FID0005",
      name: "Dawit Alemu",
      title: "Frontend Developer",
      email: "babialemu08@gmail.com",
      appliedDate: "14 Jun 2022",
    },
    {
      frID: "FID0006",
      name: "Natnael Samuel",
      title: "UI/UX Designer",
      email: "natisami1219@gmail.com",
      appliedDate: "14 Jun 2022",
    },
    {
      frID: "FID0007",
      name: "Berihun Hadis",
      title: "Mobile Developer",
      email: "berihunhadis@gmail.com",
      appliedDate: "14 Jun 2022",
    },
    {
      frID: "FID0008",
      name: "Abigya Abayneh",
      title: "Full-Stack Developer",
      email: "abigyalabayneh@gmail.com",
      appliedDate: "14 Jun 2022",
    },
    {
      frID: "FID0009",
      name: "Abrahaley Tewele",
      title: "Mobile Developer",
      email: "abrahaleytewelee35@gmail.com",
      appliedDate: "14 Jun 2022",
    },
    {
      frID: "FID00010",
      name: "Amir Musema",
      title: "Product & UI/UX Developer",
      email: "amirmusemaa@gmail.com",
      appliedDate: "14 Jun 2022",
    },
    {
      frID: "FID00011",
      name: "Biniam Shiferaw",
      title: "Backend Developer",
      email: "seifubini@gmail.com",
      appliedDate: "14 Jun 2022",
    },
    {
      frID: "FID00012",
      name: "Dawit Alemu",
      title: "Frontend Developer",
      email: "babialemu08@gmail.com",
      appliedDate: "14 Jun 2022",
    },
    {
      frID: "FID00013",
      name: "Natnael Samuel",
      title: "UI/UX Designer",
      email: "natisami1219@gmail.com",
      appliedDate: "14 Jun 2022",
    },
    {
      frID: "FID00014",
      name: "Berihun Hadis",
      title: "Mobile Developer",
      email: "berihunhadis@gmail.com",
      appliedDate: "14 Jun 2022",
    },
  ];
  const [minimum, setminimum] = useState(pagelimit * (currentPage - 1));
  const [maximum, setmaximum] = useState(
    jobdtail.length < pagelimit * currentPage
      ? jobdtail.length
      : pagelimit * currentPage
  );
  return (
    <div>
      <div className="bg-custom-white ml-4 mr-2 min-h-[90vh]">
        {showModal && (
          <Modal closewin={closemodal} message={" FILTER BY DATE"} />
        )}
        <div className="flex justify-between  items-end  py-4 pl-6 relative  ">
          <Link className="w-5 h-5 absolute top-3" to={"/jobposts"}>
            <img src={backsvg} alt="back icon" />
          </Link>
          <div className="flex flex-col  mt-10  ">
            {Companyinfo.map((item, index) => (
              <div key={index} className="py-[2px] flex ">
                {Object.keys(item)[0] === "JOB TITLE" ? (
                  <span>
                    {" "}
                    <Underline
                      thetext={Object.keys(item)[0]}
                      textsize={"text-[16px] font-medium"}
                      cssproperty={
                        "bg-black w-[100%] h-[6px]  rounded-xl absolute bg-black mt-1  "
                      }
                      paddingright={"pr-8"}
                    />
                  </span>
                ) : (
                  <span
                    className={`font-medium ${
                      Object.keys(item)[0] === "COMPANY" && "pr-8"
                    }`}
                  >
                    {Object.keys(item)}
                  </span>
                )}

                <div
                  className={` ${
                    Object.keys(item)[0] === "APPLY-LINK"
                      ? " pl-5 " //here the blue color is not working"APPLY-LINK" for  why?
                      : " "
                  }`}
                >
                  <span className="font-bold">:</span>
                  <span
                    className={` ${
                      Object.keys(item)[0] === "APPLY-LINK"
                        ? "text-custom-blue font-semibold " //here the blue color is not working"APPLY-LINK" for  why?
                        : " font-bold "
                    }`}
                  >
                    {Object.values(item)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-5   w-[40%]">
            <div className="flex items-center  gap-5 w-full  ">
              <Underline
                thetext={"FILTER BY"}
                textsize={"text-[17px] font-bold"}
                cssproperty={"bg-black w-1/3  h-[7px] rounded-xl absolute "}
              />
              <button
                className="py-[4px] px-3 bg-custom-tag h-full overflow-hidden rounded-lg  "
                onClick={openmodal}
              >
                <img src={datesvg} alt="date icon" className="w-10 h-8" />{" "}
              </button>
            </div>
            <div className="w-full">
              <Dropdownform
                options={["Category 1", "Category 2", "Category 3"]}
                defaultText="CV status"
                roundedright={"rounded-r-none"}
                //   updateFormData={updateFormData}
                //   formData={formData}
                //   correctvalue2={"category"}
              />
            </div>
          </div>
        </div>

        <div className="mt-7">
          <table className="w-full">
            <thead className="bg-custom-tag text-xl   font-kantumruy">
              <tr>
                <th className="py-3  font-medium  text-start pl-4">
                  <div className="relative ">
                    Fr. ID
                    <img
                      src={smalldownsvg}
                      alt=""
                      className=" absolute w-[7px] h-[7px] right-4 top-3"
                    />
                  </div>
                </th>
                <th className="font-medium text-start  ">
                  <div className="relative  ">
                    Freelancer name
                    <img
                      src={smalldownsvg}
                      alt=""
                      className=" absolute w-[7px] h-[7px] right-7 top-3"
                    />
                  </div>
                </th>
                <th className="font-medium text-start ">Title</th>
                <th className="font-medium text-start  ">E-mail</th>
                <th className="font-medium text-center">Applied date</th>
                <th className="font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobdtail
                .slice(minimum === 0 ? minimum : minimum - 1, maximum)
                .map((job, index) => (
                  <tr
                    key={job.frID}
                    className={`  ${
                      index % 2 === 0 ? "bg-custom-white" : "bg-custom-tag"
                    } border-b`}
                  >
                    <td className="py-3 text-start  pl-3 ">{job.frID}</td>
                    <td className="text-start">{job.name}</td>
                    <td className=" text-start truncate max-w-[170px] whitespace-nowrap overflow-hidden pr-10">
                      {" "}
                      {job.title}
                    </td>
                    <td className="  text-custom-blue text-start truncate max-w-[170px] whitespace-nowrap overflow-hidden">
                      {" "}
                      {job.email}
                    </td>
                    <td className="text-center">{job.appliedDate}</td>

                    <td className="">
                      <div className="flex items-end gap-3 justify-center">
                        <button>
                          <img src={copysvg} alt="view" className="w-4 h-4" />
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
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="">
        <Pagination
          total_jobs={jobdtail.length}
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

export default Jobdetail;
