import React, {useState} from 'react';

export const WeatherContext = React.createContext();

export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState('')


    return(
        <WeatherContext.Provider value={{city, setCity}}>
            {children}
        </WeatherContext.Provider>
    )
}
