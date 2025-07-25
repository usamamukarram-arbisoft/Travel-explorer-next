import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "../Types/Types";

const initialState: Auth = {
  user: null,
  isloggedIn: false,
};

const loginSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login(state, action) {
      console.log("🚀 ~ login ~ action:", action);
      state.user = action.payload;
      state.isloggedIn = true;
      console.log("🚀 ~ login ~ state:", state);
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
