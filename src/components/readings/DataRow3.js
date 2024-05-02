import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Dummy from "../../../public/assets/images/rm.png";
import DummyDark from "../../../public/assets/images/dummyUserReadingDark.png";

const DataRow3 = ({ paramsFor3, percent3, time3, pic3, label3, theme }) => {
  return (
    <div className="flex flex-row w-full items-start justify-between mt-7">
      <div className="flex flex-row gap-2 items-center justify-start w-3/5">
        <label
          className={`${
            theme === "light" ? "text-[#270140]" : "text-white"
          } text-sxs sms:text-ss sm:text-sm md:text-lg font-medium`}
        >
          {label3}
        </label>
        <hr className="border-2 border-[#ada49f] h-[30px]" />
        <h4
          className={`${
            theme === "light" ? "text-[#270140]" : "text-white"
          } text-sxs sms:text-ss sm:text-sm md:text-lg font-medium`}
        >
          {percent3}
        </h4>
        <button className="w-[70px] sms:w-[80px] sm:w-[100px] md:w-[150px] h-[24px] sms:h-[30px] rounded-2xl bg-[#e2dfdd] text-[#ada49f] font-semibold text-sxs sm:text-xs md:text-base">
          {paramsFor3}
        </button>
      </div>
      <div className="flex flex-row gap-1 items-center justify-end w-2/5">
        <h2 className="text-[#ada49f] text-sxs sms:text-ss sm:text-sm md:text-lg font-medium">
          {time3}
        </h2>
        {pic3 && (
          <Image
            src={theme === "light" ? Dummy : DummyDark}
            alt="user"
            className="w-[24px] sms:w-[30px] md:w-[40px] h-[24px] sms:h-[30px] md:h-[40px]"
          />
        )}
        <MdOutlineKeyboardArrowRight className="text-[#ada49f] w-[24px] sms:w-[30px] md:w-[40px] h-[24px] sms:h-[30px] md:h-[40px]" />
      </div>
    </div>
  );
};

export default DataRow3;
