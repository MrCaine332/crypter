import {createSlice} from "@reduxjs/toolkit";

// const getTheme = () => {
// 	if (typeof window === "undefined" )
// 		return ''
//
// 	const theme = `${window?.localStorage?.getItem('theme')}`
// 	if ([ 'light', 'dark' ].includes(theme)) return theme
//
// 	const userMedia = window?.matchMedia('(prefers-color-scheme: light)')
// 	if (userMedia?.matches) return 'light'
//
// 	return 'dark'
// }

const themeReducer = createSlice({
	name: 'theme',
	initialState: 'light',
	reducers: {
		set: (state, action) => action.payload,
	}
})

const { actions, reducer } = themeReducer

export const themeActions = actions

export default reducer