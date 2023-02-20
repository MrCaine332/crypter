"use client"

import React from 'react';
import styles from './MenuDropdown.module.scss'
import MenuDropdownAuthenticated from "./authenticated/MenuDropdownAuthenticated";
import MenuDropdownNotAuthenticated from "./not-authenticated/MenuDropdownNotAuthenticated";
import {useAppSelector} from "../../../../../hooks";

const MenuDropdown = () => {
	const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)

	return (
		<div className={styles.dropdown}>
			{ isAuthenticated
				? <MenuDropdownAuthenticated />
				: <MenuDropdownNotAuthenticated />
			}
		</div>
	);
};

export default MenuDropdown;