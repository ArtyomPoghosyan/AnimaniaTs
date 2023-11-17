import { AnyAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { projects } from '../../../services';
import { isAxiosError } from 'axios';
import { IProjectState } from '@/models';

const initialState: IProjectState = {
    isLoading: false,
    isSuccess: false,
    data: [],
    error: null
}

export const projectSliderThunk = createAsyncThunk(
    "mainVideo/sliderThunk",
    async (_,{rejectWithValue}) => {
        try {
            const response = await projects();
            return Promise.resolve(response?.data)
        }catch (err: unknown) {
            if (isAxiosError(err)) {
                return rejectWithValue(err.response?.data?.message)
            }
        }
    }
)

const projectSliderSlice = createSlice({
    name: "mainVideo",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(projectSliderThunk.pending, (state: IProjectState) => {
                state.isLoading = true
            })
            .addCase(projectSliderThunk.fulfilled, (state: IProjectState, action: AnyAction) => {
                console.log(action.payload)
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload
            })
            .addCase(projectSliderThunk.rejected, (state: IProjectState, action: AnyAction) => {
                state.isSuccess = false;
                state.error= action?.error?.message

            })
    }
})

export default projectSliderSlice.reducer;