import {createSlice} from "@reduxjs/toolkit";
import {AuthSlice} from "../../types";

const initialState: AuthSlice = {
	isAuthenticated: true,
	isFetching: false,
	user: { }
}

const authReducer = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		setAuthenticated(state, action) {
			state.isAuthenticated = action.payload
		}
	}
})

const { actions, reducer } = authReducer

export const authActions = actions

export default reducer