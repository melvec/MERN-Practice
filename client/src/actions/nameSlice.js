import { createSlice } from "@reduxjs/toolkit";

//define initial state for the action
const initialState = {
  names: [],
};

const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setNames: (state, action) => {
      state.names = action.payload;
    },
  },
});

const { reducer: nameReducer, actions } = nameSlice;

export const { setNames } = actions;
export default nameReducer;
