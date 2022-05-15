import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: {},
    myBoard: []
  },
  reducers: {
    fetchProfile: (state, action) => {
      state.profile = action.payload
    },
    fetchMyBoard: (state, action) => {
      state.myBoard = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetch } = userSlice.actions

export default userSlice.reducer