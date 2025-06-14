import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  currentRestaurant: {},
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const isItems = state.cart.find(item => item?.id === action.payload.id);
      if (isItems) {
        isItems.qty++;
      } else {
        state.cart.push({...action.payload, qty: 1});
      }
    },
    removeFromcart: (state, action) => {
      const isItems = state.cart.find(item => item?.id === action?.payload?.id);
      if (isItems) {
        if (isItems.qty > 1) {
          isItems.qty--;
        } else {
          const filter_item = state.cart.filter(
            item => item?.id !== action?.payload?.id
          );
          state.cart = filter_item;
        }
      }
    },
    setEmptyCart: state => {
      state.cart = [];
    },
    setCurremtRestaurant: (state, action) => {
      state.currentRestaurant = action.payload;
    },
  },
});

export const {addTocart, setCurremtRestaurant, removeFromcart, setEmptyCart} =
  cartslice.actions;

export default cartslice.reducer;
