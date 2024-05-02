import React from "react";

const Button = ({ label, onClick, theme }) => {
  return (
    <button
      className={`flex items-center justify-center w-[150px] h-[40px] text-white ${
        theme === "light" ? "bg-[#270140]" : "bg-[#a9912e]"
      }  hover:bg-[#5a0f8c] rounded-md cursor-pointer text-xs`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
