import React, { useState, useEffect, useContext} from "react";
import { Button } from "@mui/material";
import rsLogo from "./logo-with-name.png";
import "./App.css";
import axios from 'axios';
import Team from './oneTeam.js'
import WeatherWidget from "./weatherWidget";
import { WeatherContext } from "./WeatherContext";
console.log(process.env.staging)


const bBallapi = "https://www.balldontlie.io/api/v1/teams"


function App() {
  const {city, setCity, counter, setCount, weatherInfo, setWeather} = useContext(WeatherContext);
  const [teams, setTeams] = useState([])
  const [search, setSearch] = useState('')
  const [showContent, setShow] = useState(false)
  const [weatherInfoStatus, setStatus] = useState(false)

  useEffect(()=>{
    const fetchData = async () => {
    let res = await axios.get(bBallapi);
    setTeams(res.data.data)
    }
    fetchData();
  }, [showContent])

  useEffect(()=>{
    const fetchData = async () => {
      let res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=&q=${city}&aqi=no`);
      setWeather(res.data)
      setStatus(true)
      console.log(res.data)
      }
      fetchData();

  }, [counter]
  )


  const handleToggle = () => {
    setShow(true)
  }
  const handleChange = (evt) => {
  setSearch(evt.target.value)
  }

  return (
    
    <div className="container">
      <header className="App-header alignCenterClass">
        <img src={rsLogo} className="App-logo" alt="logo" />
      </header>
      <main>
      <button onClick={handleToggle} className="btn btn-warning mb-3">Click Me to show All NBA teams</button>
      <br/>

      

      {weatherInfoStatus&&<WeatherWidget/>}


      <input className="mt-3 mb-2 form-control" onChange={handleChange} placeholder="Search" type='text'></input>
    

      <div className='container'>
      <div className='row'>

      {showContent===true&&teams.filter((val)=>{ 
        if (search == ''){
          return val
        } else if (val.full_name.toLowerCase().includes(search.toLowerCase())){
          return val
        }
      })
        .map((team)=><div className='col-4 mb-5' ><Team shortname={team.name} fullname={team.full_name} conf={team.conference} div={team.division} abb={team.abbreviation} city={team.city}/></div>)}
      </div>

      </div>
      </main>
    </div>
  );
}

export default App;
