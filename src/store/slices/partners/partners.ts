import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { isAxiosError } from "axios"
import { IPartnersState } from "../../../models/partners/partners";
import { getPartners } from "../../../services";


const initialState: IPartnersState = {
    isLoading: false,
    isSuccess: false,
    data: [],
    error: null
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
        builder.addCase(partnersThunk.pending,(state:IPartnersState) => {
            state.isLoading= true
        })
        builder.addCase(partnersThunk.fulfilled,(state:IPartnersState,action:AnyAction) => {
            state.isLoading= false;
            state.data= action?.payload
        })
        builder.addCase(partnersThunk.rejected,(state:IPartnersState,action:AnyAction) => {
            state.error = action?.payload
        })
    },
})

export default partnersSlice.reducer;