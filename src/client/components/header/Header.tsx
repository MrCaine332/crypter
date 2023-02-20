import React from 'react';
import styles from './Header.module.scss'
import Logo from "../ui/logo/Logo";
import AppLink from "../ui/button-link/app-link/AppLink";
import Divider from "../ui/divider/Divider";
import ThemeSwitcher from "./theme-switcher/ThemeSwitcher";
import HeaderRight from "./header-right/HeaderRight";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerContent + ' container'}>
				<div className={styles.headerLeft}>
					<Logo />
					<ThemeSwitcher />
					<div className={styles.headerLeft_nav}>
						<Divider direction={"vertical"} />
						<AppLink small={true} style={'simple'} href={'test'}>Discover</AppLink>
						<AppLink small={true} style={'simple'} href={'/'}>How it works</AppLink>
					</div>
				</div>
				<HeaderRight />
			</div>
		</header>
	);
};

export default Header;