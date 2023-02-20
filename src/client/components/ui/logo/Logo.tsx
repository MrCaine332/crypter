import React from 'react';
import Image from "next/image";
import logoImg from '../../../../../public/logo/logo.png'
import styles from './Logo.module.scss'

type Logo = {
	direction?: 'horizontal' | 'vertical'
	text?: boolean
}

const Logo: React.FC<Logo> = ({ direction = 'horizontal', text = true }) => {

	return (
		<div className={styles.logo}>
			<Image src={logoImg} alt={''} />
			{ text &&
				<p className="textBodyBold">
					crypter
				</p>
			}
		</div>
	);
};

export default Logo;