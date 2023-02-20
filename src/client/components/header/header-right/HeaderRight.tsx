import React from 'react';
import styles from './HeaderRights.module.scss'
import Account from "./account/Account";
import Search from "./search/Search";

const HeaderRight = () => {
	return (
		<div className={styles.headerRight}>
			<Search />
			<Account />
		</div>
	);
};

export default HeaderRight;
