import React from "react";
import Underline from "../basecomponents/Underline";
import teslapng from "../../assets/SVG/tesla.png";
import editsvg from "../../assets/SVG/edit.svg";
import deletesvg from "../../assets/SVG/delete.svg";
import nasasvg from "../../assets/SVG/nasa.png";
import cashpng from "../../assets/SVG/cash.png";
import visapng from "../../assets/SVG/visa.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Testimaonyupdate from "./Testimaonyupdate"; // i have imported this one but not used on this page because i am passing an object
const Testimonials = () => {
  const navigate = useNavigate();
  const [selectetestimony, selectedtestimonytoedit] = useState(null);
  function handleselectedCompany(testimonytoedit) {
    selectedtestimonytoedit(testimonytoedit);
  }
  const data = [
    {
      company: "Tesla Motors",
      testimony:
        "Thanks to the actual project records in the Partners Profile, I was able to meet some good workers.",
      companyRep: "Elon Musk",
      position: "CEO",
      logo: teslapng,
    },
    {
      company: "Cashapp",
      testimony:
        "We had 8 applicants in one day, so we were able to complete the project quickly.",
      companyRep: "Ryan Knupfer",
      position: "Information Technology Lead",
      logo: cashpng,
    },
    {
      company: "Visa",
      testimony:
        "The contract was conveniently signed by consulting with the estimate and schedule, and helping to organize the scope of the project.",
      companyRep: "Vasant M. Prabhu",
      position: "CFO",
      logo: visapng,
    },
    {
      company: "NASA",
      testimony:
        "Thanks to Qagnew, I was able to focus on the core of my business. Best service for startups.",
      companyRep: "Iliq Bojilov",
      position: "Sales Marketing Manager",
      logo: nasasvg,
    },
  ];

  return (
    <div className="  bg-custom-white ml-4  pr-2">
      <div>
        <div className="pt-10 pl-6 w-1/2 ">
          <Underline
            thetext={"TESTIMONIALS"}
            textsize={"text-[22px] font-[900]"}
            cssproperty={"bg-black w-[16%] h-[10px] rounded-xl absolute mt-0.5"}
          />
        </div>
      </div>
      {/* table section  */}
      <div>
        <table className="w-full mt-12">
          <thead className="bg-custom-tag text-xl   font-kantumruy">
            <tr>
              <th className="py-3  font-medium  text-start px-3">Logo</th>
              <th className="font-medium text-start">Company</th>
              <th className="font-medium text-start ">Testimony</th>
              <th className="font-medium text-start">Company rep</th>
              <th className="font-medium text-start">Position</th>
              <th className="font-medium text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`  ${
                  index % 2 === 0 ? "bg-custom-white" : "bg-custom-tag"
                } border-b`}
              >
                <td className="py-5 px-3">
                  <img
                    src={item.logo}
                    alt="Company logo"
                    className="w-12 h-12"
                  />
                </td>
                <td>{item.company}</td>
                <td className="whitespace-wrap w-1/3   pr-10">
                  {item.testimony}
                </td>
                <td className="w-1/6">{item.companyRep}</td>
                <td className="whitespace-wrap w-1/6 ">{item.position}</td>
                <td className="">
                  {" "}
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() =>
                        navigate(`/edittestimony`, { state: item })
                      }
                    >
                      <img src={editsvg} alt="edit icon" className="w-3 h-3" />
                    </button>

                    <button>
                      <img
                        src={deletesvg}
                        alt="delete icon "
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
  );
};

export default Testimonials;
