import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, name: "Smartphone", price: 299.99, quantity: 1 },
    { id: 2, name: "Tablet", price: 449.99, quantity: 2 },
    { id: 3, name: "Smartwatch", price: 199.99, quantity: 1 },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;