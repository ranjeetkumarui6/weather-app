import { createSlice } from "@reduxjs/toolkit";

const slices = createSlice({
  name: "slices",
  initialState: {
    name: "",
    temp: "",
    desc: "",
    hum: "",
    wind: "",
    day: null,
    date: null,
    month: null,
  },
  reducers: {
    handlename: (state, action) => {
      state.name = action.payload;
    },
    handleday: (state, action) => {
      state.day = action.payload;
    },
    handledate: (state, action) => {
      state.date = action.payload;
    },
    handlemonth: (state, action) => {
      state.month = action.payload;
    },
    handletempareture: (state, action) => {
      state.temp = action.payload;
    },
    handledesc: (state, action) => {
      state.desc = action.payload;
    },
    handlehumidity: (state, action) => {
      state.hum = action.payload;
    },
    handlewind: (state, action) => {
      state.wind = action.payload;
    },
  },
});
export const slicesaction = slices.actions;
export default slices.reducer;
