import { AnyAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IInitialState } from "../../../../models/media/media";
import { slider } from '../../..';



const initialState: IInitialState = {
    isLoading: false,
    isSuccess: false,
    data: [],
    error: null
}

export const sliderThunk = createAsyncThunk(
    "mainVideo/sliderThunk",
    async () => {
        try {
            const response = await slider();
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
)

const sliderSlice = createSlice({
    name: "mainVideo",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(sliderThunk.pending, (state: IInitialState) => {
                state.isLoading = true
            })
            .addCase(sliderThunk.fulfilled, (state: IInitialState, action: AnyAction) => {
                console.log(action.payload)
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload
            })
            .addCase(sliderThunk.rejected, (state: IInitialState, action: AnyAction) => {
                state.isSuccess = false;
                state.error= action?.error?.message

            })
    },
})

export default sliderSlice.reducer;