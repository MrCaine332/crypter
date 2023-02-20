import React from 'react';
import styles from './MenuDropdownNavbar.module.scss'
import Icons from "../../../../../ui/icons/Icons";
import Divider from "../../../../../ui/divider/Divider";
import ThemeSwitcherMobile from "../../../../theme-switcher/ThemeSwitcherMobile";
import AppLink from "../../../../../ui/button-link/app-link/AppLink";
import AppButton from "../../../../../ui/button-link/app-button/AppButton";
import Search from "../../../search/Search";


const MenuDropdownNavbar: React.FC<{ isAuthenticated: boolean }>
	= ({ isAuthenticated }) => {
	return (
		<div className={[styles.navbar, isAuthenticated ? styles.navbar_marginTop : ''].join(' ')}>
			{ isAuthenticated
				? <>
					<div className={styles.navbarItem}>
						<AppLink href={'/'} small className={styles.navbarItemButton}>
							<Icons name={'user'} size={20} /><p className="button2">My profile</p>
						</AppLink>
						<Divider />
					</div>
					<div className={styles.navbarItem}>
						<AppLink href={'/test'} small className={styles.navbarItemButton}>
							<Icons name={'image'} size={20} /><p className="button2">My items</p>
						</AppLink>
						<Divider />
					</div>
					<div className={styles.navbarItem}>
						<AppButton small className={styles.navbarItemButton}>
							<Icons name={'sign-out'} size={20} /><p className="button2">Disconnect</p>
						</AppButton>
					</div>
				</>
				: <>
					<div className={styles.navbarItem}>
						<AppLink href={'/test'} small className={styles.navbarItemButton}>
							<Icons name={'image'} size={20} /><p className="button2">Discover</p>
						</AppLink>
						<Divider />
					</div>
					<div className={styles.navbarItem}>
						<AppLink href={'/'} small className={styles.navbarItemButton}>
							<Icons name={'user'} size={20} /><p className="button2">Create Account</p>
						</AppLink>
					</div>
				</>
			}

			<ThemeSwitcherMobile />
			<Search mobile />
		</div>
	);
};

export default MenuDropdownNavbar;