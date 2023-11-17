import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { isAxiosError } from "axios";
// import { IMediaState } from "../../../models/media/media";
import { mainVideo } from "../../../services";
import { IMediaState } from "@models/index";


const initialState: IMediaState = {
    isLoading: false,
    isSuccess: false,
    data: [],
    error: null
}

export const mainVideoThunk = createAsyncThunk(
    "getMainVideo/mainVideoThunk",
    async (_,{rejectWithValue}) => {
        try {
            const response = await mainVideo();
            return Promise.resolve(response?.data)
        } catch (err: unknown) {
            if (isAxiosError(err)) {
                return rejectWithValue(err.response?.data?.message)
            }
        }
    }
)

const mainVideoSlice = createSlice({
    name: "mainVideoThunk",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(mainVideoThunk.pending, (state: IMediaState) => {
                state.isLoading = true
            })
            .addCase(mainVideoThunk.fulfilled, (state: IMediaState, action: AnyAction) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action?.payload
            })
            .addCase(mainVideoThunk.rejected, (state: IMediaState, action: AnyAction) => {
                state.isSuccess = false;
                state.error = action?.payload
            })
    },
})

export default mainVideoSlice.reducer;