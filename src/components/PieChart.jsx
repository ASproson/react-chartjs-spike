import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const PieChart = ({ chartData }) => {
  return (
    <div style={{ width: 400, margin: "auto" }}>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
