import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// import mainVideo from "../slices/media/slider"
import user from "../slices/user/all-user";
import slider from "../slices/media/slider";
import mainVideo from "../slices/media/main-video";

export const Store = configureStore({
    reducer: {
        user: user,
        slider:slider,
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