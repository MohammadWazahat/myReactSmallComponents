import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "i am initialValue of second slice",
  cart: [],
};

export const secondSlice = createSlice({
  name: "secondSlice",
  initialState,
  reducers: {
    actionTypeOnesecondSlice: (state, action) => {
      // console.log(state.value);
      // console.log(state.cart);
      // console.log(action);
      state.value = state.value + action.payload;
    },
    actionTypeTwosecondSlice: (state, action) => {
      // console.log(state.value);
      // console.log(action);
      state.value = state.value + action.payload;
    },
    AddToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { actionTypeOnesecondSlice, actionTypeTwosecondSlice, AddToCart } =
  secondSlice.actions;

export default secondSlice.reducer;
