import React, { useState } from "react";
import tsegay from "../../assets/images/tsegay.jpg";
import dashboard from "../../assets/SVG/dashboard.svg";
import Icon from "../../assets/SVG/setting.svg";
import greater from "../../assets/SVG/greater.svg";
import { Link } from "react-router-dom";
import jobssvg from "../../assets/SVG/jobs.svg";
import companysvg from "../../assets/SVG/company.svg";
import codesvg from "../../assets/SVG/code.svg";
import categorysvg from "../../assets/SVG/categories.svg";
import bellsvg from "../../assets/SVG/bell.svg";
import userssvg from "../../assets/SVG/users.svg";
import configsvg from "../../assets/SVG/settings.svg";
import tagssvg from "../../assets/SVG/tag.svg";
export const LeftDashboared = () => {
  const [activeTitle, setactiveTitle] = useState({
    Title: "Dashboard",
  });
  const UpdateActivetitle = (Title, value) => {
    setactiveTitle((prevdata) => ({
      ...prevdata,
      [Title]: value,
    }));
  };
  return (
    <div className="bg-custom-tag min-w-64 h-screenpy-4 font-kantumruy  py-4 ">
      <div className="flex justify-center">
        <img src={Icon} className="w-[62px] h-[62px]" />
      </div>
      <div className="flex items-center mb-8 gap-4 mt-8 pl-5 pr-1">
        <img src={tsegay} alt="Profile" className="w-9 h-9 rounded-full" />
        <div className="flex justify-between items-center w-full  relative">
          <h3 className="font-medium text-[13px] ">Muruts Yifter</h3>
          <a
            href="#"
            className="text-[8px] text-black mr-[10px] uppercase font-bold border-b-[1.5px] border-black  rounded-xs "
          >
            Logout
          </a>
          <div className="absolute w-1 h-1 right-0 top-[6px]">
            <img src={greater} alt="greater icon " />
          </div>
        </div>
      </div>
      {/* profile  section */}
      <div className=" ">
        {/* Navigation portion  */}

        <nav className="text-lg">
          <ul className="">
            <li>
              <Link
                to={"/"}
                className={`py-[6px] pl-6  flex gap-4 items-center     ${
                  activeTitle.Title === "Dashboard"
                    ? "text-black bg-custom-slate font-semibold"
                    : "text-custom-placeholder font-medium"
                }`}
                onClick={(e) => UpdateActivetitle("Title", "Dashboard")}
              >
                <img
                  src={dashboard}
                  alt="svg icon "
                  className="w-[16px] h-[16px] mr-3"
                />
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to={"/jobposts"}
                className={`pl-6 py-[6px] flex gap-4  items-center  
                   ${
                     activeTitle.Title === "Job Posts"
                       ? "text-black bg-custom-slate font-semibold"
                       : "text-custom-placeholder font-medium"
                   }`}
                onClick={(e) => UpdateActivetitle("Title", "Job Posts")}
              >
                <img
                  src={jobssvg}
                  alt="svg icon "
                  className="w-[18px] h-[18px] mr-3"
                />
                Job Posts
              </Link>
            </li>
            <li>
              <Link
                to={"/companies"}
                className={`pl-6 py-[6px] flex gap-4  items-center  
                   ${
                     activeTitle.Title === "Companies"
                       ? "text-black bg-custom-slate font-semibold"
                       : "text-custom-placeholder font-medium"
                   }`}
                onClick={(e) => UpdateActivetitle("Title", "Companies")}
              >
                <img
                  src={companysvg}
                  alt="svg icon "
                  className="w-[19px] h-[19px] mr-3"
                />
                Companies
              </Link>
            </li>
            <li>
              <Link
                to={"/freelancer"}
                className={`pl-6 py-[6px] flex gap-4  items-center  
                   ${
                     activeTitle.Title === "Freelancers"
                       ? "text-black bg-custom-slate font-semibold"
                       : "text-custom-placeholder font-medium"
                   }`}
                onClick={(e) => UpdateActivetitle("Title", "Freelancers")}
              >
                <img
                  src={codesvg}
                  alt="svg icon "
                  className="w-[21px] h-[21px] mr-3"
                />
                Freelancers
              </Link>
            </li>
            <li>
              <Link
                className={`pl-6 py-[6px] flex gap-4  items-center  
                   ${
                     activeTitle.Title === "Categories"
                       ? "text-black bg-custom-slate font-semibold"
                       : "text-custom-placeholder font-medium"
                   }`}
                onClick={(e) => UpdateActivetitle("Title", "Categories")}
              >
                <img
                  src={categorysvg}
                  alt="svg icon "
                  className="w-[21px] h-[21px] mr-3"
                />
                Categories
              </Link>
            </li>
            <li>
              <Link
                className={`pl-6 py-[6px] flex gap-4  items-center  
                   ${
                     activeTitle.Title === "Tags"
                       ? "text-black bg-custom-slate font-semibold"
                       : "text-custom-placeholder font-medium"
                   }`}
                onClick={(e) => UpdateActivetitle("Title", "Tags")}
              >
                <img
                  src={tagssvg}
                  alt="svg icon "
                  className="w-[19px] h-[19px] mr-3"
                />
                Tags
              </Link>
            </li>
            <li>
              <Link
                className={`pl-6 py-[6px] flex gap-4  items-center  
                   ${
                     activeTitle.Title === "Subscribers"
                       ? "text-black bg-custom-slate font-semibold"
                       : "text-custom-placeholder font-medium"
                   }`}
                onClick={(e) => UpdateActivetitle("Title", "Subscribers")}
              >
                <img
                  src={bellsvg}
                  alt="svg icon "
                  className="w-[19px] h-[19px] mr-3"
                />
                Subscribers
              </Link>
            </li>
            <li>
              <Link
                className={`pl-6 py-[6px] flex gap-4  items-center  
                   ${
                     activeTitle.Title === "System Config"
                       ? "text-black bg-custom-slate font-semibold"
                       : "text-custom-placeholder font-medium"
                   }`}
                onClick={(e) => UpdateActivetitle("Title", "System Config")}
              >
                <img
                  src={configsvg}
                  alt="svg icon "
                  className="w-[19px] h-[19px] mr-3"
                />
                System Config
              </Link>
            </li>
            <li>
              <Link
                className={`pl-6 py-[6px] flex gap-4  items-center  
                   ${
                     activeTitle.Title === "Users"
                       ? "text-black bg-custom-slate font-semibold"
                       : "text-custom-placeholder font-medium"
                   }`}
                onClick={(e) => UpdateActivetitle("Title", "Users")}
              >
                <img
                  src={userssvg}
                  alt="svg icon "
                  className="w-[21px] h-[21px] mr-3"
                />
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
