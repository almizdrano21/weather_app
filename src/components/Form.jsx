import React from "react";
import useWeather from "../hooks/useWeather";
import { countries } from "../constants/index";
/**
 * tODO HACER COMMITS BIEN
 * @returns
 */
const Form = () => {
  const { handleChangeData } = useWeather();
  return (
    <form>
      <div>
        <label htmlFor="city">Ciudad</label>
        <input type="text" onChange={(e) => handleChangeData(e)} />
      </div>
      <div>
        <label htmlFor="countries">País</label>
        <select name="countries" onChange={(e) => handleChangeData(e)}>
          <option value="">Selecciona un país...</option>
          {countries.forEach((country) => (
            <option value={country.code}>{country.name}</option>
          ))}
        </select>
      </div>
      <button>WHATS THE WEATHER LIKE?</button>
    </form>
  );
};

export default Form;
