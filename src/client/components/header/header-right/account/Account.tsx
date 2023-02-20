"use client"

import React from 'react';
import {useAppSelector} from "../../../../hooks";
import styles from './Account.module.scss'
import AppButton from "../../../ui/button-link/app-button/AppButton";
import Notifications from "../notifications/Notifications";
import Menu from "../menu/Menu";

const Account = () => {
	const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)

	return (
		<>
			{ isAuthenticated ? <Notifications /> : null }
			<div className={styles.account}>
				{ isAuthenticated
					? <>
						<AppButton style={"filled"} small={true} className={styles.hiddenBtn}>
							Upload
						</AppButton>
						<Menu />
					</>
					: <>
						<AppButton style={"outlined"} small={true} className={styles.hiddenBtn}>
							Create Account
						</AppButton>
						<Menu hamburgerOnly={true} />
					</> }
			</div>
		</>
	);
};

export default Account;