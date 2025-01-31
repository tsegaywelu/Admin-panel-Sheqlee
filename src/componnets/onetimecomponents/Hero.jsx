import React from "react";
import Underline from "../basecomponents/Underline";
import editsvg from "../../assets/SVG/edit.svg";
import deletesvg from "../../assets/SVG/delete.svg";
import Pagination from "../basecomponents/Pagination";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const data = [
    {
      title: "Title",
      description: "Recruit affordable & skilled Ethiopian professionals",
    },
    {
      title: "description",
      description:
        "Web frontend, mobile app, backend, database, full-stack, data science, UI/UX & product design, project management, scrum master, etc.",
    },
    {
      title: "animation",
      description: "JSON file URL",
    },
  ];

  return (
    <div className="bg-custom-white ml-4  pr-2 ">
      <div className="pt-12 pl-6 w-1/2 ">
        <Underline
          thetext={"HERO"}
          textsize={"text-[22px] font-[900]"}
          cssproperty={"bg-black w-[7%] h-[10px] rounded-xl absolute mt-0.5"}
        />
      </div>

      <div>
        <table className="mt-12">
          <thead className="bg-custom-tag text-xl   font-kantumruy">
            <tr>
              <th className="py-3  font-medium text-start pl-5">Section</th>
              <th className="font-medium text-start">Cotent</th>
              <th className="font-medium ">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`  ${
                  index % 2 === 0 ? "bg-custom-white" : "bg-custom-tag"
                } border-b `}
              >
                <td className="pl-5 w-1/4">{item.title}</td>
                <td className="py-5 w-[50%] text-start min-h-[250px]">
                  {item.description}
                </td>
                <td className="w-1/6  ">
                  <div className="flex items-center justify-center gap-5 ">
                    <button
                      onClick={() => navigate(`/edithero`, { state: item })}
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
          {/* <tbody>
            <tr>
              <td>Title</td>
              <td className="py-5">{data.title}</td>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => navigate(`/edittestimony`, { state: item })}
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
            <tr className="bg-custom-tag">
              <td>Description</td>
              <td className="w-1/2 py-5">{data.description}</td>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => navigate(`/edittestimony`, { state: item })}
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
            <tr>
              <td>Animation</td>
              <td className="py-5 ">{data.animation}</td>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => navigate(`/edittestimony`, { state: item })}
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
          </tbody> */}
        </table>
        <div className="bg-custom-tag py-10 rounded-b-[10px] w-full"></div>
      </div>
    </div>
  );
};

export default Hero;
