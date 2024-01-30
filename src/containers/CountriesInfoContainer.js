import React from "react";
import { Header } from "../components/Header/Header";
import { COUNTRY_LABELS } from "../utils/constants";
import { CountryFilters } from "../pages/countryInfo/CountryFilters";
import { CountryTable } from "../pages/countryInfo/CountryTable";

export const CountriesInfoContainer = () => {
  return (
    <div className="countries-info-container">
      <Header title={COUNTRY_LABELS.COUNTRY_INFO} />
      <CountryFilters />
      <CountryTable />
    </div>
  );
};
