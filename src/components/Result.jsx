import React from "react";
import useWeather from "../hooks/useWeather";

const Result = ({ resultado }) => {
  const { result } = useWeather();

  const { name, main } = result;

  // Grados Kelvin
  const kelvin = 273.15;

  return (
    <div className="contenedor clima">
      <h2>The weather of {name} is: </h2>

      <p>
        {parseInt(main.temp - kelvin)} <span>&#x2103;</span> (mucho frío)
      </p>
      <div className="temp_min_max">
        <p>
          Mín: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>
        </p>
        <p>
          Máx: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

export default Result;
