import { createSlice } from '@reduxjs/toolkit'

export const jobSlice = createSlice({
  name: 'job',
  initialState: {
    isFetching: false,
    date: '',
    board: []
  },
  reducers: {
    updateFetchingApi: (state) => {
      state.isFetching = !state.isFetching
    },
    updateJobBoard: (state, action) => {
      state.board = action.payload
      state.isFetching = false
    },
    updateDate: (state, action) => {
      state.isFetching = !state.isFetching
      state.date = action.payload
    }
  },
})

export const { updateFetchingApi, updateJobBoard, updateDate } = jobSlice.actions

export default jobSlice.reducer