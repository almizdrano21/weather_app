import axios from "axios";
import React, { createContext, useEffect } from "react";
import { useState } from "react";
const WeatherContext = createContext();
const WeatherProvider = ({ children }) => {
  const [data, setData] = useState({
    city: "",
    country: "",
  });
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState({});
  const handleChangeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const getForecast = async () => {
    try {
      const { city, country } = data;
      const api_key = import.meta.env.VITE_API_KEY;
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=${1}&appid=${api_key}`;

      const { data: location } = await axios(url);
      const { lat, lon } = location[0];
      const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`;
      const { data: forecast } = await axios(weatherURL);
      console.log(forecast);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <WeatherContext.Provider
      value={{
        data,
        handleChangeData,
        error,
        setError,
        getForecast,
        resultado,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
export { WeatherProvider };
export default WeatherContext;
