import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state) => {
      state.items.pop();
    },

    clearCart: (state) => {
      state.items.length = 0;
      // OR: state.items = [];
    },
  },
});

// Named exports for actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Default export for reducer
export default cartSlice.reducer;