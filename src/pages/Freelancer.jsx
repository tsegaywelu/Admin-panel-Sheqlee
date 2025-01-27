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
const Freelancer = () => {
  const [pagelimit, setpagelimit] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setshowModal] = useState(false);
  const closemodal = useCallback(() => setshowModal(false), []);
  const openmodal = useCallback(() => setshowModal(true), []);

  //modal for deletion
  const [showDeletemodal, setshowDeletemodal] = useState(false);
  const closeDeletemodal = useCallback(() => setshowDeletemodal(false), []);
  const openDeletemodal = useCallback(() => setshowDeletemodal(true), []);
  const [selectedfreelancer, setselectedfreelancer] = useState(null);

  function handleselectedfreelancer(freelancer) {
    setselectedfreelancer(freelancer);
    setshowDeletemodal(true);
  }

  const [freelancers, setfreelancers] = useState([
    {
      FrID: "FID0001",
      Name: "Abigya Abayneh",
      Title: "Full-Stack Developer",
      Email: "abigailabayneh@gmail.com",
      RegDate: "14 Jun 2022",
      Status: "Active",
      Action: "Edit, Delete, View",
    },
    {
      FrID: "FID0002",
      Name: "Abrahaley Tewele",
      Title: "Mobile Developer",
      Email: "abrahaleytewelee35@gmail.com",
      RegDate: "14 Jun 2022",
      Status: "Deleted",
      Action: "View",
    },
    {
      FrID: "FID0003",
      Name: "Amir Musema",
      Title: "Product & UI/UX Designer",
      Email: "amirmusemaa@gmail.com",
      RegDate: "14 Jun 2022",
      Status: "Active",
      Action: "Edit, Delete, View",
    },
    {
      FrID: "FID0004",
      Name: "Biniam Shiferaw",
      Title: "Backend Developer",
      Email: "seifubini@gmail.com",
      RegDate: "14 Jun 2022",
      Status: "Active",
      Action: "Edit, Delete, View",
    },
    {
      FrID: "FID0005",
      Name: "Dawit Alemu",
      Title: "Frontend Developer",
      Email: "babialemu08@gmail.com",
      RegDate: "14 Jun 2022",
      Status: "Deleted",
      Action: "View",
    },
    {
      FrID: "FID0006",
      Name: "Natnael Samuel",
      Title: "UI/UX Designer",
      Email: "natisami1219@gmail.com",
      RegDate: "14 Jun 2022",
      Status: "Active",
      Action: "Edit, Delete, View",
    },
    {
      FrID: "FID0007",
      Name: "Berihun Hadis",
      Title: "Mobile Developer",
      Email: "berihunhadis@gmail.com",
      RegDate: "14 Jun 2022",
      Status: "Active",
      Action: "Edit, Delete, View",
    },
    {
      FrID: "FID0008",
      Name: "Abigya Abayneh",
      Title: "Full-Stack Developer",
      Email: "abigailabayneh@gmail.com",
      RegDate: "14 Jun 2022",
      Status: "Active",
      Action: "Edit, Delete, View",
    },
    {
      FrID: "FID0009",
      Name: "Abrahaley Tewele",
      Title: "Mobile Developer",
      Email: "abrahaleytewelee35@gmail.com",
      RegDate: "14 Jun 2022",
      Status: "Deleted",
      Action: "View",
    },
    {
      FrID: "FID00010",
      Name: "Amir Musema",
      Title: "Product & UI/UX Designer",
      Email: "amirmusemaa@gmail.com",
      RegDate: "14 Jun 2022",
      Status: "Active",
      Action: "Edit, Delete, View",
    },
    {
      FrID: "FID00011",
      Name: "Biniam Shiferaw",
      Title: "Backend Developer",
      Email: "seifubini@gmail.com",
      RegDate: "14 Jun 2022",
      Status: "Active",
      Action: "Edit, Delete, View",
    },
    {
      FrID: "FID00012",
      Name: "Dawit Alemu",
      Title: "Frontend Developer",
      Email: "babialemu08@gmail.com",
      RegDate: "14 Jun 2022",
      Status: "Deleted",
      Action: "View",
    },
    {
      FrID: "FID00013",
      Name: "Natnael Samuel",
      Title: "UI/UX Designer",
      Email: "natisami1219@gmail.com",
      RegDate: "14 Jun 2022",
      Status: "Active",
      Action: "Edit, Delete, View",
    },
    {
      FrID: "FID00014",
      Name: "Berihun Hadis",
      Title: "Mobile Developer",
      Email: "berihunhadis@gmail.com",
      RegDate: "14 Jun 2022",
      Status: "Active",
      Action: "Edit, Delete, View",
    },
  ]);

  const changestatus = (freelancerid) => {
    setfreelancers((freelancer) =>
      freelancer.map((freelancer) =>
        freelancer.FrID === freelancerid
          ? {
              ...freelancer,
              Status:
                freelancer.Status === "Active"
                  ? "Inactive"
                  : freelancer.Status === "Inactive"
                  ? "Active"
                  : freelancer.Status === "Deleted" && "Deleted",
            }
          : freelancer
      )
    );
  };

  const [minimum, setminimum] = useState(pagelimit * (currentPage - 1));
  const [maximum, setmaximum] = useState(
    freelancers.length < pagelimit * currentPage
      ? freelancers.length
      : pagelimit * currentPage
  );
  return (
    <div>
      <div className=" min-h-[90vh]  mx-4 pr-6  w-full flex-grow overflow-hidden  ">
        {showModal && (
          <Modal closewin={closemodal} message={" FILTER BY DATE"} />
        )}
        {showDeletemodal && (
          <Deletemodal
            Title={selectedfreelancer}
            closeDeletemodal={closeDeletemodal}
            message={
              "Thank you Sheqlee. I found a Korean company that wanted to hire me full time. So I have no need for my account at Sheqlee and I have decided to delete my account. When I need it I will come back and create an account again."
            }
          />
        )}
        <div className="flex  items-end  gap-16 py-4 pl-3 w-full   mx-4 overflow-visible ">
          <div className=" w-1/2 mb-7 ">
            <Underline
              thetext={"FREELANCERS"}
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
              <div className="grid grid-cols-[1.2fr,1.5fr] gap-x-5 gap-y-3 w-full pr-4 ">
                <Dropdownform
                  options={["All statuses", "Active", "Inactive"]}
                  defaultText="Status"
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
                  defaultText="Skills"
                  roundedright={"rounded-r-none"}
                  //   updateFormData={updateFormData}
                  //   formData={formData}
                  //   correctvalue2={"category"}
                />

                <Dropdownform
                  options={["Active", "Inactive"]}
                  defaultText="Action"

                  //   updateFormData={updateFormData}
                  //   formData={formData}
                  //   correctvalue2={"category"}
                />
                <Dropdownform
                  options={["Added", "Not added"]}
                  defaultText="CV status"
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
                    Fr. ID
                    <img
                      src={smalldownsvg}
                      alt=""
                      className=" absolute w-[7px] h-[7px] right-3 top-3"
                    />
                  </div>
                </th>
                <th className="font-medium text-start">
                  <div className="relative   ">
                    Name
                    <img
                      src={smalldownsvg}
                      alt=""
                      className=" absolute w-[7px] h-[7px] right-24 top-3"
                    />
                  </div>
                </th>
                <th className="font-medium text-start">Title</th>
                <th className="font-medium text-start">E-mail </th>
                <th className="font-medium text-start pl-2">Reg. date</th>

                <th className="font-medium text-start">Status</th>
                <th className="font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {freelancers
                .slice(minimum === 0 ? minimum : minimum - 1, maximum)
                .map((freelancer, index) => (
                  <tr
                    key={freelancer.FrID}
                    className={`  ${
                      index % 2 === 0 ? "bg-custom-white" : "bg-custom-tag"
                    } border-b`}
                  >
                    <td className="py-3 text-start  pl-3 ">
                      {freelancer.FrID}
                    </td>
                    <td className="truncate max-w-[150px] whitespace-nowrap ">
                      {freelancer.Name}
                    </td>
                    <td className="  truncate max-w-[140px] pr-2 whitespace-nowrap">
                      {freelancer.Title}
                    </td>
                    <td className=" text-custom-blue truncate max-w-[150px]  whitespace-nowrap">
                      {freelancer.Email}
                    </td>
                    <td className="pl-2">{freelancer.RegDate}</td>
                    <td className="">
                      <div className="flex items-center justify-start gap-2">
                        {freelancer.Status}
                        {freelancer.Status === "Deleted" && (
                          <button
                            // onClick={() => setshowDeletemodal(true)}
                            onClick={(e) =>
                              handleselectedfreelancer(freelancer.Name)
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
                            freelancer.Status === "Active"
                              ? "border-green-500 justify-end"
                              : freelancer.Status === "Inactive"
                              ? "border-red-700 justify-start"
                              : "border-gray-700    justify-center"
                          }`}
                          onClick={(e) => changestatus(freelancer.FrID)}
                        >
                          <div
                            className={`min-w-[6px] w-[6px] min-h-[6px] h-[6px]  ${
                              freelancer.Status === "Active"
                                ? "bg-green-500"
                                : freelancer.Status === "Inactive"
                                ? "bg-red-700"
                                : "bg-gray-700 w-full"
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
          total_jobs={freelancers.length}
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

export default Freelancer;
