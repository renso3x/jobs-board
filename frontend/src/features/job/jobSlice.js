import { createSlice } from '@reduxjs/toolkit'

export const jobSlice = createSlice({
  name: 'job',
  initialState: {
    date: '',
    board: []
  },
  reducers: {
    updateJobBoard: (state, action) => {
      state.board = action.payload
    },
    updateDate: (state, action) => {
      state.date = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateJobBoard, updateDate } = jobSlice.actions

export default jobSlice.reducer