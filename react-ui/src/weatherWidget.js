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
      {weatherInfo.current.condition.text}

      <span> {weatherInfo.current.condition.text==='Sunny'&&<div><div id="weather-animations"><div class="row col-6">
    <div class="weather">
      <div id="rays" class="rays"></div>
      <div id="sun" class="sun"></div>
    </div><div className='col-6'><h3>{weatherInfo.current.condition.text}</h3></div></div></div></div>}</span>
 
    <span> {weatherInfo.current.condition.text==='Clear'&&<div><div id="weather-animations"><div class="row col-6">
    <div class="weather"><div id="star1" class="star"></div><div id="moon"></div><div id="star2" class="star"></div>
      <div id="star3" class="star"></div></div><div className='col-6'><h3>{weatherInfo.current.condition.text}</h3></div></div></div></div>}</span></div>

      <span> {weatherInfo.current.condition.text==='Partly cloudy'&&<div><div id="weather-animations"><div class="row col-6">
      <div class="weather"><div id="miniRays" class="rays"></div><div id="miniSun" class="sun"></div><div id="miniCloud" class="cloud"></div>
    </div><div className='col-6'><h3>{weatherInfo.current.condition.text}</h3></div></div></div></div>}</span>   
      
    <span> {weatherInfo.current.condition.code>=1006&&weatherInfo.current.condition.code<1031 &&<div><div id="weather-animations"><div class="row col-6">
    <div class="weather">
      <div id="miniDarkCloud" class="cloud"></div>
      <div id="cloud" class="cloud"></div>
    </div><div className='col-6'><h3>{weatherInfo.current.condition.text}</h3></div></div></div></div>}</span>

    <span> {weatherInfo.current.condition.code>=1062&&weatherInfo.current.condition.code<1283 &&<div><div id="weather-animations"><div class="row col-6">
    <div class="weather">
      <div id="raindrop1" class="raindrop"></div>
      <div id="raindrop2" class="raindrop"></div>
      <div id="raindrop3" class="raindrop"></div>
      <div id="raindrop4" class="raindrop"></div>
      <div id="darkCloud" class="cloud"></div>
    </div><div className='col-6'><h3>{weatherInfo.current.condition.text}</h3></div></div></div></div>}</span>

      <div className="container">
      <div className='row'>
      <h4>{weatherInfo.current.temp_c}°C/ {weatherInfo.current.temp_f}°F </h4>
      </div>
      <div className='row'>
      <h4>{weatherInfo.location.localtime}</h4>
      </div>
      <div className='row'>
      <h4>{weatherInfo.current.wind_degree} degree at {weatherInfo.current.wind_mph} mph of wind </h4>
      </div>
      </div>
      </div>

    
    
  </div>
  
  );
  }

  
export default WeatherWidget;
