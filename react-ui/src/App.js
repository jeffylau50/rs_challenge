import React, { useState, useEffect} from "react";
import { Button } from "@mui/material";
import rsLogo from "./logo-with-name.png";
import "./App.css";
import axios from 'axios';
import Team from './oneTeam.js'

const bBallapi = "https://www.balldontlie.io/api/v1/teams"


function App() {
  
  const [teams, setTeams] = useState([])
  const [showContent, setShow] = useState(false)
  useEffect(()=>{
    const fetchData = async () => {
    let res = await axios.get(bBallapi);
    setTeams(res.data.data)
    console.log(teams[0].id)}
    fetchData();
  }, [showContent])

  const handleToggle = () => {
    setShow(true)
  }

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={rsLogo} className="App-logo" alt="logo" />
      </header>
      <main>
      <button onClick={handleToggle} className="btn btn-warning">Click Me to show All NBA teams</button>
      <div class='container'>
      {showContent===true&&teams.map((team)=><Team shortname={team.name} fullname={team.full_name} conf={team.conference} div={team.division} abb={team.abbreviation} city={team.city}/>)}
      
      </div>
      </main>
    </div>
  );
}

export default App;
