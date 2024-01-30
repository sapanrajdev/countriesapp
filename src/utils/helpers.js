export const getFilteredList = (state, action) => {
  const searchTerm = action.payload;
  const { filterValue } = state;
  return searchTerm || state.filterValue
    ? state.originalCountryList.filter((country) => {
        if (filterValue && !searchTerm) {
          return country.population <= filterValue;
        } else if (!filterValue && searchTerm) {
          return country.name?.toLowerCase().includes(searchTerm.toLowerCase());
        } else {
          return (
            country.name?.toLowerCase().includes(searchTerm.toLowerCase()) &&
            country.population <= filterValue * 1000000
          );
        }
      })
    : state.originalCountryList;
};
