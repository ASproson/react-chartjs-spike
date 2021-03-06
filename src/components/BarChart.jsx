import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ chartData }) => {
  return (
    <div style={{ width: 600, marginBottom: "2rem", margin: "auto" }}>
      <Bar
        data={chartData}
        // options={}
      />
    </div>
  );
};

export default BarChart;
