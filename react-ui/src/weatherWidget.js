import React, { useState, useEffect, useContext} from "react";
import { WeatherContext } from "./WeatherContext";
import './weatherWidget.css'

function WeatherWidget(props){
  const {city, setCity, counter, setCount, weatherInfo, setWeather} = useContext(WeatherContext);
  
  
     //<img className='WeatherImg' src={`${weatherInfo.current.condition.icon}`} />
  return (
  <div>
  
   <div className='currentWeatherDiv'>
      <div className='centerTextClass'>

      <h3>{weatherInfo.location.name + ', ' + weatherInfo.location.region}</h3>

      <span> {weatherInfo.current.condition.text==='Sunny'&&<div><div id="weather-animations"><div className="row col-6">
    <div className="weather">
      <div id="rays" className="rays"></div>
      <div id="sun" className="sun"></div>
    </div><div className='col-6'><h3>{weatherInfo.current.condition.text}</h3></div></div></div></div>}</span>
 
    <span> {weatherInfo.current.condition.text==='Clear'&&<div><div id="weather-animations"><div className="row col-6">
    <div className="weather"><div id="star1" className="star"></div><div id="moon"></div><div id="star2" className="star"></div>
      <div id="star3" className="star"></div></div><div className='col-6'><h3>{weatherInfo.current.condition.text}</h3></div></div></div></div>}</span></div>

      <span> {weatherInfo.current.condition.text==='Partly cloudy'&&<div><div id="weather-animations"><div className="row col-6">
      <div className="weather"><div id="miniRays" className="rays"></div><div id="miniSun" className="sun"></div><div id="miniCloud" className="cloud"></div>
    </div><div className='col-6'><h3>{weatherInfo.current.condition.text}</h3></div></div></div></div>}</span>   
      
    <span> {weatherInfo.current.condition.code>=1006&&weatherInfo.current.condition.code<1031 &&<div><div id="weather-animations"><div className="row col-6">
    <div className="weather">
      <div id="miniDarkCloud" className="cloud"></div>
      <div id="cloud" className="cloud"></div>
    </div><div className='col-6'><h3>{weatherInfo.current.condition.text}</h3></div></div></div></div>}</span>

    <span> {weatherInfo.current.condition.code>=1062&&weatherInfo.current.condition.code<1283 &&<div><div id="weather-animations"><div className="row col-6">
    <div className="weather">
      <div id="raindrop1" className="raindrop"></div>
      <div id="raindrop2" className="raindrop"></div>
      <div id="raindrop3" className="raindrop"></div>
      <div id="raindrop4" className="raindrop"></div>
      <div id="darkCloud" className="cloud"></div>
    </div><div className='col-6'><h3>{weatherInfo.current.condition.text}</h3></div></div></div></div>}</span>

      <div className="container">
      <div className='row'>
      <h4>{weatherInfo.current.temp_c}°C/ {weatherInfo.current.temp_f}°F </h4>
      </div>
      <div className='row'>
      <h4>{weatherInfo.location.localtime}</h4>
      </div>
      <div className='row'>
      <h4>{weatherInfo.current.wind_degree}° at {weatherInfo.current.wind_mph} mph of wind </h4>
      </div>
      </div>
      </div>

    
    
  </div>
  
  );
  }

  
export default WeatherWidget;
