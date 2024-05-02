import React from "react";

const DataBox = ({ label, labelValue, valueParams1, valueParams2, theme }) => {
  return (
    <div
      className={`flex flex-col items-start w-[300px] h-[200px] msx:w-[200px] msx:h-[150px] ${
        theme === "light" ? "bg-[#f5efda]" : "bg-[#272627]"
      } rounded-xl p-8 msx:p-4`}
    >
      <label className="text-[#77756c] font-semibold text-xl msx:text-base">
        {label}
      </label>
      <div className="flex flex-row w-[300px] gap-1 mt-10 msx:mt-6">
        <h1
          className={`${
            theme === "light" ? "text-[#270140]" : "text-white"
          } text-6xl msx:text-5xl font-semibold`}
        >
          {labelValue}
        </h1>
        <div className="flex flex-col gap-[2px]">
          <h5
            className={`${
              theme === "light" ? "text-[#270140]" : "text-white"
            } text-sm msx:text-xs font-medium`}
          >
            {valueParams1}
          </h5>
          <h5
            className={`${
              theme === "light" ? "text-[#270140]" : "text-white"
            } text-sm msx:text-xs font-medium`}
          >
            {valueParams2}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default DataBox;
