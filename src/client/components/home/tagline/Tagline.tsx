

import React from 'react';
import styles from './Tagline.module.scss'
import AppLink from "../../ui/button-link/app-link/AppLink";
import ComponentContainer from "../../component-container/ComponentContainer";

const Tagline = () => {

	return (
		<ComponentContainer>
			<div className={styles.tagline}>
				<p className={'hairlineSmall ' + styles.hairline}>
					CREATE, EXPLORE, & COLLECT DIGITAL ART NFTS
				</p>
				<h3 className={'headline3'}>
					The new creative economy.
				</h3>
				<AppLink href={''} style={"outlined"} onClick={() => {console.log(55)}} className={styles.button}>
					Start your search
				</AppLink>
			</div>
		</ComponentContainer>
	);
};

export default Tagline;