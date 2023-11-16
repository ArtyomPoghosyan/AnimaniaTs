import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { isAxiosError } from "axios";

import { getAbout } from "../../../services";
import { IAbout } from "../../../models/common/common";

const initialState: IAbout = {
    isLoading: false,
    isSuccess: false,
    data: [],
    error: null
}

export const aboutComponyThunk = createAsyncThunk(
    "aboutCompony",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAbout()
            return Promise.resolve(response?.data)
        } catch (err: unknown) {
            if (isAxiosError(err)) {
                return rejectWithValue(err.response?.data.message)
            }
        }
    }
)

const AboutSlice = createSlice({
    name: "about compony",
    initialState,
    reducers: {
        resetSuccess: ((state: IAbout) => {
            state.isSuccess = false
        })
    },
    extraReducers(builder) {
        builder.addCase(aboutComponyThunk.pending, (state: IAbout) => {
            state.isLoading = true
        })
        builder.addCase(aboutComponyThunk.fulfilled, (state: IAbout, action: AnyAction) => {
            state.isSuccess = true;
            state.isLoading = false
            state.data = action?.payload
        })
        builder.addCase(aboutComponyThunk.rejected, (state: IAbout, action: AnyAction) => {
            state.isSuccess = false
            state.error = action?.payload;
        })
    },
})

export default AboutSlice.reducer;
