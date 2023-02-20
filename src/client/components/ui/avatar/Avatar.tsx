import React from 'react';
import styles from './Avatar.module.scss'
import Image from "next/image";

interface IAvatar {
	image?: any
	size?: number | string
}
const Avatar: React.FC<IAvatar> = ({ image, size }) => {

	console.log(typeof(size))

	return (
		<div className={styles.avatar}
		     style={size
			     ? typeof(size) === 'number'
				     ? { width: size + 'px', height: size + 'px'}
				     : { width: size, height: size }
			     : undefined}
		>
			{ image ? <Image src={image} alt={''} /> : null }
		</div>
	);
};

export default Avatar;