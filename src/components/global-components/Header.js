import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/global/Header.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { LiaUserCheckSolid } from "react-icons/lia";
import MenuIcon from "../../../public/assets/images/menu.png";
import MenuIconDark from "../../../public/assets/images/menuDark.png";
import Button from "./Button";
import { useMedia } from "@/hooks/useResponsive";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Header = ({ theme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const mobileDevice = useMedia("(max-width: 540px)");

  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("f-chart-userID");
    router.push("/");
  };
  return (
    <div className={styles.container}>
      <div className={theme === "light" ? styles.rowDiv : styles.rowDivDark}>
        <div className="flex flex-row gap-1 items-center justify-center">
          <IoIosArrowBack
            className={`${
              theme === "light" ? "text-[#641d92]" : "text-[#a9912e]"
            } w-[20px] h-[20px] sms:w-[24px] sm:h-[24px]`}
          />
          <label
            className={`${
              theme === "light" ? "text-[#641d92]" : "text-[#a9912e]"
            } text-xs sms:text-base`}
          >
            Batches
          </label>
        </div>
        <h1
          className={`${
            theme === "light" ? "text-[#270140]" : "text-white"
          } text-xs sms:text-base font-semibold`}
        >
          Bell's IPA Oct.22
        </h1>
        <div className="flex flex-row gap-3 items-center justify-center">
          <LiaUserCheckSolid
            className={`${
              theme === "light" ? "text-[#270140]" : "text-[#a9912e]"
            } w-[24px] h-[24px] sms:w-[30px] sms:h-[30px] cursor-pointer`}
          />
          {mobileDevice ? (
            <Image
              className=""
              src={theme === "light" ? MenuIcon : MenuIconDark}
              alt="menu"
              onClick={() => {
                setShowMenu(true);
              }}
            />
          ) : (
            <Button label="Log out" onClick={logout} theme={theme} />
          )}
        </div>
      </div>
      {showMenu && (
        <div className="flex flex-col w-full items-end absolute mt-[100px]">
          <div className="flex flex-col gap-3 w-[180px] h-auto p-5 bg-white items-end">
            <IoClose
              onClick={() => {
                setShowMenu(false);
              }}
            />
            <Button label="Log out" onClick={logout} theme={theme} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
