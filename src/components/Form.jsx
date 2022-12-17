import React from "react";
import useWeather from "../hooks/useWeather";
import Error from "./Error";
import CountrySelector from "./CountrySelector";
const Form = () => {
  const { data, handleChangeData, setError, getForecast } = useWeather();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(data).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }
    getForecast();
  };
  return (
    <div className="contenedor">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="campo">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            onChange={(e) => handleChangeData(e)}
          />
        </div>
        <div className="campo">
          <CountrySelector handleChangeData={handleChangeData} />
        </div>
        <input type="submit" value="What`s the forecast?" />
        <Error />
      </form>
    </div>
  );
};

export default Form;
