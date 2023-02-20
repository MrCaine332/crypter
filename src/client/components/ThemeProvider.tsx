"use client"

import React, {useEffect, useLayoutEffect} from 'react';
import {useAppDispatch, useAppSelector, useWindowSize} from "../hooks";
import {dimensionActions} from "../store/slices/dimension-slice";
import {themeActions} from "../store/slices/theme-slice";

const ThemeProvider: React.FC<{ children: React.ReactNode }>
	= ({ children}) => {
	const dispatch = useAppDispatch()

	const theme = useAppSelector((state) => state.theme)

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme !== theme) {
			dispatch(themeActions.set(savedTheme))
		}
	}, [])

	useEffect(() => {
		document.documentElement.dataset.theme = theme
		localStorage.setItem('theme', theme || 'light')
	}, [theme])

	return (
		<div className={`theme-${theme}`}>
			{ children }
		</div>
	);
};

export default ThemeProvider;