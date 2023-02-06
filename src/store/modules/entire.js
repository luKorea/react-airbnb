import {
  getEntireList
} from "@/services";
import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";


export const fetchEntireDataAction = createAsyncThunk('fetchEntireData', async (page = 0, {
  dispatch
}) => {
  dispatch(changeCurrentPageAction(page));
  dispatch(changeIsLoadingAction(true));
  const res = await getEntireList(page * 20);
  dispatch(changeIsLoadingAction(false));
  dispatch(changeRoomListAction(res.list))
  dispatch(changeTotalCountAction(res.totalCount))
})

const entireSlice = createSlice({
  name: 'entireReducer',
  initialState: {
    roomList: [],
    currentPage: 0,
    pageSize: 10,
    totalCount: 0,
    isLoading: false
  },
  reducers: {
    changeIsLoadingAction(state, {
      payload
    }) {
      state.isLoading = payload
    },
    changeCurrentPageAction(state, {
      payload
    }) {
      state.currentPage = payload
    },
    changeRoomListAction(state, {
      payload
    }) {
      state.roomList = payload
    },
    changeTotalCountAction(state, {
      payload
    }) {
      state.totalCount = payload
    }
  }
})

export const {
  changeIsLoadingAction,
  changeCurrentPageAction,
  changeRoomListAction,
  changeTotalCountAction
} = entireSlice.actions

export default entireSlice.reducer