import React, { useState, useEffect} from "react";
import './oneTeam.css'

function Team(props){
return (
<div>
<div className="card mt-2 indTeam">
<img class="card-img-top teamImg img-fluid" src={`http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${props.abb.toLowerCase()}.png`} 
alt="Team Logo"/>
  <div className="card-body">
    <h5 className="card-title"><b>{props.shortname}</b></h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-danger">Check Weather in {props.city}</a>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item"><b>Full Name:</b> {props.fullname}</li>
    <li class="list-group-item"><b>City:</b> {props.city}</li>
    <li class="list-group-item"><b>Conference:</b> {props.conf}</li>
    <li class="list-group-item"><b>Division:</b> {props.div}</li>
  </ul>

</div>
</div>

);
}

export default Team;