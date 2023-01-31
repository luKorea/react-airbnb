import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData
} from '@/services'
import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (payload, {
  dispatch
}) => {
  // payload 用户传入的参数
  // store 对象
  const goodPrice = await getHomeGoodPriceData()
  dispatch(changeGoodPriceInfoAction(goodPrice))
  const highScore = await getHomeHighScoreData()
  dispatch(changeHighScoreInfoAction(highScore))
  const discount = await getHomeDiscountData()
  dispatch(changeDiscountInfoAction(discount))
  const recommend = await getHomeHotRecommendData()
  dispatch(changeRecommendInfoAction(recommend))
  const longfor = await getHomeLongforData()
  dispatch(changeLongforInfoAction(longfor))
  const plus = await getHomePlusData()
  dispatch(changePlusInfoAction(plus))
})


const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, {
      payload
    }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, {
      payload
    }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, {
      payload
    }) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, {
      payload
    }) {
      state.recommendInfo = payload
    },
    changeLongforInfoAction(state, {
      payload
    }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, {
      payload
    }) {
      state.plusInfo = payload
    }
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   state.goodPriceInfo = payload
    // }
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer