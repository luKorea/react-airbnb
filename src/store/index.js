import {
  configureStore
} from "@reduxjs/toolkit";

import mainReducer from './modules/main'
import homeReducer from './modules/home'
import loginReducer from './modules/login'
import entireReducer from './modules/entire'
import detailReducer from './modules/detail'

const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
    login: loginReducer,
    entire: entireReducer,
    detail: detailReducer
  }
})

export default store