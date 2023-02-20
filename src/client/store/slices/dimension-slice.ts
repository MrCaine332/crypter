import {createSlice} from "@reduxjs/toolkit";

// const getDimension = () => {
// 	const windowSize = {
// 		windowWidth: window?.innerWidth,
// 		windowHeight: window.innerHeight
// 	}
// 	return windowSize
// }

const dimensionReducer = createSlice({
	name: 'dimension',
	initialState: {},
	reducers: {
		set: (state, action) => action.payload,
	}
})

const { actions, reducer } = dimensionReducer

export const dimensionActions = actions

export default reducer