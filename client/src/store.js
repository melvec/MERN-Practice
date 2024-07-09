import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./actions/nameSlice";

const store = configureStore({
  reducer: {
    name: nameReducer,
  },
});

export default store;
