import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "./slices/auth-slice";
import ThemeSlice from "./slices/theme-slice";

export const store = configureStore({
	reducer: {
		auth: AuthSlice,
		theme: ThemeSlice,
	}
})

// @ts-ignore
global.store = store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch