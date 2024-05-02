import React from "react";
import Image from "next/image";
import { BsCamera } from "react-icons/bs";
import ReceiptImg from "../../../public/assets/images/receipt.png";

const UploadImage = ({ theme }) => {
  return (
    <div className="flex flex-col w-full">
      <label
        className={`${
          theme === "light" ? "text-[#270140]" : "text-white"
        } font-bold text-xs sm:text-lg ms:text-3xl`}
      >
        1Photo
      </label>
      <div className="flex flex-row justify-between items-center mt-7 h-[300px]">
        <div className="flex items-center justify-center w-[90%] sms:w-4/5 h-[300px]">
          <Image src={ReceiptImg} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col w-[60px] sms:w-[80px] items-end cursor-pointer">
          <div
            className={`flex items-center justify-center ${
              theme === "light" ? "bg-[#eae8eb]" : "bg-[#373737]"
            }  w-[60px] sms:w-[80px] h-[60px] sms:h-[80px] rounded-[50%]`}
          >
            <BsCamera
              className={`${
                theme === "light" ? "text-[#5a0f8c]" : "text-[#a9912e]"
              }`}
            />
          </div>
          <p
            className={`${
              theme === "light" ? "text-[#5a0f8c]" : "text-[#a9912e]"
            } font-medium text-base md:text-lg self-center`}
          >
            Add
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
