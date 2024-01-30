export const COUNTRY_LABELS = {
  COUNTRY_INFO: "Country Info",
  SHOW_ALL: "Show All Countries",
  CLEAR: "Clear",
  SELECT_POPULATION: "Select Population",
  NO_DATA: "No Data Found",
  LOADING: "Loading...",
};

export const URLS = {
  BASE: "https://mocki.io/",
  GET_COUNTRIES: "v1/ec42d07b-99b4-4d9b-b678-4643ef8baad8",
};

export const POPULATION_OPTIONS = [
  { value: 1 * 1000000, title: "< 1 M" },
  { value: 5 * 1000000, title: "< 5 M" },
  { value: 10 * 1000000, title: "< 10 M" },
];

export const TABLE_COLUMNS = [
  { id: "name", title: "Country Name" },
  { id: "abbreviation", title: "Code" },
  { id: "capital", title: "Capital" },
  { id: "phone", title: "Ph Code" },
  { id: "population", title: "Population" },
  { id: "media.flag", type: "image", title: "Flag" },
  { id: "media.emblem", type: "image", title: "Emblem" },
];
