import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: [],
};

const restslice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restslice.actions;

export default restslice.reducer;
