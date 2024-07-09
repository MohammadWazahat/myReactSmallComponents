import { createSlice, nanoid } from "@reduxjs/toolkit";

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
      //  console.log(action);
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      // console.log(todo)
      state.cart.push(todo);
    },
    RemoveFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  actionTypeOnesecondSlice,
  actionTypeTwosecondSlice,
  AddToCart,
  RemoveFromCart,
} = secondSlice.actions;

export default secondSlice.reducer;
