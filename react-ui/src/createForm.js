import React, { useState, useEffect, useContext} from "react";
import { WeatherContext } from "./WeatherContext";
import './createForm.css'

function Form(props){

    const {teams, setTeams, formToggle, setFormToggle} = useContext(WeatherContext);
    const [teamName, setTeamName] = useState('')
    const [divName, setDivName] = useState('Pacific')
    const [cityName, setCityName] = useState('Los Angeles')
    const [conName, setConName] = useState('East')
    const [teamLogo, setLogo] = useState('orl')
    function handleSubmit(evt){
        evt.preventDefault()
        let newTeam = {abbreviation: teamLogo, city: cityName, conference: conName, division: divName, full_name: teamName, name: teamName}
        let currentTeams = [...teams, newTeam]
        setTeams(currentTeams)
        setFormToggle(false)
    }
    const handleChange1 = (evt)=>{
        setTeamName(evt.target.value)
      }
      const handleChange2 = (evt)=>{
        setDivName(evt.target.value)
      }
      const handleChange3 = (evt)=>{
        setCityName(evt.target.value)
      }
      const handleChange4 = (evt)=>{
        setConName(evt.target.value)
      }
      const handleChange5 = (evt)=>{
        setLogo(evt.target.value)
      }
      
  return (
    <form >
    <div className="textCenterClass">
  <div className="row container inputWidth">
    <h3>Create Your Own Team</h3>
    <div className="col ">
      <input onChange={handleChange1} value={teamName} type="text" class="form-control" placeholder="Team name" required/>
    </div>
    <div className="col inputWidth">
    <select onChange={handleChange2} className="form-control" required>
      <option value="Pacific" selected>Division</option>
      <option value="Atlantic" >Atlantic</option>
      <option value="Northwest">Northwest</option>
      </select>    </div>
    <br/>
  </div>
  
</div>
<div className="textCenterClass mt-3">
  <div className="row container inputWidth2">
    <div className="col ">
      <input onChange={handleChange3} type="text" className="form-control" placeholder="City" required/>
    </div>
    <div className="col inputWidth2">
      <select onChange={handleChange4} className="form-control" required>
      <option value="East" selected>Conference</option>
      <option value="East" >East</option>
      <option value="West">West</option>
      </select>
    </div>
    <div className="col inputWidth2">
      <select onChange={handleChange5} className="form-control" required>
      <option value="orl" selected>Team Logo</option>
      <option value="orl">Orlando Magic</option>
      <option value="hou">Houston Rockets</option>
      <option value="phi">Philadelphia 76ers</option>
      </select>
    </div>
    <br/>
    
  </div>
  
</div>
<button onClick={handleSubmit} className="btn btn-primary mt-3 mb-3">Submit</button>
</form>
  );
  }
  
  export default Form;