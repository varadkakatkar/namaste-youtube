import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
    searchVideoIds: [], // Pre-fetched video IDs from suggestion response (avoids re-search)
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.searchVideoIds = [];
    },
    setSearchFromSuggestion: (state, action) => {
      state.searchQuery = action.payload.query;
      state.searchVideoIds = action.payload.videoIds;
    },
    clearSearch: (state) => {
      state.searchQuery = "";
      state.searchVideoIds = [];
    },
  },
});

export const { setSearchQuery, setSearchFromSuggestion, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
