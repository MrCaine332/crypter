import React from 'react';
import styles from './ImageHover.module.scss'
import Icons from "../icons/Icons";

const ImageHover = () => {
	return (
		<div className={styles.imageHover}>
			<div className={styles.shadow}></div>
			<div className={styles.circle}>
				<Icons name={'arrow-right'} size={'20'} />
			</div>
		</div>
	);
};

export default ImageHover;