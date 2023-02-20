"use client"

import React from 'react';
import styles from './ThemeSwitcherMobile.module.scss'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {themeActions} from "../../../store/slices/theme-slice";
import Icons from "../../ui/icons/Icons";
import Divider from "../../ui/divider/Divider";

const ThemeSwitcherMobile: React.FC = () => {

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
		<div className={styles.themeSwitcher_mobile}>
			<Divider />
			<input type="checkbox" id="theme_switcher_mobile" hidden
			       checked={theme === 'dark'} onChange={handleChange}
			/>
			<label htmlFor={'theme_switcher_mobile'}
			       className={styles.label}
			       tabIndex={0}
			       onKeyDown={onEnterDown}
			>
				<div className={styles.desc}>
					<Icons size={20} name={'bulb'} /><p className="button2">Dark theme</p>
				</div>
				<div className={styles.switcher}>
				</div>
			</label>
		</div>
	);
};

export default ThemeSwitcherMobile;