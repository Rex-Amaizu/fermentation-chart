import React from "react";
import Image from "next/image";
import GlassImg from "../../../public/assets/images/glass.png";
import GlassImgDark from "../../../public/assets/images/glassDark.png";
import Measurements from "./Measurements";

const measurementData = [
  {
    measurementLabel: "Orig. Gravity",
    measurementAverage: "1.047 SG",
    measurementValue1: "1.045",
    measurementValue2: "1.050",
  },
  {
    measurementLabel: "Final Gravity",
    measurementAverage: "1.010 SG",
    measurementValue1: "1.005",
    measurementValue2: "1.015",
  },
];

const measurementData2 = [
  {
    measurementLabel: "ABV",
    measurementAverage: "4.9%",
    measurementValue1: "3.9%",
    measurementValue2: "5.2%",
  },
  {
    measurementLabel: "Bitterness",
    measurementAverage: "59.4 IBU",
    measurementValue1: "30",
    measurementValue2: "60",
  },
];

const BellsTwoHearted = ({ theme }) => {
  return (
    <div className="h-auto flex flex-col items-start justify-center w-full ">
      <div className="flex flex-row items-center justify-between w-full">
        <label
          className={`${
            theme === "light" ? "text-[#270140]" : "text-white"
          } font-bold text-xs sm:text-lg ms:text-3xl`}
        >
          Bell's Two Hearted IPA
        </label>
        <p
          className={`${
            theme === "light" ? "text-[#5a0f8c]" : "text-[#a9912e]"
          } font-medium text-ss sm:text-base ms:text-xl`}
        >
          Show
        </p>
      </div>

      <div className="flex flex-row items-center justify-between w-full mt-7">
        <div className="flex flex-col w-3/5 h-auto items-start justify-center">
          <h6 className="text-[#ada49f] font-semibold text-sxs sm:text-xs ms:text-sm">
            Style
          </h6>
          <h1
            className={`${
              theme === "light" ? "text-[#5a0f8c]" : "text-white"
            } font-semibold text-ss sm:text-base ms:text-xl`}
          >
            American-Style Pale Ale
          </h1>
        </div>
        <div className="flex justify-end w-2/5">
          <Image
            src={theme === "light" ? GlassImg : GlassImgDark}
            alt="glass"
            className="w-[50px] sm:w-[80px] h-[50px] sm:h-[80px]"
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-full mt-7">
        {measurementData.map((m, index) => (
          <div>
            <Measurements
              theme={theme}
              key={index}
              measurementLabel={m.measurementLabel}
              measurementAverage={m.measurementAverage}
              measurementValue1={m.measurementValue1}
              measurementValue2={m.measurementValue2}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center justify-between w-full mt-7">
        {measurementData2.map((ms, index) => (
          <div>
            <Measurements
              theme={theme}
              key={index}
              measurementLabel={ms.measurementLabel}
              measurementAverage={ms.measurementAverage}
              measurementValue1={ms.measurementValue1}
              measurementValue2={ms.measurementValue2}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-row w-[90%] sm:w-4/5 ms:w-3/5 items-start justify-between mt-7">
        <div className="flex flex-col w-1/2 h-auto items-start justify-center">
          <p className="text-[#ada49f] font-semibold text-sxs sm:text-xs ms:text-sm">
            Beer Color
          </p>
          <div className="flex flex-row gap-2 items-center">
            <h4
              className={`${
                theme === "light" ? "text-[#5a0f8c]" : "text-white"
              } font-semibold text-ss sm:text-base ms:text-xl`}
            >
              12 EBC
            </h4>
            <div className="flex w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] rounded-[50%] border-2 border-[#f3f2f1] bg-white items-center justify-center">
              <div className="w-[25px] sm:w-[35px] h-[25px] sm:h-[35px] rounded-[50%] border-4 border-white bg-[#f8a700]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2 h-auto items-end justify-center">
          <p className="text-[#ada49f] font-semibold text-sxs sm:text-xs ms:text-sm">
            Fermentation
          </p>
          <h4
            className={`${
              theme === "light" ? "text-[#5a0f8c]" : "text-white"
            } font-semibold text-ss sm:text-base ms:text-xl`}
          >
            10 days
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BellsTwoHearted;
