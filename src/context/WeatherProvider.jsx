import React, { createContext } from "react";
import { useState } from "react";
const WeatherContext = createContext();
const WeatherProvider = ({ children }) => {
  const [data, setData] = useState({
    ciudad: "",
    pais: "",
  });
  const handleChangeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <WeatherContext.Provider value={{ data, handleChangeData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
