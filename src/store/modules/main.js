import {
  createSlice
} from "@reduxjs/toolkit";


const mainReducer = createSlice({
  name: 'main',
  initialState: {
    headerConfig: {
      isFixed: false,
      topAlpha: false,
      isHome: true
    }
  },
  reducers: {
    changeHeaderConfigAction(state, {
      payload
    }) {
      state.headerConfig = payload
    }
  }
})

export const {
  changeHeaderConfigAction
} = mainReducer.actions

export default mainReducer.reducer