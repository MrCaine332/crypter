import React from 'react';
import styles from './MenuDropdownHeader.module.scss';

const MenuDropdownHeader = () => {
	return (
		<div className={styles.header}>
			<div className={styles.name + ' textBodyBold'}>
				Enrico Cole
			</div>
			<div className={styles.code + ' textCaptionBold'}>
				0xc4c16ab5ac7d...b21a
			</div>
		</div>
	);
};

export default MenuDropdownHeader;