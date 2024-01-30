import React, { useEffect } from "react";
import {
  getAllCountries,
  resetState,
  searchItem,
  setInputValue,
  setFilterValue,
} from "../../store/slices/countriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "../../hooks/debounce";
import { COUNTRY_LABELS, POPULATION_OPTIONS } from "../../utils/constants";
import "./styles/CountryFilters.css";

export const CountryFilters = () => {
  const countryState = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const { inputValue, filterValue } = countryState;

  const searchTerm = useDebounce(inputValue, 500);

  useEffect(() => {
    dispatch(searchItem(searchTerm));
  }, [searchTerm, filterValue, dispatch]);

  return (
    <div className="countryfilters-container">
      <div className="countryfilters-selections">
        <input
          value={inputValue}
          onChange={(e) => dispatch(setInputValue(e.target.value))}
          className="name-input"
          placeholder="Country Name"
          disabled={!countryState.countryList.length}
        />
        <select
          value={filterValue}
          onChange={(e) => {
            dispatch(setFilterValue(e.target.value));
          }}
          className="population-select"
          disabled={!countryState.countryList.length}
        >
          <option value="" disabled selected>
            {COUNTRY_LABELS.SELECT_POPULATION}
          </option>
          {POPULATION_OPTIONS.map((option) => (
            <option value={option.value}>{option.title}</option>
          ))}
        </select>
        <button
          onClick={() => dispatch(resetState())}
          className="clear-population-btn"
          disabled={!countryState.countryList.length}
        >
          {COUNTRY_LABELS.CLEAR}
        </button>
      </div>
      <div className="countryfilters-btns">
        <button
          onClick={() => dispatch(getAllCountries())}
          className="show-country-btn"
        >
          {COUNTRY_LABELS.SHOW_ALL}
        </button>
      </div>
    </div>
  );
};
