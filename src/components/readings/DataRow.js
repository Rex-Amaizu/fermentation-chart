import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Dummy from "../../../public/assets/images/dummyUserReading.png";
import DummyDark from "../../../public/assets/images/dummyUserReadingDark.png";

const DataRow = ({ label, percent, time, pic, theme }) => {
  return (
    <div className="flex flex-row w-full items-start justify-between mt-7">
      <div className="flex flex-row gap-2 items-center justify-start w-3/5">
        <label
          className={`${
            theme === "light" ? "text-[#270140]" : "text-white"
          } text-sxs sms:text-ss sm:text-sm md:text-lg font-medium`}
        >
          {label}
        </label>
        <hr className="border-2 border-[#ada49f] h-[30px]" />
        <h4
          className={`${
            theme === "light" ? "text-[#270140]" : "text-white"
          } text-sxs sms:text-ss sm:text-sm md:text-lg font-medium`}
        >
          {percent}
        </h4>
      </div>
      <div className="flex flex-row gap-1 items-center justify-end w-2/5">
        <h2 className="text-[#ada49f] text-sxs sms:text-ss sm:text-sm md:text-lg font-medium">
          {time}
        </h2>
        {pic && (
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

export default DataRow;
