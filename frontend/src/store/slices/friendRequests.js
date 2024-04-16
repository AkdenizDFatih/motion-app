import { createSlice } from "@reduxjs/toolkit";

export const friendRequests = createSlice({
  name: "friendRequests",
  initialState: [],
  reducers: {
    setRequests: (state, action) => {
      return state = action.payload;
    },
  },
});
export const { setRequests } = friendRequests.actions;
export default friendRequests.reducer;