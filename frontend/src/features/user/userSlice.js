import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isFetching: false,
    profile: {},
    myBoard: []
  },
  reducers: {
    updateFetchingApi: (state) => {
      state.isFetching = !state.isFetching
    },
    setProfile: (state, action) => {
      state.profile = action.payload
    },
    updateMyBoard: (state, action) => {
      state.myBoard = action.payload
      state.isFetching = false
    }
  },
})

export const { updateFetchingApi, setProfile, updateMyBoard } = userSlice.actions

export default userSlice.reducer