"use client"

import React from 'react';
import styles from './ThemeSwitcher.module.scss'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {themeActions} from "../../../store/slices/theme-slice";
import Icons from "../../ui/icons/Icons";

const ThemeSwitcher: React.FC = () => {

	const dispatch = useAppDispatch()
	const theme = useAppSelector(state => state.theme)

	const handleChange = () => {
		const next = theme === 'dark' ? 'light' : 'dark'
		dispatch(themeActions.set(next))
	}

	const onEnterDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
		if (e.key === 'Enter') {
			handleChange()
		}
	}

	return (
		<div className={styles.themeSwitcher}>
			<input type="checkbox" id={'theme_switcher'} hidden
			       checked={theme === 'dark'} onChange={handleChange}
			/>
			<label htmlFor="theme_switcher"
			       className={styles.themeSwitcher_inner}
			       tabIndex={0}
			       onKeyDown={onEnterDown}>
				<div className={styles.themeSwitcher_icon}>
					<Icons name={'brightness-down'} size={24} />
				</div>
				<div className={styles.themeSwitcher_icon}>
					<Icons name={'brightness-up'} size={24} />
				</div>
			</label>
		</div>
	);
};

export default ThemeSwitcher;