import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAllUser } from "../../models/user/user";
import { getCurrentUSer } from "../../services";

const initialState: IAllUser = {
    isLoading: false,
    isSuccess: false,
    userData: [],
    userError: null
}

export const UserThunk = createAsyncThunk(
    "getAllUsers/usersThunk",
    async () => {
        try {
            const response = await getCurrentUSer();
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
)

const userSlice = createSlice({
    name: "getAlluser",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(UserThunk.pending, (state: IAllUser) => {
                state.isLoading = true;
            })
            .addCase(UserThunk.fulfilled, (state: IAllUser, action: AnyAction) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.userData = action.payload
            })
            .addCase(UserThunk.rejected, (state: IAllUser, action: AnyAction) => {
                state.isSuccess = false;
                state.userError = action?.error?.message
            })
    },
})

export default userSlice.reducer;