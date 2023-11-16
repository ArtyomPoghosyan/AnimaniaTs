import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { isAxiosError } from "axios"
import { IContactState, IFormData } from "../../../models/common/common"
import { sendMessage } from "../../../services"


const initialState: IContactState = {
    isLoading: false,
    isSuccess: false,
    data: [],
    error: null
}

export const sendMessageThunk = createAsyncThunk(
    "sendMessage",
    async (data: IFormData, { rejectWithValue }) => {
        try {
            const response = await sendMessage(data)
            return Promise.resolve(response?.data)
        } catch (err: unknown) {
            if (isAxiosError(err)) {
                return rejectWithValue(err.response?.data.message)
            }
        }
    }
)

const sendMessageSlice = createSlice({
    name: "sendMessage",
    initialState,
    reducers: {
        resetSuccess: ((state: IContactState) => {
            state.isSuccess = false
        })
    },
    extraReducers(builder) {
        builder.addCase(sendMessageThunk.pending, (state: IContactState) => {
            state.isLoading = true
        })
        builder.addCase(sendMessageThunk.fulfilled, (state: IContactState, action: AnyAction) => {
            state.isSuccess = true;
            state.isLoading = false
            state.data = action?.payload
        })
        builder.addCase(sendMessageThunk.rejected, (state: IContactState, action: AnyAction) => {
            state.isSuccess = false
            state.error = action?.payload;
        })
    },
})

export default sendMessageSlice.reducer;
export const handleContactState = sendMessageSlice.actions