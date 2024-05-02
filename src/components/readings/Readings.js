import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import DataRow from "./DataRow";
import DataRow2 from "./DataRow2";
import DataRow3 from "./DataRow3";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Readings = ({ theme }) => {
  return (
    <div className="flex flex-col w-full h-auto">
      <div className="flex flex-row items-center justify-between">
        <h1
          className={`${
            theme === "light" ? "text-[#270140]" : "text-white"
          } font-bold text-lg sm:text-3xl`}
        >
          Readings
        </h1>
        <AiOutlinePlusCircle className="text-[#641e92] w-[40px] sm:w-[50px] h-[40px] sm:h-[50px]" />
      </div>
      <hr className="w-full border-2 border-[#e2dfdd] mt-7" />
      <DataRow
        theme={theme}
        label="1.010 SG 20/20"
        percent="~12.3%"
        time="12 Mins"
        pic={true}
      />
      <hr className="w-full border-2 border-[#e2dfdd] mt-7" />
      <DataRow
        theme={theme}
        label="1.010 SG 20/20"
        percent="~12.3%"
        time="12 Mins"
        pic={false}
      />
      <hr className="w-full border-2 border-[#e2dfdd] mt-7" />
      <DataRow2
        theme={theme}
        percent2="4.6%"
        time2="Yesterday"
        label2="Larger Beer"
      />
      <hr className="w-full border-2 border-[#e2dfdd] mt-7" />
      <DataRow2
        theme={theme}
        percent2="4.4%"
        time2="2 Days ago"
        label2="Larger Beer"
      />
      <hr className="w-full border-2 border-[#e2dfdd] mt-7" />
      <DataRow
        theme={theme}
        label="1.015 SG"
        percent="~12.3%"
        time="22 sept"
        pic={true}
      />
      <hr className="w-full border-2 border-[#e2dfdd] mt-7" />
      <div className="w-full flex items-center justify-start">
        <BsThreeDots className="text-[#ada49f] font-semibold mt-7 w-[50px] h-[50px]" />
      </div>
      <hr className="w-full border-2 border-[#e2dfdd] mt-7" />
      <DataRow3
        theme={theme}
        label3="1.047 SG"
        percent3="~0.0%"
        paramsFor3="Orig. Grav."
        time3="14 sept"
        pic3={true}
      />
      <hr className="w-full border-2 border-[#e2dfdd] mt-7" />
      <div className="flex flex-row items-center justify-between mt-7">
        <h1
          className={`${
            theme === "light" ? "text-[#270140]" : "text-white"
          } font-medium text-base sm:text-xl`}
        >
          All Readings
        </h1>
        <MdOutlineKeyboardArrowRight className="text-[#ada49f] w-[30px] sm:w-[40px] h-[30px] sm:h-[40px]" />
      </div>
    </div>
  );
};

export default Readings;
