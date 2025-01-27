import React from "react";
import Textcard from "../componnets/basecomponents/Textcard";
import { useState } from "react";
import Datacard from "../componnets/basecomponents/Datacard";
const Subscribers = () => {
  const [activeTitle, setactiveTitle] = useState({
    Title: "Companies",
  });
  const UpdateActivetitle = (Title, value) => {
    setactiveTitle((prevdata) => ({
      ...prevdata,
      [Title]: value,
    }));
  };
  const Data = {
    //this is if the activetitle.Title is = "companies"
    Companies: [
      {
        totalNumber: "14,124",
        title: "Total company subs",
      },

      {
        totalNumber: "1,045",
        title: "Company subs in",
        buttontext: 2022,
      },
      {
        totalNumber: "145",
        title: "Company subs in",
        buttontext: "June",
      },
      {
        totalNumber: "175",
        title: "Company subs this year so far",
        Increase: 11,
      },
      {
        totalNumber: "14",
        title: "Company subs this month so far",
        decrease: 7,
      },
    ],
    //this is if the activetitle.Title is = "Categories"
    Categories: [
      {
        totalNumber: "14,124",
        title: "Total category subs",
      },
      {
        totalNumber: "1,045",
        title: "Category subs in",
        buttontext: 2022,
        resize: true,
      },
      {
        totalNumber: "145",
        title: "Category subs in",
        buttontext: "June",
        resize: true,
      },
      {
        totalNumber: "175",
        title: "Category subs this year so far",
        Increase: 11,
      },
      {
        totalNumber: "14",
        title: "Category subs this month so far",
        decrease: 7,
      },
    ],
    //this is if the activetitle.Title is = "Tags"
    Tags: [
      {
        totalNumber: "14,124",
        title: "Total tag subs",
      },
      {
        totalNumber: "1,045",
        title: "Tag subs in",
        buttontext: 2022,
      },
      {
        totalNumber: "145",
        title: "Tag subs in",
        buttontext: "June",
      },
      {
        totalNumber: "984",
        title: "Tag subs this year so far",
        Increase: 11,
      },
      {
        totalNumber: "84",
        title: "Tag subs this month so far",
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
              activeTitle.Title === "Companies" ? "text-white bg-black " : ""
            }`}
            onClick={(e) => UpdateActivetitle("Title", "Companies")}
          >
            <Textcard
              text={"Companies"}
              showborderleft={"border-r-[1.5px] border-custom-placeholder"}
            />
          </button>
          <button
            className={` py-[10px] ${
              activeTitle.Title === "Categories" ? "text-white bg-black " : ""
            }`}
            onClick={(e) => UpdateActivetitle("Title", "Categories")}
          >
            <Textcard
              text={"Categories"}
              showborderleft={"border-r-[1.5px] border-custom-placeholder"}
            />
          </button>
          <button
            className={` py-[10px] ${
              activeTitle.Title === "Tags" ? "text-white bg-black " : ""
            }`}
            onClick={(e) => UpdateActivetitle("Title", "Tags")}
          >
            <Textcard
              text={"Tags"}
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

export default Subscribers;
