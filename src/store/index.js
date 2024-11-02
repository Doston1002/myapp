import { configureStore } from "@reduxjs/toolkit";
import countReducer from '../reducers/countSlice';

export default configureStore({
  reducer: {
    count: countReducer, // Change `reducer` to `count`
  },
  devTools: process.env.NODE_ENV !== 'production',
});
