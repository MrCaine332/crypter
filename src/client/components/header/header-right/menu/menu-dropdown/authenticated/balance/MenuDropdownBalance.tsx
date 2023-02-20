import React from 'react';
import styles from './MenuDropdownBalance.module.scss'
import AppButton from "../../../../../../ui/button-link/app-button/AppButton";

const MenuDropdownBalance = () => {
	return (
		<div className={styles.balance}>
			<div className={styles.balanceDetails}>
				<div className={styles.balanceIcon}>

				</div>
				<div className={styles.balanceText}>
					<p className={styles.balanceTextCaption + ' textCaption2'}>Balance</p>
					<p className="textBodyBold">4.689 ETH</p>
				</div>
			</div>
			<AppButton style={"outlined"} small>Manage fun on Coinbase</AppButton>
		</div>
	);
};

export default MenuDropdownBalance;