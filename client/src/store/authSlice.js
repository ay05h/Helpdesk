import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: null,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.role = action.payload.role;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.role = null;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
