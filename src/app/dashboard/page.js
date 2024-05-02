"use client";
import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import FermentationChart from "@/components/charts/FermentationChart";
import styles from "@/styles/App.module.css";
import Header from "@/components/global-components/Header";
import BellsIpa from "@/components/bells-ipa-components/BellsIpa";
import Readings from "@/components/readings/Readings";
import BellsTwoHearted from "@/components/bells-two-hearted/BellsTwoHearted";
import Notes from "@/components/notes/Notes";
import UploadImage from "@/components/pic-upload/UploadImage";
import MeasuringDevice from "../../../public/assets/images/measuringDevice.png";
import MeasuringDeviceDark from "../../../public/assets/images/measuringDeviceDark.png";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { themeContext } from "../../../store/ThemeContext";

export default function Home() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);

  const { theme } = useContext(themeContext);

  const router = useRouter();

  const fetchUrl = process.env.NEXT_PUBLIC_FETCH_URL;

  useEffect(() => {
    const savedId = JSON.parse(localStorage.getItem("f-chart-userID"));
    if (savedId === null || savedId === undefined) {
      return router.push("/");
    }
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => {
      controller.abort();
      setErr(true);
      toast("Request Timed Out", {
        toastId: "time out",
      });
    }, 60000);

    const fetchData = async () => {
      const res = await fetch(`${fetchUrl}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-User": savedId,
          "Cache-Control": "no-cache",
        },
        signal,
      });

      if (res.ok === true) {
        clearTimeout(timeoutId);
        const result = await res.json();
        setData(result);
        setErr(false);
      } else {
        setErr(true);
        toast("Something went wrong.. Try Again", {
          toastId: "error",
        });
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className={theme === "light" ? styles.container : styles.containerDark}
    >
      <Header theme={theme} />
      <BellsIpa />
      <ToastContainer />

      {(err && data.length === 0 && null) ||
        (!err && data.length === 0 && (
          <div className="text-[#5a0f8c] text-2xl font-bold">
            Chart Loading...
          </div>
        )) || (
          <div className="w-full h-auto flex items-center justify-center">
            <FermentationChart data={data} theme={theme} />
          </div>
        )}

      <div
        className={`flex items-start justify-center w-[90%] ${
          theme === "light" ? "bg-[#fffcf3]" : "bg-[#212121]"
        }  mt-10 rounded-xl p-10`}
      >
        <Readings theme={theme} />
      </div>
      <div
        className={`flex items-start justify-center w-[90%] ${
          theme === "light" ? "bg-[#fffcf3]" : "bg-[#212121]"
        } mt-10 rounded-xl p-10 `}
      >
        <BellsTwoHearted theme={theme} />
      </div>
      <div
        className={`flex items-start w-[90%] ${
          theme === "light" ? "bg-[#fffcf3]" : "bg-[#212121]"
        } mt-10 rounded-xl p-8 `}
      >
        <Notes theme={theme} />
      </div>
      <div
        className={`flex items-start w-[90%] ${
          theme === "light" ? "bg-[#fffcf3]" : "bg-[#212121]"
        } mt-10 rounded-xl p-8 `}
      >
        <UploadImage theme={theme} />
      </div>
      <div className="flex flex-row gap-5 w-auto mt-10 pb-10 items-center justify-center">
        <Image
          src={theme === "light" ? MeasuringDevice : MeasuringDeviceDark}
          alt="measuring device"
        />
        <p className="text-[#ada49f] font-semibold text-lg w-[150px]">
          Mesuring Device Easy Dens
        </p>
      </div>
    </div>
  );
}
