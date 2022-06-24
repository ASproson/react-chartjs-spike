import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import { UserData } from "./data/UserData";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((d) => d.year),
    datasets: [
      {
        label: "Users gained",
        data: UserData.map((d) => d.userGain),
      },
    ],
  });

  return (
    <div className="App">
      <h1>React ChartJS</h1>
      <BarChart chartData={userData} />
    </div>
  );
}

export default App;
