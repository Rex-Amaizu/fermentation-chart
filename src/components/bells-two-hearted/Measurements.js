import React from "react";

const Measurements = ({
  measurementAverage,
  measurementLabel,
  measurementValue1,
  measurementValue2,
  theme,
}) => {
  return (
    <div className="flex flex-col w-full gap-1">
      <h6 className="text-[#ada49f] font-semibold text-sxs sm:text-xs ms:text-sm">
        {measurementLabel}
      </h6>
      <label
        className={`${
          theme === "light" ? "text-[#5a0f8c]" : "text-white"
        } font-semibold text-xs sm:text-xl`}
      >
        {measurementAverage}
      </label>
      <div className="flex flex-row items-center justify-start">
        <hr className="border-2 w-[30px] sm:w-[60px] ms:w-[80px] border-[#f27405] rounded-l-lg" />
        <hr className="border-2 w-[50px] sm:w-[100px] ms:w-[120px] border-[#e0dee0] rounded-r-lg" />
      </div>
      <div className="flex flex-row items-center justify-between w-[80px] sm:w-[160px] ms:w-[200px]">
        <h6 className="text-[#ada49f] font-semibold text-sxs sm:text-xs ms:text-sm">
          {measurementValue1}
        </h6>
        <h6 className="text-[#ada49f] font-semibold text-sxs sm:text-xs ms:text-sm">
          {measurementValue2}
        </h6>
      </div>
    </div>
  );
};

export default Measurements;
