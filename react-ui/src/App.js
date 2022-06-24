import React, { useState, useEffect, useContext} from "react";
import { Button } from "@mui/material";
import rsLogo from "./logo-with-name.png";
import "./App.css";
import axios from 'axios';
import Team from './oneTeam.js'
import { WeatherContext } from "./WeatherContext";
console.log(process.env.staging)


const bBallapi = "https://www.balldontlie.io/api/v1/teams"
const weatherAPI = "http://api.weatherapi.com/v1/current.json?key="

function App() {
  const {city, setCity} = useContext(WeatherContext);

  const [teams, setTeams] = useState([])
  const [showContent, setShow] = useState(false)
  useEffect(()=>{
    const fetchData = async () => {
    let res = await axios.get(bBallapi);
    setTeams(res.data.data)
    }
    fetchData();
  }, [showContent])

  useEffect(()=>{
    

  }, [city, setCity]
  )


  const handleToggle = () => {
    setShow(true)
  }

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={rsLogo} className="App-logo" alt="logo" />
      </header>
      <main>
      <div id="weatherapi-weather-widget-3"></div><script type='text/javascript' src='https://www.usaweather.io/widget.ashx?loc=2546042&wid=3&tu=2&div=weatherapi-weather-widget-3' async></script><noscript><a href="https://www.usaweather.io/weather-forecast/alhambra-2546042" alt="Alhambra weather">Alhambra weather</a></noscript>
      <button onClick={handleToggle} className="btn btn-warning">Click Me to show All NBA teams</button>
      <div className='container'>
      <div className='row'>

      {showContent===true&&teams.map((team)=><div className='col-4 mb-5' ><Team shortname={team.name} fullname={team.full_name} conf={team.conference} div={team.division} abb={team.abbreviation} city={team.city}/></div>)}
      </div>

      </div>
      </main>
    </div>
  );
}

export default App;
