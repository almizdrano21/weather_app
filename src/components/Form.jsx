import React from "react";
import useWeather from "../hooks/useWeather";
import { COUNTRIES } from "../constants/index";
import Error from "./Error";

const Form = () => {
  const { data, handleChangeData, error, setError, getForecast } = useWeather();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(data).includes("")) {
      console.log(Object.values(data));
      setError("Todos los campos son obligatorios");
      return;
    }
    getForecast();
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="city">City</label>
        <input type="text" name="city" onChange={(e) => handleChangeData(e)} />
      </div>
      <div>
        <label htmlFor="countries">Country</label>
        <select name="country" onChange={(e) => handleChangeData(e)}>
          <option value="">Choose a country...</option>
          {COUNTRIES.map((country) => (
            <option value={country.code} key={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <button>WHATS THE WEATHER LIKE?</button>
      <Error />
    </form>
  );
};

export default Form;
