import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filter: { value: "", type: "", text: [] },
  sorting: { text: "createdAt", type: 1 }
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    onLoadFilter(state, action) {
      state.filter = { ...action.payload }
    },
    onLoadSorting(state, action) {
      state.sorting = { ...action.payload }
    },
    reset: () => initialState,
  },
})

export const searchActions = searchSlice.actions;
export default searchSlice;