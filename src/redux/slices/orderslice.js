import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOrder: [],
};

const orderslice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload;
    },
    setEmptyCurrentOrder: (state) => {
      state.currentOrder = [];
    },
  },
});

export const { setCurrentOrder, setEmptyCurrentOrder } = orderslice.actions;

export default orderslice.reducer;
