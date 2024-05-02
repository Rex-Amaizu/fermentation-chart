import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import styles from "@/styles/charts/FermentationChart.module.css";
import { GoShare } from "react-icons/go";
import Button from "../global-components/Button";
import { useRouter } from "next/navigation";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  BarElement
);

const FermentationChart = ({ data, theme }) => {
  const [lineChart, setLineChart] = useState(true);

  const router = useRouter();

  if (!data || data.length === 0) {
    return;
  }

  const toggleChart = () => {
    setLineChart(!lineChart);
  };

  // Extracting first 10 values from temperatures, measuredAts and densities from data
  const labels = data.measuredAts.slice(0, 10);
  const temperatures = data.temperatures.slice(0, 10);
  const densities = data.densities.slice(0, 10);
  const measuredAts = data.measuredAts.slice(0, 10);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Density",
        data: densities,
        backgroundColor: "#ff6600",
        borderColor: "#ff6600",
        borderWidth: 1,
      },
      {
        label: "Temperature",
        data: temperatures,
        backgroundColor: "purple",
        borderColor: "purple",
        borderWidth: 1,
      },
      {
        label: "MeasuredAt",
        data: measuredAts,
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
      },
      x: {
        min: 0,
      },
      Density: {
        type: "linear",
        position: "right",
      },
      Density: {
        type: "linear",
        position: "right",
      },
    },
  };

  return (
    <div
      className={theme === "light" ? styles.container : styles.containerDark}
    >
      <div className={styles.rowOne}>
        <div className="flex smflex-row w-auto gap-1 items-center h-[40px]">
          <h1 className="text-[#270140] font-bold text-3xl sm:text-2xl ms:text-3xl">
            Fermenting
          </h1>
          <p className="text-[#5c595e] font-medium text-sm ms:text-lg self-end">
            Day 10/10
          </p>
        </div>
        <div
          className={`flex items-center justify-center w-[250px] sm:w-[150px] ms:w-[250px] h-[40px] rounded-2xl ${
            theme === "light" ? "bg-[#270140]" : "bg-white"
          } `}
        >
          <h6
            className={`${
              theme === "light" ? "text-white" : "text-[#270140]"
            } text-xl sm:text-sm ms:text-xl font-semibold`}
          >
            Set to Complete
          </h6>
        </div>
      </div>
      <hr className="w-full border-4 border-[#270140] mt-10" />
      <div className="flex flex-col w-full h-[500px] mt-9">
        <div className="flex flex-row gap-1 sm:gap-3 w-full items-center justify-center">
          {chartData.datasets.map((d) => (
            <div className="flex flex-row gap-1" key={d.label}>
              <label className="text-[#ada49f] text-ss sm:text-base font-semibold">
                {d.label}
              </label>
              <div
                className={`w-[24px] sm:w-[50px] h-[12px] sm:h-[20px] ${
                  (d.label === "Density" && "bg-[#ff6600]") ||
                  (d.label === "Temperature" && "bg-[purple]") ||
                  (d.label === "MeasuredAt" && "bg-[green]")
                }`}
              ></div>
            </div>
          ))}
        </div>
        {lineChart ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <Bar data={chartData} options={chartOptions} />
        )}
      </div>
      <div className="flex flex-row items-center justify-center gap-1 cursor-pointer mt-7">
        <GoShare
          className={`${
            theme === "light" ? "text-[#5a0f8c]" : "text-[#a9912e]"
          } font-normal w-[40px] h-[40px]`}
        />
        <h4
          className={`${
            theme === "light" ? "text-[#5a0f8c]" : "text-[#a9912e]"
          } font-medium text-xl`}
          onClick={toggleChart}
        >
          Toggle Chart
        </h4>
        <Button
          theme={theme}
          label="Add Measurement"
          onClick={() => {
            router.push("/add-measurement");
          }}
        />
      </div>
    </div>
  );
};

export default FermentationChart;
