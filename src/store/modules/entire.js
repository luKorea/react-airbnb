import { createSlice } from "@reduxjs/toolkit";

const entireSlice = createSlice({
  name: 'entireReducer',
  initialState: {
    list: []
  },
  reducers: {
    getData(state, {payload}) {
      state.list = payload
    }
  }
})

export const { getData } = entireSlice.actions

export default entireSlice.reducer