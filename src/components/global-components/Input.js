import React from "react";

const Input = ({ placeholder, type, onChange }) => {
  return (
    <input
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="w-[280px] h-[30px] border-1 bg-white rounded p-6"
    />
  );
};

export default Input;
