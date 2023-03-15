import React, { useEffect, useState } from "react";
import "./Drawer.css";
import axios from "axios";

const Drawer = () => {
  const [teams, setTeams] = useState([]);

  const getTeams = () => {
    axios
      .get("https://statsapi.web.nhl.com/api/v1/teams")
      .then((res) => setTeams(res.data.teams));
  };

  useEffect(() => {
    getTeams();
  }, []);

  console.log(teams);
  return (
    <>
      <div className="drawer-container">
        {teams.map((teams) => (
          <p>{teams.name}</p>
        ))}
      </div>
    </>
  );
};

export default Drawer;
