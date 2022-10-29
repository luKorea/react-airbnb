import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: 'detailReducer',
  initialState: {
    list: []
  },
  reducers: {
    getData(state, {payload}) {
      state.list = payload
    }
  }
})

export const { getData } = detailSlice.actions

export default detailSlice.reducer