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
const Categories = () => {
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

  const [Categories, setCategories] = useState([
    {
      categoryID: "CTID001",
      categoryTitle: "Web Frontend",
      tags: 11,
      jobs: 27,
      subscribers: 407,
      createdOn: "2022-06-14",
      status: "active",
    },
    {
      categoryID: "CTID002",
      categoryTitle: "Backend Development",
      tags: 7,
      jobs: 32,
      subscribers: 1024,
      createdOn: "2022-06-14",
      status: "active",
    },
    {
      categoryID: "CTID003",
      categoryTitle: "Mobile App Development",
      tags: 5,
      jobs: 10,
      subscribers: 879,
      createdOn: "2022-06-14",
      status: "active",
    },
    {
      categoryID: "CTID004",
      categoryTitle: "API Development",
      tags: 21,
      jobs: 7,
      subscribers: 2412,
      createdOn: "2022-06-14",
      status: "inactive",
    },
    {
      categoryID: "CTID005",
      categoryTitle: "Full-Stack Development",
      tags: 10,
      jobs: 43,
      subscribers: 102,
      createdOn: "2022-06-14",
      status: "active",
    },
    {
      categoryID: "CTID006",
      categoryTitle: "Progressive Web Apps Development",
      tags: 9,
      jobs: 113,
      subscribers: 710,
      createdOn: "2022-06-14",
      status: "active",
    },
    {
      categoryID: "CTID007",
      categoryTitle: "Hybrid Mobile App Development",
      tags: 15,
      jobs: 67,
      subscribers: 1578,
      createdOn: "2022-06-14",
      status: "inactive",
    },
  ]);

  const changestatus = (categoryid) => {
    setCategories((Category) =>
      Category.map((Category) =>
        Category.categoryID === categoryid
          ? {
              ...Category,
              status:
                Category.status === "active"
                  ? "inactive"
                  : Category.status === "inactive" && "active",
            }
          : Category
      )
    );
  };

  const [minimum, setminimum] = useState(pagelimit * (currentPage - 1));
  const [maximum, setmaximum] = useState(
    Categories.length < pagelimit * currentPage
      ? Categories.length
      : pagelimit * currentPage
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
        <div className="flex  items-end  gap-16 py-8 pl-2 w-full   mx-4 overflow-visible  ">
          <div className=" w-1/2 mb-7 flex gap-10  justify-start items-center  translate-y-4  ">
            <div className="w-1/3  mt-3   ">
              <Underline
                thetext={"CATEGORIES"}
                textsize={"text-[23px] font-[900]"}
                cssproperty={"bg-black w-[50%] h-[10px] rounded-xl absolute"}
              />
            </div>
            <Link to={"/categories/addcategory"}>
              <button className="bg-custom-purple mt-3 text-white py-2 px-2 w-fit text-[13px] rounded-[7px] flex items-center gap-1.5 font-medium">
                <img src={plussvg} alt="plus svg" className="w-3 h-3" />
                add new category
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
                <div className="grid grid-cols-2 gap-x-5 gap-y-7 w-full pr-4 ">
                  <div className="col-start-2 col-span-1">
                    <Dropdownform
                      options={["All actions", "Active", "Inactive", "Deleted"]}
                      defaultText="Action"
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
        </div>

        <div className="w-full z-10 ">
          <table className="w-full z-10   ">
            <thead className="bg-custom-tag text-xl   font-kantumruy">
              <tr>
                <th className="py-3  font-medium  text-start pl-5 ">
                  <div className="relative   ">
                    Cat. ID
                    <img
                      src={smalldownsvg}
                      alt=""
                      className=" absolute w-[7px] h-[7px] right-4 top-3"
                    />
                  </div>
                </th>
                <th className="font-medium text-start ">
                  <div className="relative  text-start  ">
                    Category title
                    <img
                      src={smalldownsvg}
                      alt=""
                      className=" absolute w-[7px] h-[7px] right-52 top-3 "
                    />
                  </div>
                </th>
                <th className="font-medium text-center pr-4 ">Tags</th>

                <th className="font-medium text-center ">
                  <div className="relative">
                    Jobs
                    <img
                      src={smalldownsvg}
                      alt=""
                      className=" absolute w-[7px] h-[7px] right-0 top-3"
                    />
                  </div>
                </th>
                <th className="font-medium text-end">
                  <div className="relative pr-3">
                    Subs
                    <img
                      src={smalldownsvg}
                      alt=""
                      className=" absolute w-[7px] h-[7px] right-1 top-3"
                    />
                  </div>
                </th>
                <th className="font-medium">Created on</th>

                <th className="font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {Categories.slice(
                minimum === 0 ? minimum : minimum - 1,
                maximum
              ).map((Category, index) => (
                <tr
                  key={Category.categoryID}
                  className={`  ${
                    index % 2 === 0 ? "bg-custom-white" : "bg-custom-tag"
                  } border-b`}
                >
                  <td className="py-3 text-start  pl-5 ">
                    {Category.categoryID}
                  </td>
                  <td className="">{Category.categoryTitle}</td>
                  <td className="text-end pr-4">{Category.tags}</td>
                  <td className="text-end  ">
                    <div className="flex items-center justify-end gap-2">
                      {Category.jobs}

                      <Link to={`/categories/${Category.categoryID}`}>
                        {" "}
                        <img src={linksvg} alt="link" className="w-3 h-3" />
                      </Link>
                    </div>
                  </td>

                  <td className="text-end pr-3">{Category.subscribers}</td>

                  <td className="text-center">{Category.createdOn}</td>
                  <td className="">
                    <div className="flex items-end gap-3 justify-center">
                      <div
                        className={`rounded-[3px] border-2   p-[1px] w-[26px] h-fit flex  ${
                          Category.status === "active"
                            ? "border-green-500 justify-end"
                            : Category.status === "inactive" &&
                              "border-red-700 justify-start"
                        }`}
                        onClick={(e) => changestatus(Category.categoryID)}
                      >
                        <div
                          className={`min-w-[6px] w-[6px] min-h-[6px] h-[6px]  ${
                            Category.status === "active"
                              ? "bg-green-500"
                              : Category.status === "inactive" && "bg-red-700"
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
          total_jobs={Categories.length}
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

export default Categories;
