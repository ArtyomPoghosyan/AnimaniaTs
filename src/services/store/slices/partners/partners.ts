import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { isAxiosError } from "axios"
import { getPartners } from "../../.."


const initialState: any = {
    isLoading: false,
    isSuccess: false,
    data: [],
    error: null
}

export const Partners = () => {

}
export const partnersThunk = createAsyncThunk(
    "getPartners",
    async (_,{rejectWithValue}) => {
        try {
           const response = await getPartners();
           return response?.data
        } catch (err: unknown) {
            if (isAxiosError(err)) {
                return rejectWithValue(err.response?.data.message)
            }
        }
    }
)

const partnersSlice = createSlice({
    name:"partners",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(partnersThunk.pending,(state:any) => {
            state.isLoading= true
        })
        builder.addCase(partnersThunk.fulfilled,(state:any,action:AnyAction) => {
            state.isLoading= false;
            state.data= action?.payload
        })
        builder.addCase(partnersThunk.rejected,(state:any,action:AnyAction) => {
            state.error = action?.payload
        })
    },
})

export default partnersSlice.reducer;