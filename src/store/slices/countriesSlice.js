import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URLS } from "../../utils/constants";
import { getFilteredList } from "../../utils/helpers";

const api = axios.create({
  baseURL: URLS.BASE,
});

export const getAllCountries = createAsyncThunk("countries", async () => {
  const response = await api.get(URLS.GET_COUNTRIES);
  return response.data;
});

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countryList: [],
    originalCountryList: [],
    isLoading: false,
    inputValue: "",
    filterValue: "",
  },
  reducers: {
    setInputValue: (state, action) => {
      return {
        ...state,
        inputValue: action.payload,
      };
    },
    setFilterValue: (state, action) => {
      return {
        ...state,
        filterValue: action.payload,
      };
    },
    searchItem: (state, action) => {
      return {
        ...state,
        countryList: getFilteredList(state, action),
      };
    },
    resetState: () => {
      return {
        countryList: [],
        originalCountryList: [],
        isLoading: false,
        inputValue: "",
        filterValue: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCountries.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCountries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.countryList = action.payload;
      state.originalCountryList = action.payload;
    });
    builder.addCase(getAllCountries.rejected, (state, action) => {
      state.isLoading = false;
      state.countryList = [];
      state.error = action.error.message;
    });
  },
});

export const { resetState, searchItem, setInputValue, setFilterValue } =
  countriesSlice.actions;
export default countriesSlice.reducer;
