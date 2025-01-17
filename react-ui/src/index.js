import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CssBaseline from '@mui/material/CssBaseline';
import * as serviceWorker from "./serviceWorker";
import {WeatherProvider} from "./WeatherContext"
ReactDOM.render(
  <WeatherProvider>
  <CssBaseline>
    <App />
  </CssBaseline>
  </WeatherProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
