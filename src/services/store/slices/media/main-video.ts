import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../../../../models/media/media";
import axios from "axios";
import { mainVideo } from "../../..";

const initialState: IInitialState = {
    isLoading: false,
    isSuccess: false,
    data: [],
    error: null
}

export const mainVideoThunk = createAsyncThunk(
    "getMainVideo/mainVideoThunk",
    async () => {
        try {
            const response = await mainVideo();
            console.log(response?.data)
            return Promise.resolve(response?.data)
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                return Promise.reject(error)
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
            .addCase(mainVideoThunk.pending, (state: IInitialState) => {
                state.isLoading = true
            })
            .addCase(mainVideoThunk.fulfilled, (state: IInitialState, action: AnyAction) => {
                console.log(action)
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action?.payload
            })
            .addCase(mainVideoThunk.rejected, (state: IInitialState, action: AnyAction) => {
                state.isSuccess = false;
                state.error = action?.error?.message[0]
            })
    },
})

export default mainVideoSlice.reducer;