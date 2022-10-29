import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: 'homeReducer',
  initialState: {
    list: []
  },
  reducers: {
    getData(state, {payload}) {
      state.list = payload
    }
  }
})

export const { getData } = homeSlice.actions

export default homeSlice.reducer