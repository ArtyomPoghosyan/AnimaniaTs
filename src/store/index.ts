import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import mainVideo from "../slices/media/main-video/main-video"
import user from "../slices/user/all-user";

export const Store = configureStore({
    reducer: {
        user: user,
        mainVideo:mainVideo
    }
})

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;