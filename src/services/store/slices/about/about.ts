import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAbout } from "../../.."
import { isAxiosError } from "axios";
import { IAbout } from "../../../../models/common/common";

const initialState: IAbout = {
    isLoading: false,
    isSuccess: false,
    data: [],
    error: null
}

export const  aboutThunk = createAsyncThunk(
    "about",
    async (_,{rejectWithValue}) => {
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
    name:"getAbout",
    initialState,
    reducers:{
        resetSuccess: ((state:IAbout) => {
            state.isSuccess=false
        })
    },
    extraReducers(builder) {
        builder.addCase(aboutThunk.pending,(state:IAbout) => {
            state.isLoading= true
        })
        builder.addCase(aboutThunk.fulfilled,(state:IAbout,action:AnyAction) => {
            state.isSuccess= true;
            state.isLoading=false
            state.data= action?.payload
        })
        builder.addCase(aboutThunk.rejected,(state:IAbout,action:AnyAction)=> {
            state.isSuccess=false
            state.error= action?.payload;
        })
    },
})

export default AboutSlice.reducer;
