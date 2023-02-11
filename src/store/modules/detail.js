import {
  createSlice
} from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: 'detailReducer',
  initialState: {
    detailInfo: {}
  },
  reducers: {
    setDetailInfoAction(state, {
      payload
    }) {
      state.detailInfo = payload
    }
  }
})

export const {
  setDetailInfoAction
} = detailSlice.actions

export default detailSlice.reducer