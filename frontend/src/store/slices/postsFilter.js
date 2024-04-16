import { createSlice } from "@reduxjs/toolkit";

export const postsFilter = createSlice({
  name: "postsFilter",
  initialState: {filter : 'All', filterSearch : ""},
  reducers: {
    setPostsFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchText: (state, action) => {
      state.filterSearch = action.payload
    },
  },
});
export const { setPostsFilter, setSearchText } = postsFilter.actions;
export default postsFilter.reducer;