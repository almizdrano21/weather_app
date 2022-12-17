import React from "react";
import { COUNTRIES } from "../constants/index";

const CountrySelector = ({ handleChangeData }) => {
  return (
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
  );
};

export default CountrySelector;
