import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import project from "./slices/project/project";
import media from "./slices/media/media";
import partners from "./slices/partners/partners";
import contact from "./slices/contact/contact";
import about from "./slices/about/about"

export const Store = configureStore({
    reducer: {
        project:project,
        media:media,
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