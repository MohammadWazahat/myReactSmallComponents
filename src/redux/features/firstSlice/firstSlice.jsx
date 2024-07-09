import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "i am initialValue of first slice",
};

export const firstSlice = createSlice({
  name: "firstSlice",
  initialState,
  reducers: {
    actionTypeOneFirstSlice: (state, action) => {
        console.log(state);
        console.log(action);
      state.value = state.value + action.payload ;
    },
    actionTypeTwoFirstSlice: (state, action) => {
        console.log(state);
        console.log(action);
        state.value = state.value + action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actionTypeOneFirstSlice, actionTypeTwoFirstSlice } =
  firstSlice.actions;

export default firstSlice.reducer;
