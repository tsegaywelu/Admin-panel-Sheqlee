import React from "react";
import Textcard from "../componnets/basecomponents/Textcard";
import { useState } from "react";
import Datacard from "../componnets/basecomponents/Datacard";
const Home = () => {
  const [activeTitle, setactiveTitle] = useState({
    Title: "Job Posts",
  });
  const UpdateActivetitle = (Title, value) => {
    setactiveTitle((prevdata) => ({
      ...prevdata,
      [Title]: value,
    }));
  };
  const Data = {
    //this is if the activetitle.Title is = "job posts"
    "Job Posts": [
      {
        totalNumber: "14,124",
        title: "Total jobs posted",
      },
      {
        totalNumber: "1,045",
        title: "Jobs posted in",
        buttontext: 2022,
      },
      {
        totalNumber: "145",
        title: "Jobs posted in",
        buttontext: "June",
      },
      {
        totalNumber: "984",
        title: "Jobs posted this year so far",
        Increase: 11,
      },
      {
        totalNumber: "84",
        title: "Jobs posted this month so far",
        decrease: 7,
      },
    ],

    //this is if the activetitle.Title is = "companies"
    Companies: [
      {
        totalNumber: "1,124",
        title: "Total companies registered",
      },

      {
        totalNumber: "245",
        title: "Co. registered in",
        buttontext: 2022,
      },
      {
        totalNumber: "145",
        title: "Co. registered in",
        buttontext: "June",
      },
      {
        totalNumber: "175",
        title: "Co. registered this year so far",
        Increase: 11,
      },
      {
        totalNumber: "14",
        title: "Co. registered this month so far",
        decrease: 7,
      },
    ],
    //this is if the activetitle.Title is = "freelancers"
    Freelancers: [
      {
        totalNumber: "1,124",
        title: "Total freelancers registered",
      },
      {
        totalNumber: "245",
        title: "Freelancers registered in",
        buttontext: 2022,
        resize: true,
      },
      {
        totalNumber: "145",
        title: "Freelancers registered in",
        buttontext: "June",
        resize: true,
      },
      {
        totalNumber: "175",
        title: "Freelancers registered this year so far",
        Increase: 11,
      },
      {
        totalNumber: "14",
        title: "Freelancers registered this month so far",
        decrease: 7,
      },
    ],
    //this is if the activetitle.Title is = "Email Alerts"
    "Email Alerts": [
      {
        totalNumber: "1,124",
        title: "Total email alerts sent",
      },
      {
        totalNumber: "1,587",
        title: "Email alerts sent in",
        buttontext: 2022,
      },
      {
        totalNumber: "145",
        title: "Email alerts sent in",
        buttontext: "June",
      },
      {
        totalNumber: "175",
        title: "Email alerts sent this year so far",
        Increase: 11,
      },
      {
        totalNumber: "14",
        title: "Email alerts sent this month so far",
        decrease: 7,
      },
    ],
  };

  return (
    <div className="h-full w-full  bg-custom-white mx-4">
      <div className="flex flex-col gap-20 mx-12">
        {/* top parts */}
        <div className="font-kantumruy font-medium text-xl  flex justify-start items-center   rounded-b-[10px] overflow-hidden bg-custom-tag w-fit">
          <button
            className={` py-[10px] ${
              activeTitle.Title === "Job Posts" ? "text-white bg-black " : ""
            }`}
            onClick={(e) => UpdateActivetitle("Title", "Job Posts")}
          >
            <Textcard
              text={"Job Posts"}
              showborderleft={`${
                activeTitle.Title === "Companies"
                  ? ""
                  : "border-r-[1.5px] border-custom-placeholder"
              }`}
            />
          </button>

          <button
            className={` py-[10px] ${
              activeTitle.Title === "Companies" ? "text-white bg-black " : ""
            }`}
            onClick={(e) => UpdateActivetitle("Title", "Companies")}
          >
            <Textcard
              text={"Companies"}
              showborderleft={`${
                activeTitle.Title === "Freelancers"
                  ? ""
                  : "border-r-[1.5px] border-custom-placeholder"
              }`}
            />
          </button>
          <button
            className={` py-[10px] ${
              activeTitle.Title === "Freelancers" ? "text-white bg-black " : ""
            }`}
            onClick={(e) => UpdateActivetitle("Title", "Freelancers")}
          >
            <Textcard
              text={"Freelancers"}
              showborderleft={`${
                activeTitle.Title === "Email Alerts"
                  ? ""
                  : "border-r-[1.5px] border-custom-placeholder"
              }`}
            />
          </button>
          <button
            className={` py-[10px] ${
              activeTitle.Title === "Email Alerts" ? "text-white bg-black " : ""
            }`}
            onClick={(e) => UpdateActivetitle("Title", "Email Alerts")}
          >
            <Textcard
              text={"Email Alerts"}
              activeTitle={activeTitle.Title}
              UpdateActivetitle={UpdateActivetitle}
            />
          </button>
        </div>

        <div>
          <div className="flex gap-8 w-full">
            {Data[activeTitle.Title]?.slice(0, 3).map((item, index) => (
              <Datacard
                key={index}
                totalNumber={item.totalNumber}
                title={item.title}
                buttontext={item.buttontext}
                Increase={item.Increase}
                decrease={item.decrease}
                resize={item.resize}
              />
            ))}
          </div>

          <div className="flex gap-16 w-full my-16">
            {Data[activeTitle.Title]?.slice(3).map((item, index) => (
              <Datacard
                key={index}
                totalNumber={item.totalNumber}
                title={item.title}
                buttontext={item.buttontext}
                Increase={item.Increase}
                decrease={item.decrease}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
