import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Dummy from "../../../public/assets/images/dummyUserReading.png";
import DummyDark from "../../../public/assets/images/dummyUserReadingDark.png";

const DataRow2 = ({ percent2, label2, time2, theme }) => {
  return (
    <div className="flex flex-row w-full items-start justify-between mt-7">
      <div className="flex flex-row gap-2 items-center justify-start w-3/5">
        <h4
          className={`${
            theme === "light" ? "text-[#270140]" : "text-white"
          } text-sxs sms:text-ss sm:text-sm md:text-lg font-medium`}
        >
          {percent2}
        </h4>
        <button className="w-[70px] sms:w-[80px] sm:w-[100px] md:w-[150px] h-[24px] sms:h-[30px] rounded-2xl bg-[#e2dfdd] text-[#ada49f] font-semibold text-sxs sm:text-xs md:text-base">
          {label2}
        </button>
      </div>
      <div className="flex flex-row gap-1 items-center justify-end w-2/5">
        <h2 className="text-[#ada49f] text-sxs sms:text-ss sm:text-sm md:text-lg font-medium">
          {time2}
        </h2>
        <Image
          src={theme === "light" ? Dummy : DummyDark}
          alt="user"
          className="w-[24px] sms:w-[30px] md:w-[40px] h-[24px] sms:h-[30px] md:h-[40px]"
        />
        <MdOutlineKeyboardArrowRight className="text-[#ada49f] w-[24px] sms:w-[30px] md:w-[40px] h-[24px] sms:h-[30px] md:h-[40px]" />
      </div>
    </div>
  );
};

export default DataRow2;
