import React, {useState} from 'react';

export const WeatherContext = React.createContext();

export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState('')
    const [counter, setCount] = useState(true)
    const [weatherInfo, setWeather] = useState([])


    return(
        <WeatherContext.Provider value={{city, setCity, counter, setCount, weatherInfo, setWeather}}>
            {children}
        </WeatherContext.Provider>
    )
}
