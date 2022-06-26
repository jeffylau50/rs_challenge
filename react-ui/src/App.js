import React, { useState, useEffect, useContext} from "react";
import { Button } from "@mui/material";
import rsLogo from "./logo-with-name.png";
import "./App.css";
import axios from 'axios';
import Map, {Marker} from 'react-map-gl'
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Team from './oneTeam.js'
import WeatherWidget from "./weatherWidget";
import Form from "./createForm"
import { WeatherContext } from "./WeatherContext";
import 'mapbox-gl/dist/mapbox-gl.css';

/* eslint import/no-webpack-loader-syntax: off */

mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


const bBallapi = "https://www.balldontlie.io/api/v1/teams"

function App() {
  const {city, setCity, counter, setCount, weatherInfo, setWeather, teams, setTeams, formToggle, setFormToggle} = useContext(WeatherContext);
  const [search, setSearch] = useState('')
  const [geoCode, setGeoCode] = useState({coor1:0, coor2:0})
  const [showContent, setShow] = useState(false)
  const [weatherInfoStatus, setStatus] = useState(false)
  
  useEffect(()=>{
    const fetchData = async () => {
    let res = await axios.get(bBallapi);
    setTeams(res.data.data)
    console.log(teams)
    }
    fetchData();
  }, [showContent])

  useEffect(()=>{
    const fetchData = async () => {
      let res = await axios.get(`http://api.weatherapi.com/v1/current.json?key==${city}&aqi=no`);
      setWeather(res.data)
      setStatus(true)
      }
      const fetchData2 = async () => {
        let city1 = city
        let res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city1.replace(/ /g,"%20")}.json?limit=1&proximity=ip&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoiamVmZnlsYXU1MCIsImEiOiJjbDBvdDJ2cDUxN3lmM2R0a3k3anZ5Nmw0In0.TjNo0bkKGM5jgk_0HMfw8Q`);
        setGeoCode({coor1: res.data.features[0].geometry.coordinates[0], coor2:  res.data.features[0].geometry.coordinates[1]  })
        }
      fetchData();
      fetchData2();
  }, [counter]
  )

  
  const handleToggle = () => {
    setShow(true)
  }
  const handleChange = (evt) => {
  setSearch(evt.target.value)
  }
  const handleFormOpen = () => {
    setFormToggle(!(formToggle))
  }

  return (
    <div>
       <header className="App-header alignCenterClass">
        <img src={rsLogo} className="App-logo" alt="logo" />
      </header>

      <button onClick={handleToggle} className="btn btn-warning mr-3 mb-5">Show All NBA teams</button>
      {showContent&&<button onClick={handleFormOpen} className="btn btn-success ml-5 mb-5">Create a Team</button>}
      {formToggle&&<Form/>}
    <div className="container">
      
    {showContent===true&&<Map
      initialViewState={{
        latitude: 40.6699,
        longitude: -103.5917,
        zoom: 3.5
      }}
      style={{height: 500}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={"pk.eyJ1IjoiamVmZnlsYXU1MCIsImEiOiJjbDBvdDJ2cDUxN3lmM2R0a3k3anZ5Nmw0In0.TjNo0bkKGM5jgk_0HMfw8Q"}

    > <Marker longitude={geoCode.coor1} latitude={geoCode.coor2} color="red" /> 
    </Map>}
     
      <main>
      <br/>

  
      {weatherInfoStatus&&<WeatherWidget/>}


      {showContent===true&&<input className="mt-3 mb-2 form-control" onChange={handleChange} placeholder="Search" type='text'></input>}
    

      <div className='container'>
      <div className='row'>

      {showContent===true&&teams.filter((val)=>{ 
        if (search == ''){
          return val
        } else if (val.full_name.toLowerCase().includes(search.toLowerCase())){
          return val
        }
      })
        .map((team, key)=><div className='col-4 mb-5' ><Team key={key} shortname={team.name} fullname={team.full_name} conf={team.conference} div={team.division} abb={team.abbreviation} city={team.city}/></div>)}
      </div>

      </div>
      </main>
    </div>
    </div>
  );
}

export default App;
