import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../../utils/userMockData";

const initialState = {
  userdata: userData,
  currentLoginUser: null,
};

const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userdata.push(action?.payload);
    },
    deleteUser: (state, action) => {
      const filterUser = state?.userdata?.filter(
        (user) => user?.id !== action?.payload?.id
      );
      state.userdata = filterUser;
    },
    setCurrentUser: (state, action) => {
      const userIndex = state?.userdata?.findIndex(
        (user) => user?.email === action?.payload?.email
      );
      state.currentLoginUser = state?.userdata[userIndex];
    },
    logout: (state) => {
      state.currentLoginUser = null;
    },
  },
});

export const { addUser, setCurrentUser, deleteUser, logout } =
  userslice.actions;

export default userslice.reducer;
