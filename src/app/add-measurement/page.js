"use client";
import React, { useState, useContext } from "react";
import Button from "@/components/global-components/Button";
import Input from "@/components/global-components/Input";
import { useRouter } from "next/navigation";
import { themeContext } from "../../../store/ThemeContext";

const page = () => {
  const [time, setTime] = useState();
  const [temp, setTemp] = useState();
  const [density, setDensity] = useState();
  const [islLoading, setIsLoading] = useState(false);

  const { theme } = useContext(themeContext);

  const router = useRouter();

  const savedId = localStorage.getItem("f-chart-userID");
  if (savedId === null || savedId === undefined) {
    return router.push("/");
  }

  const addMeasurement = (e) => {
    setIsLoading(true);
    e.preventDefault();
    var date = new Date(time.toString());
    var unixTimestamp = date.getTime();
    var unixTimestampSeconds = Math.floor(unixTimestamp / 1000);
    const roundTemp = Math.round(temp * 10000) / 10000;
    const roundDensity = Math.round(density * 100) / 100;

    const payload = {
      measuredAt: unixTimestampSeconds,
      temperature: Number(roundTemp),
      density: Number(roundDensity),
    };

    const sendUrl = process.env.NEXT_PUBLIC_SEND_URL;

    const sendData = async () => {
      await fetch(`${sendUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-User": savedId,
        },

        body: JSON.stringify(payload),
      })
        .then((response) => {
          setIsLoading(false);
          console.log(response);
          window.location.replace("/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    sendData();
  };

  return (
    <form onSubmit={addMeasurement}>
      <div
        className={`flex flex-col gap-8  ${
          theme === "light" ? "bg-[#f2eace]" : "bg-[#150d1a]"
        } w-full h-screen overflow-hidden items-center justify-center`}
      >
        {islLoading && (
          <div
            className={`${
              theme === "light" ? "text-[#5a0f8c]" : "text-white"
            } text-2xl font-bold`}
          >
            Loading...
          </div>
        )}
        <div
          className={`text-white text-2xl flex items-center justify-center font-bold ${
            theme === "light" ? "bg-[#5a0f8c]" : "bg-[#a9912e]"
          } rounded w-[150px] h-[50px] cursor-pointer self-center`}
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Go Back
        </div>
        <label
          className={`${
            theme === "light" ? "text-[#5a0f8c]" : "text-white"
          } text-xl font-bold`}
        >
          ADD NEW MEASUREMENT
        </label>
        <Input
          placeholder="Time of Measurement"
          type="date"
          onChange={(e) => {
            setTime(e.target.value);
          }}
        />
        <Input
          placeholder="Temperature"
          type="text"
          onChange={(e) => {
            setTemp(e.target.value);
          }}
        />
        <Input
          placeholder="Density"
          type="text"
          onChange={(e) => {
            setDensity(e.target.value);
          }}
        />
        <Button label="Add Measurement" theme={theme} />
      </div>
    </form>
  );
};

export default page;
