import { AnyAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IMainVideo } from "../../../models/media/media";
import { mainVideo } from '../../../services/media/main-video';

const initialState: IMainVideo = {
    isLoading: false,
    isSuccess: false,
    userData: [],
    userError: null
}

export const mainVideoThunk = createAsyncThunk(
    "mainVideo/mainVideoThunk",
    async () => {
        try {
            const response = await mainVideo();
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
)

const mainVideoSlice = createSlice({
    name: "mainVideo",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(mainVideoThunk.pending, (state: IMainVideo) => {
                state.isLoading = true
            })
            .addCase(mainVideoThunk.fulfilled, (state: IMainVideo, action: AnyAction) => {
                console.log(action.payload)
                state.isLoading = false;
                state.isSuccess = true;
                state.userData = action.payload
            })
            .addCase(mainVideoThunk.rejected, (state: IMainVideo, action: AnyAction) => {
                state.isSuccess = false;
                state.userError= action?.error?.message

            })
    },
})

export default mainVideoSlice.reducer;