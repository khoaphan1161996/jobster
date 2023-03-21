import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./features/job/jobSlice";
import userSlice from "./features/user/userSlice";
import allJobSlice from "./features/alljob/allJobSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobSlice,
  },
});
