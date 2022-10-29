import {
  configureStore
} from "@reduxjs/toolkit";

import homeReducer from './modules/home'
import loginReducer from './modules/login'
import entireReducer from './modules/entire'
import detailReducer from './modules/detail'

const store = configureStore({
  reducer: {
    home: homeReducer,
    login: loginReducer,
    entire: entireReducer,
    detail: detailReducer
  }
})

export default store