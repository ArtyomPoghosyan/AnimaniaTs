import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import user from "../services/store/slices/user/all-user";
import slider from "../services/store/slices/media/slider";
import mainVideo from "../services/store/slices/media/main-video";
import partners from "../services/store/slices/partners/partners";
import contact from "../services/store/slices/contact/constact";
import about from "../services/store/slices/about/about"

export const Store = configureStore({
    reducer: {
        user: user,
        slider:slider,
        mainVideo:mainVideo,
        partners:partners,
        contact:contact,
        about:about
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