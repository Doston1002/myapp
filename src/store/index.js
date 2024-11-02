import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from '../slice/auth'

export default configureStore({
  reducer: {
    auth:AuthReducer, // Change `reducer` to `count`
  },
  devTools: process.env.NODE_ENV !== 'production',
});
