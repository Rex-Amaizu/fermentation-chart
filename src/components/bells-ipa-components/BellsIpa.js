"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import styles from "@/styles/BellsIpa.module.css";
import UserImg from "../../../public/assets/images/dummyUser1.png";
import UserImg2 from "../../../public/assets/images/dummyUser2.png";
import UserImgDark from "../../../public/assets/images/dummyUser1Dark.png";
import UserImg2Dark from "../../../public/assets/images/dummyUser2Dark.png";
import DataBox from "./DataBox";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { themeContext } from "../../../store/ThemeContext";

const dataBoxReadings = [
  {
    label: "Latest reading",
    labelValue: "1.047",
    valueParams1: "SG",
    valueParams2: "20/20",
  },
  {
    label: "ABV",
    labelValue: "4.8%",
    valueParams1: "",
    valueParams2: "",
  },
  {
    label: "Attenuation",
    labelValue: "81%",
    valueParams1: "",
    valueParams2: "",
  },
];

const BellsIpa = () => {
  const { theme, setTheme } = useContext(themeContext);

  const lightMode = () => {
    setTheme("light");
  };

  const darkMode = () => {
    setTheme("dark");
  };
  return (
    <div className={styles.container}>
      <div className="flex flex-row gap-5 w-1/2 items-center justify-center h-[50px] mt-5">
        <div className="flex flex-col gap-1 items-center justify-center w-[130px]">
          <MdLightMode
            className={`h-[30px] w-[30px] cursor-pointer ${
              theme === "light" ? "text-[#150d1a]" : "text-[#f2eace]"
            }`}
            onClick={darkMode}
          />
          <h5
            className={`${
              theme === "light" ? "text-[#5a0f8c]" : "text-white"
            } text-sxs font-bold`}
          >
            Dark Mode
          </h5>
        </div>
        <div className="flex flex-col items-center justify-center w-[130px] gap-1">
          <MdOutlineLightMode
            className={`h-[30px] w-[30px] cursor-pointer ${
              theme === "light" ? "text-[#150d1a]" : "text-[#f2eace]"
            }`}
            onClick={lightMode}
          />
          <h5
            className={`${
              theme === "light" ? "text-[#5a0f8c]" : "text-white"
            } text-sxs font-bold`}
          >
            Light Mode
          </h5>
        </div>
      </div>
      <label
        className={`${
          theme === "light" ? "text-[#270140]" : "text-white"
        } text-base sm:text-4xl lg:text-7xl font-bold`}
      >
        Bell's IPA Oct.22
      </label>
      <div className="flex flex-row items-center justify-center w-1/2 gap-1 mt-5">
        <Image
          className="w-[40px] sm:w-[60px] lg:w-[100px] h-[40px] sm:h-[60px] lg:h-[100px]"
          src={theme === "light" ? UserImg : UserImgDark}
          alt="user 1"
        />
        <Image
          className="w-[40px] sm:w-[60px] lg:w-[100px] h-[40px] sm:h-[60px] lg:h-[100px]"
          src={theme === "light" ? UserImg2 : UserImg2Dark}
          alt="user 2"
        />
        <div
          className={`flex items-center justify-center ${
            theme === "light" ? "bg-[#eae8eb] " : "bg-[#646365]"
          }w-[35px] sm:w-[50px] h-[35px] sm:h-[50px] lg:w-[90px] lg:h-[90px] rounded-[50%]`}
        >
          <h6
            className={` ${
              theme === "light" ? "text-[#270140]" : "text-[#77756c]"
            } text-base sm:text-xl lg:text-4xl font-semibold`}
          >
            RM
          </h6>
        </div>
      </div>
      <h1 className="text-[#77756c] font-semibold text-xl lg:text-4xl mt-5">
        Latest reading 1hr ago
      </h1>
      <div className="flex flex-row gap-3 md:gap-0 items-center justify-center md:justify-between w-11/12 lg:w-4/5 sl:w-3/5 mt-10 flex-wrap">
        {dataBoxReadings.map((data, index) => (
          <DataBox
            theme={theme}
            key={index}
            label={data.label}
            labelValue={data.labelValue}
            valueParams1={data.valueParams1}
            valueParams2={data.valueParams2}
          />
        ))}
      </div>
    </div>
  );
};

export default BellsIpa;
