import { createSlice } from "@reduxjs/toolkit"
import { getUser } from "./userActions"

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        status: false,
        error: "",
    },
    reducers: {
        // non async functions here
    },
    extraReducers: {
        [getUser.pending]: (state, action) => {
            state.status = false;
        },
        [getUser.rejected]: (state, action) => {
            state.error = action.payload
            state.status = false
            state.user = []
        },
        [getUser.fulfilled]: (state, action) => {
            state.user = { ...action.payload }
            state.status = true
            state.error = ""
        },
    }
})

export const userActions = userSlice.actions;
export default userSlice;