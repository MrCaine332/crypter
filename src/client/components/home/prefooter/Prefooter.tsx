import React from 'react';
import styles from './Prefooter.module.scss'
import Image from "next/image";
import cubes from '../../../../../public/images/cubes.png'
import AppButton from "../../ui/button-link/app-button/AppButton";
import ComponentContainer from "../../component-container/ComponentContainer";

const Prefooter = () => {
	return (
		<ComponentContainer className={styles.test}>
			<div className={styles.prefooter}>
				<div className={styles.info}>
					<div className={styles.texts}>
						<p className="hairlineLarge">SAVE YOUR TIME WITH STACKS</p>
						<p className={styles.headline + " headline1"}>Earn free crypto with Crypter</p>
						<p className="textBody2">A creative agency that lead and inspire</p>
					</div>
					<div className={styles.buttons}>
						<AppButton style="filled">Earn now</AppButton>
						<AppButton style="outlined">Discover more</AppButton>
					</div>
				</div>
				<div className={styles.image}>
					<Image src={cubes} alt='' />
				</div>
			</div>
		</ComponentContainer>
	);
};

export default Prefooter;