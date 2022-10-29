import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: 'loginReducer',
  initialState: {
    list: []
  },
  reducers: {
    getData(state, {payload}) {
      state.list = payload
    }
  }
})

export const { getData } = loginSlice.actions

export default loginSlice.reducer