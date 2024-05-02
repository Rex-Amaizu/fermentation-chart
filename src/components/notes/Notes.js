import React from "react";

const Notes = ({ theme }) => {
  return (
    <div className="flex flex-col gap-3 justify-start w-full">
      <label className="text-[#ada49f] font-semibold text-lg ms:text-lg">
        Notes
      </label>
      <p
        className={`${
          theme === "light" ? "text-[#5a0f8c]" : "text-white"
        } font-normal text-xs sm:text-xl w-full`}
      >
        Dry-Hopping for 48hrs at normal fermentation temps once fermentation has
        slowed significantly
      </p>
    </div>
  );
};

export default Notes;
