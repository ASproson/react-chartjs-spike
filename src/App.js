import { useState } from "react";
import "./App.css";
import { UserData } from "./data/UserData";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((d) => d.year),
    datasets: [
      {
        label: "Users gained",
        data: UserData.map((d) => d.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="App">
      <h1>React ChartJS</h1>
      <BarChart chartData={userData} />
      <LineChart chartData={userData} />
      <PieChart chartData={userData} />
    </div>
  );
}

export default App;
