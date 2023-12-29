import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import OrgChart from "./Component/OrgChart";

function App() {
  const [orgData, setOrgData] = useState([]);

  //this below api will call using axios library and will fetch data from backend.
  useEffect(() => {
    axios
      .get(
        "https://test-chart-backend-8689b01b045d.herokuapp.com/api/employeesdata"
      )
      .then((response) => {
        setOrgData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      {orgData.length > 0 && <OrgChart data={orgData} />}
    </div>
  );
}

export default App;
