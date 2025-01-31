import React from "react";
import Underline from "../basecomponents/Underline";
import editsvg from "../../assets/SVG/edit.svg";
import deletesvg from "../../assets/SVG/delete.svg";
import Pagination from "../basecomponents/Pagination";
import { useState } from "react";
const Footer = () => {
  const Data = [
    { section: "Copyright year", content: "2024" },
    { section: "Facebook", content: "https://facebook.com/sheqlee" },
    { section: "Twitter", content: "https://twitter.com/sheqlee" },
    { section: "Instagram", content: "https://instagram.com/sheqlee" },
    { section: "Telegram", content: "https://telegram.com/sheqlee" },
    { section: "LinkedIn", content: "https://linkedin.com/sheqlee" },
    { section: "YouTube", content: "https://youtube.com/sheqlee" },

    { section: "Copyright year", content: "2024" },
    { section: "Facebook", content: "https://facebook.com/sheqlee" },
    { section: "Twitter", content: "https://twitter.com/sheqlee" },
    { section: "Instagram", content: "https://instagram.com/sheqlee" },
    { section: "Telegram", content: "https://telegram.com/sheqlee" },
    { section: "LinkedIn", content: "https://linkedin.com/sheqlee" },
    { section: "YouTube", content: "https://youtube.com/sheqlee" },
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
      <div className="bg-custom-white  ml-4  pr-2">
        <div className="pt-12 ml-6">
          <Underline
            thetext={"Footer"}
            textsize={"text-[23px] font-[900]"}
            cssproperty={"bg-black w-[5%] h-[10px] rounded-xl absolute mt-0.5"}
          />
        </div>

        <div className="mt-12">
          <table className="w-full">
            <thead className="bg-custom-tag text-xl   font-kantumruy">
              <tr className="">
                <th className="py-3  font-medium  text-start pl-5 ">Section</th>
                <th className="font-medium text-start">Content</th>
                <th className="font-medium text-start">Action</th>
              </tr>
            </thead>
            <tbody>
              {Data.slice(minimum === 0 ? minimum : minimum - 1, maximum).map(
                (data, index) => (
                  <tr
                    key={index}
                    className={`  ${
                      index % 2 === 0 ? "bg-custom-white" : "bg-custom-tag"
                    } border-b`}
                  >
                    <td className="py-3 text-start  pl-5">{data.section}</td>
                    <td className="text-custom-blue">{data.content}</td>
                    <td className="">
                      <div className="flex items-center justify-start gap-5 ">
                        <button
                          onClick={() => navigate(`/edithero`, { state: item })}
                        >
                          <img
                            src={editsvg}
                            alt="edit icon"
                            className="w-3 h-3"
                          />
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
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
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
    </>
  );
};

export default Footer;
