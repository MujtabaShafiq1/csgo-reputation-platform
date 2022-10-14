import { createAsyncThunk, } from "@reduxjs/toolkit"

export const getUser = createAsyncThunk("user/login", async (arg, { rejectWithValue }) => {
    try {
        const response = await fetch(`https://repclone.herokuapp.com/api/auth/login/success`, {
            credentials: "include",
            headers: {
                method: "GET",
                "Content-Type": "charset=utf-8",
            },
        })
        if (response.ok) {
            const user = await response.json();
            return user
        } else {
            throw new Error(response.message)
        }
    } catch (err) {
        return rejectWithValue(err.message)
    }

});