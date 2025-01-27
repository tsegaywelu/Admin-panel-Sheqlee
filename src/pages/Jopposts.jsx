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
const Jopposts = () => {
  const [pagelimit, setpagelimit] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setshowModal] = useState(false);
  const closemodal = useCallback(() => setshowModal(false), []);
  const openmodal = useCallback(() => setshowModal(true), []);

  const [jobs, setJobs] = useState([
    {
      jobId: "JID0001",
      jobTitle: "Senior mobile app developer using React Native",
      company: "Kepler Inc.",
      applicants: 5,
      postDate: "14 Jun 2022",
      status: "Active",
    },
    {
      jobId: "JID0002",
      jobTitle: "Product and UI/UX designer",
      company: "Kepler Inc.",
      applicants: 11,
      postDate: "14 Jun 2022",
      status: "Inactive",
    },
    {
      jobId: "JID0003",
      jobTitle: "Backend developer using FastAPI",
      company: "Flying Co.",
      applicants: 2,
      postDate: "14 Jun 2022",
      status: "Active",
    },
    {
      jobId: "JID0004",
      jobTitle: "Software Engineer I",
      company: "Kepler Inc.",
      applicants: 7,
      postDate: "14 Jun 2022",
      status: "Active",
    },
    {
      jobId: "JID0005",
      jobTitle: "Full-Stack web developer",
      company: "Flying Co.",
      applicants: 17,
      postDate: "14 Jun 2022",
      status: "Inactive",
    },
    {
      jobId: "JID0006",
      jobTitle: "Software quality assurance analyst",
      company: "Kepler Inc.",
      applicants: 0,
      postDate: "14 Jun 2022",
      status: "Active",
    },
    {
      jobId: "JID0007",
      jobTitle: "UI developer",
      company: "Flying Co.",
      applicants: 21,
      postDate: "14 Jun 2022",
      status: "Active",
    },
    {
      jobId: "JID0008",
      jobTitle: "Senior mobile app developer using React Native",
      company: "Kepler Inc.",
      applicants: 5,
      postDate: "14 Jun 2022",
      status: "Active",
    },
    {
      jobId: "JID0009",
      jobTitle: "Product and UI/UX designer",
      company: "Kepler Inc.",
      applicants: 11,
      postDate: "14 Jun 2022",
      status: "Inactive",
    },
    {
      jobId: "JID00010",
      jobTitle: "Backend developer using FastAPI",
      company: "Flying Co.",
      applicants: 2,
      postDate: "14 Jun 2022",
      status: "Active",
    },
    {
      jobId: "JID00011",
      jobTitle: "Software Engineer I",
      company: "Kepler Inc.",
      applicants: 7,
      postDate: "14 Jun 2022",
      status: "Active",
    },
    {
      jobId: "JID00012",
      jobTitle: "Senior mobile app developer using React Native",
      company: "Kepler Inc.",
      applicants: 5,
      postDate: "14 Jun 2022",
      status: "Active",
    },
    {
      jobId: "JID00013",
      jobTitle: "Product and UI/UX designer",
      company: "Kepler Inc.",
      applicants: 11,
      postDate: "14 Jun 2022",
      status: "Inactive",
    },
    {
      jobId: "JID00014",
      jobTitle: "Backend developer using FastAPI",
      company: "Flying Co.",
      applicants: 2,
      postDate: "14 Jun 2022",
      status: "Active",
    },
    {
      jobId: "JID00015",
      jobTitle: "Software Engineer I",
      company: "Kepler Inc.",
      applicants: 7,
      postDate: "14 Jun 2022",
      status: "Active",
    },
    {
      jobId: "JID00016",
      jobTitle: "Full-Stack web developer",
      company: "Flying Co.",
      applicants: 17,
      postDate: "14 Jun 2022",
      status: "Inactive",
    },
    {
      jobId: "JID00017",
      jobTitle: "Software quality assurance analyst",
      company: "Kepler Inc.",
      applicants: 0,
      postDate: "14 Jun 2022",
      status: "Active",
    },
    {
      jobId: "JID00018",
      jobTitle: "UI developer",
      company: "Flying Co.",
      applicants: 21,
      postDate: "14 Jun 2022",
      status: "Active",
    },
    {
      jobId: "JID00019",
      jobTitle: "Senior mobile app developer using React Native",
      company: "Kepler Inc.",
      applicants: 5,
      postDate: "14 Jun 2022",
      status: "Active",
    },
    {
      jobId: "JID00020",
      jobTitle: "Product and UI/UX designer",
      company: "Kepler Inc.",
      applicants: 11,
      postDate: "14 Jun 2022",
      status: "Inactive",
    },
    {
      jobId: "JID000121",
      jobTitle: "Backend developer using FastAPI",
      company: "Flying Co.",
      applicants: 2,
      postDate: "14 Jun 2022",
      status: "Active",
    },
    {
      jobId: "JID000122",
      jobTitle: "Software Engineer I",
      company: "Kepler Inc.",
      applicants: 7,
      postDate: "14 Jun 2022",
      status: "Active",
    },
  ]);

  const changestatus = (jobId) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.jobId === jobId
          ? {
              ...job,
              status:
                job.status === "Active"
                  ? "Inactive"
                  : job.status === "Inactive"
                  ? "Active"
                  : "",
            }
          : job
      )
    );
  };

  const [minimum, setminimum] = useState(pagelimit * (currentPage - 1));
  const [maximum, setmaximum] = useState(
    jobs.length < pagelimit * currentPage
      ? jobs.length
      : pagelimit * currentPage
  );
  return (
    <div>
      <div className=" min-h-[90vh] bg-custom-white mx-4 pr-6  w-full flex-grow overflow-hidden  ">
        {showModal && (
          <Modal closewin={closemodal} message={" FILTER BY DATE"} />
        )}
        <div className="flex  items-end  gap-16 py-4 pl-3 w-full   mx-4 overflow-visible ">
          <div className=" w-1/5 mb-7 ">
            <Underline
              thetext={"JOB POSTS"}
              textsize={"text-[22px] font-bold"}
              cssproperty={"bg-black w-1/2 h-[10px] rounded-xl absolute"}
            />
          </div>
          <div className="flex  w-full justify-end">
            <div className="w-1/5 mt-3  translate-x-4">
              <Underline
                thetext={"FILTER BY"}
                textsize={"text-[16px] font-bold"}
                cssproperty={"bg-black w-1/4  h-[7px] rounded-xl absolute "}
              />
            </div>
            <div className="w-[85%]">
              <div className="grid grid-cols-[2fr_2.5fr_2.3fr] gap-x-5 gap-y-3 w-full pr-4 ">
                <Dropdownform
                  options={["All statuses", "Active", "Inactive"]}
                  defaultText="Status"
                  //   updateFormData={updateFormData}
                  //   formData={formData}
                  //   correctvalue2={"category"}
                />

                <Dropdownform
                  options={[
                    "All categories",
                    "Backend Development",
                    "Cloud Computing",
                    "Cross-Platform Mobil…",
                    "Database Development",
                    "Embedded Systems D…",
                  ]}
                  defaultText="Category"
                  //   updateFormData={updateFormData}
                  //   formData={formData}
                  //   correctvalue2={"category"}
                />
                <Dropdownform
                  options={[
                    "All tags",
                    "JavaScript",
                    "Golang",
                    "PHP",
                    "Python",
                    "Java",
                  ]}
                  defaultText="Tags"
                  roundedright={"rounded-r-none"}
                  //   updateFormData={updateFormData}
                  //   formData={formData}
                  //   correctvalue2={"category"}
                />
                <Dropdownform
                  options={["All actions", "Active", "Deactivated"]}
                  defaultText="Action"
                  //   updateFormData={updateFormData}
                  //   formData={formData}
                  //   correctvalue2={"category"}
                />
                <Dropdownform
                  options={[
                    "All job types",
                    "Contract",
                    "Part-time",
                    "Full-time",
                    "Per diem",
                    "Temporary",
                  ]}
                  defaultText="Job type"
                  //   updateFormData={updateFormData}
                  //   formData={formData}
                  //   correctvalue2={"category"}
                />
                <Dropdownform
                  options={[
                    "All skill levels",
                    "Expert",
                    "Sinior",
                    "Middle",
                    "Junior",
                  ]}
                  defaultText="Skill level"
                  roundedright={"rounded-r-none"}
                  //   updateFormData={updateFormData}
                  //   formData={formData}
                  //   correctvalue2={"category"}
                />
                <div className=" col-start-2 col-span-2 flex items-center gap-4  w-full ">
                  <button
                    className="py-[5px] px-3 bg-custom-tag h-full overflow-hidden rounded-lg  "
                    onClick={openmodal}
                  >
                    <img src={datesvg} alt="date icon" className="w-7 h-7" />{" "}
                  </button>
                  <div className="w-full relative">
                    <input
                      type="text"
                      placeholder="Search by title or company name..."
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
                    Job ID{" "}
                    <img
                      src={smalldownsvg}
                      alt=""
                      className=" absolute w-[7px] h-[7px] right-5 top-3"
                    />
                  </div>
                </th>
                <th className="font-medium text-start">Job title</th>
                <th className="font-medium text-center">Company </th>
                <th className="font-medium">
                  <div className="relative">
                    Applicants
                    <img
                      src={smalldownsvg}
                      alt=""
                      className=" absolute w-[7px] h-[7px] right-2 top-3"
                    />
                  </div>
                </th>
                <th className="font-medium text-start">
                  <div className="relative">
                    Post date
                    <img
                      src={smalldownsvg}
                      alt=""
                      className=" absolute w-[7px] h-[7px] right-6 top-3"
                    />
                  </div>
                </th>
                <th className="font-medium text-start">Status</th>
                <th className="font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs
                .slice(minimum === 0 ? minimum : minimum - 1, maximum)
                .map((job, index) => (
                  <tr
                    key={job.jobId}
                    className={`  ${
                      index % 2 === 0 ? "bg-custom-white" : "bg-custom-tag"
                    } border-b`}
                  >
                    <td className="py-3 text-start  pl-3 ">{job.jobId}</td>
                    <td className="truncate max-w-[180px] whitespace-nowrap overflow-hidden">
                      {job.jobTitle}
                    </td>
                    <td className="text-center">{job.company}</td>
                    <td className=" text-center">
                      <div className="flex items-center justify-center gap-2">
                        {job.applicants}{" "}
                        <Link to={`/jobposts/${job.jobId}`}>
                          {" "}
                          <button>
                            {" "}
                            <img src={linksvg} alt="link" className="w-3 h-3" />
                          </button>
                        </Link>
                      </div>
                    </td>
                    <td className="">{job.postDate}</td>
                    <td>
                      <span>{job.status}</span>
                    </td>
                    <td className="">
                      <div className="flex items-end gap-3 justify-center">
                        <div
                          className={`rounded-[3px] border-2   p-[1px] w-[26px] h-fit flex  ${
                            job.status === "Active"
                              ? "border-green-500 justify-end"
                              : job.status === "Inactive"
                              ? "border-red-700 justify-start"
                              : "border-gray-700 justify-center"
                          }`}
                          onClick={(e) => changestatus(job.jobId)}
                        >
                          <div
                            className={`min-w-[6px] w-[6px] min-h-[6px] h-[6px]  ${
                              job.status === "Active"
                                ? "bg-green-500"
                                : job.status === "Inactive"
                                ? "bg-red-700"
                                : ""
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
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="">
        <Pagination
          total_jobs={jobs.length}
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

export default Jopposts;
