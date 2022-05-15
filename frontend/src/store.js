import { configureStore } from '@reduxjs/toolkit'
import jobSlice from './features/job/jobSlice'
import userSlice from './features/user/userSlice'

export default configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice
  },
})