import React from 'react';
import styles from './MenuUser.module.scss'

const MenuUser = () => {
	return (
		<div className={styles.menuUser}>
			<div className={styles.avatar}></div>
			<div className={styles.balance}>
				<span className={styles.amount + ' button2'}>
					7.00689
				</span>
				<span className={styles.currency + ' button2'}>ETH</span>
			</div>
		</div>
	);
};

export default MenuUser;