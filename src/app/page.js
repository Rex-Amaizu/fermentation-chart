"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/global-components/Button";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { themeContext } from "../../store/ThemeContext";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const { theme, setTheme } = useContext(themeContext);

  const router = useRouter();

  const generateId = () => {
    setLoading(true);
    const newUUID = 12345;
    localStorage.setItem("f-chart-userID", JSON.stringify(newUUID));
    setLoading(false);
    router.push("/dashboard");
  };

  const lightMode = () => {
    setTheme("light");
  };

  const darkMode = () => {
    setTheme("dark");
  };

  return (
    <div
      className={`flex flex-col gap-8 ${
        theme === "light" ? "bg-[#f2eace]" : "bg-[#150d1a]"
      } w-full h-screen overflow-hidden items-center`}
    >
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
      {loading && (
        <p
          className={`text-lg font-bold mt-5 ${
            theme === "light" ? "text-[#5a0f8c]" : "text-white"
          }`}
        >
          Loading...
        </p>
      )}
      <label
        className={`${
          theme === "light" ? "text-[#5a0f8c]" : "text-white"
        } text-base msx:text-2xl font-bold mt-5`}
      >
        CLICK THE BUTTON BELOW TO LOGIN
      </label>
      <Button label="LOGIN" onClick={generateId} theme={theme} />
    </div>
  );
}
