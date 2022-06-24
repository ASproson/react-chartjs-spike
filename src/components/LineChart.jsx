import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = ({ chartData }) => {
  return (
    <div style={{ width: 600, marginBottom: "2rem", margin: "auto" }}>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
